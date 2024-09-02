import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // ステートフックを使ってデータとローディング状態を管理
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API からデータを取得する関数
    const fetchData = async () => {
      try {
        // API からデータを取得
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/test`);
        // データをステートに設定
        setData(response.data);
        setLoading(false);
      } catch (err) {
        // エラー処理
        setError(err.message);
        setLoading(false);
      }
    };

    // コンポーネントのマウント時にデータを取得
    fetchData();
  }, []); // 空の依存配列はコンポーネントのマウント時に一度だけ実行することを意味します

  // ローディング中
  if (loading) return <p>Loading...</p>;

  // エラーが発生した場合
  if (error) return <p>Error: {error}</p>;

  // データを表示
  return (
    <div>
      <h1>{data.message}</h1>
      <p>{data.timestamp}</p>
    </div>
  );
}

export default App;
