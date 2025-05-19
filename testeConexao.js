const db = require('./configs/db');

async function testarConexao() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS resultado');
    console.log('✅ Conectado ao MySQL com sucesso!');
    console.log('Resultado da soma:', rows[0].resultado);
  } catch (error) {
    console.error('❌ Erro ao conectar ao MySQL:', error.message);
  } finally {
    process.exit();
  }
}

testarConexao();
