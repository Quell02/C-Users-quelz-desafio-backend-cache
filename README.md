# Desafio Back-End II – API com Cache

Este projeto é uma API RESTful desenvolvida como desafio da disciplina **Desenvolvimento Back-End II**, utilizando Node.js, Express e MySQL, com sistema de caching usando Node-Cache.

## 🚀 Tecnologias

- Node.js
- Express
- MySQL (via mysql2)
- Dotenv
- Node-Cache
- Chalk (para logs coloridos)
- http-errors

## 📁 Endpoints

### 🔸 Clientes
- `GET /clientes` – lista todos os clientes (**com cache de 30s**)
- `POST /clientes` – adiciona um novo cliente
- `PUT /clientes/:id` – atualiza um cliente
- `DELETE /clientes/:id` – remove um cliente

### 🔸 Produtos
- `GET /produtos` – lista todos os produtos
- `POST /produtos` – adiciona um novo produto
- `PUT /produtos/:id` – atualiza um produto (atualiza também a data)
- `DELETE /produtos/:id` – remove um produto

## 🔄 Caching

- Cache implementado no `GET /clientes` com duração de **30 segundos**
- O cache é **invalidado automaticamente** quando ocorre `POST`, `PUT` ou `DELETE`

## ⚙️ Como rodar o projeto

1. Instale as dependências:

```bash
npm install
