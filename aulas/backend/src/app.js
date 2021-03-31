const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*rota/recurso */

/**
 * medotos http
 * 
 * GET: buscar/listar uma informação no backend
 * POST: criar uma informacao no backend
 * PUT: alter uma infromacao no backend
 * DELETE: deletar uma informacao no backend
 */
/**
 * tipos de paramentros:
 * 
 * query: paramentros noemados enviados na rota após "?",( filtros, paginação)
 * route params: paramentros utilizados para identicaar recuros 
 * request body: corpo da requisicao, utilizado para criar ou alterar recursosnpx
 */

/** 
 * banco de dados: SQL: SQLite, MySQL, Oracle, Microsof SQL server.
 * noSQL:MongoDB, couchDB.
 * /**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
 

module.exports = app;