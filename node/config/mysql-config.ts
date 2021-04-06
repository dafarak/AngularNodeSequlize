import * as mysql from 'mysql';
import { ENV } from './config.json';
import * as util from 'util';

export var pool = mysql.createConnection({
  host: 'localhost',
  user: 'satish',
  password: 'Satish12',
  database: 'practical'
});

pool.connect();

exports.pool = pool;