from db import db
import uuid

class Book(db.Model):
    __tablename__ = "book"

    id = db.Column(
        db.String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4())
    )
    title = db.Column(db.String(150), nullable=False)
    author = db.Column(db.String(150), nullable=False)
    year = db.Column(db.Integer, nullable=True)
    description = db.Column(db.Text, nullable=True)
    isFavorite = db.Column(db.Boolean, default=False)
    isRead = db.Column(db.Boolean, default=False)
    isFinished = db.Column(db.Boolean, default=False)

    def as_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "year": self.year,
            "description": self.description,
            "isFavorite": self.isFavorite,
            "isRead": self.isRead,
            "isFinished": self.isFinished
        }
    