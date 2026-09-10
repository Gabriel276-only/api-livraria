# API Livraria

API REST para cadastro, consulta, atualização e remoção de livros, desenvolvida com Flask e SQLAlchemy. A aplicação foi pensada para integrar com um frontend em React, permitindo uma experiência de catálogo digital para uma livraria.

## Visão geral

Este projeto consiste em uma solução simples e funcional para gerenciamento de livros, com foco em:

- cadastro de livros;
- listagem de todos os títulos;
- consulta por identificador;
- atualização de informações;
- remoção de registros;
- integração com frontend em ambiente local.

## Tecnologias utilizadas

- Python 3.10+
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- MySQL
- Python-dotenv
- React + Vite (frontend)

## Estrutura do projeto

```text
api_livraria/
├── backend/
│   ├── app.py
│   ├── db.py
│   ├── requirements.txt
│   ├── .env
│   ├── migrations/
│   └── models/
│       └── book.py
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md (opcional, no nível raiz)
```

## Requisitos do sistema

Antes de iniciar, certifique-se de ter instalado:

- Python 3.10 ou superior
- pip
- MySQL
- Node.js 18+ e npm
- Git

## Configuração do backend

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd api_livraria
```

2. Acesse a pasta do backend:

```bash
cd backend
```

3. Crie um ambiente virtual:

```bash
python -m venv .venv
```

No Windows:

```powershell
.\.venv\Scripts\Activate.ps1
```

No Linux/macOS:

```bash
source .venv/bin/activate
```

4. Instale as dependências:

```bash
pip install -r requirements.txt
```

5. Configure as variáveis de ambiente.

Crie um arquivo `.env` dentro da pasta `backend` com o seguinte conteúdo:

```env
DATABASE_URL=mysql+pymysql://usuario:senha@localhost:3306/livraria
```

Substitua:

- `usuario` pelo usuário do MySQL;
- `senha` pela senha correspondente;
- `livraria` pelo nome do banco de dados criado.

6. Crie o banco de dados no MySQL:

```sql
CREATE DATABASE livraria;
```

## Executando o backend

Dentro da pasta `backend`, execute:

```bash
python app.py
```

A API ficará disponível em:

```text
http://localhost:5000
```

## Configuração do frontend

Abra uma nova janela do terminal e acesse a pasta do frontend:

```bash
cd frontend
npm install
npm run dev
```

O frontend normalmente será servido em:

```text
http://localhost:5173
```

## Endpoints da API

### 1. Cadastrar livro

```http
POST /books
```

Body exemplo:

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

### 2. Listar livros

```http
GET /books
```

### 3. Consultar livro por ID

```http
GET /books/<book_id>
```

### 4. Atualizar livro

```http
PATCH /books/<book_id>
```

### 5. Excluir livro

```http
DELETE /books/<book_id>
```

## Observações importantes

- O backend foi configurado para aceitar requisições vindas do frontend em `http://localhost:5173`.
- O projeto utiliza `Flask-Migrate` para gerenciamento de migrações do banco.
- Os modelos de dados ficam na pasta `backend/models`.

## Possíveis melhorias futuras

- autenticação de usuários;
- busca por título e autor;
- paginação na listagem;
- ordenação por categoria ou favoritos;
- deploy em ambiente de produção;
- documentação Swagger/OpenAPI.

## Licença

Este projeto está sob a licença MIT, salvo indicação em contrário.

## Contato

Se quiser, pode adicionar aqui:


