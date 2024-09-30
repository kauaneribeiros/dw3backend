const Pool = require('pg').Pool
//@ Eu posso substituir as configurações abaixo por valores do arquivo .env
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'dw3',
  password: 'postdba',
  port: 5432,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
  };