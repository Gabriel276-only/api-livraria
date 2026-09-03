# API Livraria

API REST para cadastro e gerenciamento de livros, criada com Flask, SQLAlchemy e MySQL.

## Requisitos

- Python 3.10+
- MySQL

## Configuracao

1. Crie o banco de dados `livraria` no MySQL.
2. Crie e ative um ambiente virtual:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Instale as dependencias:

```powershell
pip install -r requirements.txt
```

4. Copie `.env.example` para `.env` e informe a senha do MySQL em `DATABASE_URL`.

## Executar

```powershell
python -m flask --app app run
```

A API fica disponivel em `http://127.0.0.1:5000`.

## Endpoints

| Metodo | Rota | Descricao |
| --- | --- | --- |
| POST | `/books` | Cadastra um livro |
| GET | `/books` | Lista os livros |
| GET | `/books/<book_id>` | Consulta um livro |
| PATCH | `/books/<book_id>` | Atualiza um livro |
| DELETE | `/books/<book_id>` | Remove um livro |

Exemplo de body para `POST /books`:

```json
{
  "title": "Cartomante",
  "author": "Machado de Assis",
  "year": 1899,
  "description": "Romance brasileiro",
  "isFavorite": true,
  "isRead": false,
  "isFinished": false
}
```
