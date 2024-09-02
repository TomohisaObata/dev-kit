import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// 環境変数の読み込み
dotenv.config();

const app = express();
const port = process.env.BE_PORT;

// CORS設定
app.use(cors({
    origin: process.env.REACT_APP_WEB_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// データベース接続
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'
  });
  
  pool.getConnection()
    .then(connection => {
      console.log('データベースに正常に接続しました');
      connection.release();
    })
    .catch(err => {
      console.error('データベース接続エラー:', err.message);
    });
  
// ルートディレクトリへのGETリクエストを処理する
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// "/api"へのGETリクエストを処理する
app.get('/test', (req, res) => {
  const data = {
    message: 'Welcome to the API!',
    timestamp: new Date()
  };
  res.json(data);
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on Port:${port}`);
});
