import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from db import db
from models.book import Book

load_dotenv()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URL"]
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route("/books", methods=["POST"])
def add_book():
    data = request.get_json()

    new_book = Book(
        title=data["title"],
        author=data["author"],
        year=data.get("year"),
        description=data.get("description"),
        isFavorite=data.get("isFavorite", False),
        isRead=data.get("isRead", False),
        isFinished=data.get("isFinished", False),
    )

    db.session.add(new_book)
    db.session.commit()

    return jsonify({"message": "Book added successfully"}), 201


@app.route("/books", methods=["GET"])
def get_all_books():
    books = Book.query.all()
    return jsonify([book.as_dict() for book in books]), 200


@app.route("/books/<string:book_id>", methods=["GET"])
def get_book(book_id):
    book = Book.query.get(book_id)
    if book:
        return jsonify(book.as_dict()), 200
    else:
        return jsonify({"message": "Book not found"}), 404



@app.route("/books/<string:book_id>", methods=["PATCH"])
def update_book(book_id):
    book = Book.query.get(book_id)
    if not book:
        return jsonify({"message": "Book not found"}), 404

    data = request.get_json()

    for key, value in data.items():
        setattr(book, key, value)

    db.session.commit()
    return jsonify({"message": "Book updated successfully"}), 200




@app.route("/books/<string:book_id>", methods=["DELETE"])
def delete_book(book_id):
    book = Book.query.get(book_id)
    if not book:
        return jsonify({"message": "Book not found"}), 404

    db.session.delete(book)
    db.session.commit()
    return jsonify({"message": "Book deleted successfully"}), 200

with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
