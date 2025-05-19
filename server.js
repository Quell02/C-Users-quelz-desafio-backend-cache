const express = require('express');
const dotenv = require('dotenv');
const createError = require('http-errors');

const app = express();

// ✅ Carrega variáveis do .env
dotenv.config();

// ✅ Middleware para aceitar JSON
app.use(express.json());

// ✅ Importar rotas
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');

// ✅ Usar rotas
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

// ✅ Rota raiz
app.get('/', (req, res) => {
  res.send('API ativa');
});

// ✅ Rota não encontrada
app.use((req, res, next) => {
  next(createError(404, 'Rota não encontrada'));
});

// ✅ Tratamento de erros
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ erro: err.message });
});

// ✅ Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
