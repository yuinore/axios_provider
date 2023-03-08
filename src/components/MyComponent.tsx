import React, { useState, useEffect } from 'react';
import axios from 'axios';

let dataFetchCompleted = false;

function MyComponent(): JSX.Element {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // ここで axios の共通設定を初期化する
    // useCookies などを使用してヘッダーなどの設定が可能
    // この設定を1箇所に集約したい
    axios.defaults.baseURL = 'https://api.waifu.pics/';
    axios.defaults.headers.common.Authorization = `Barer <cookies.token>`;

    console.log('Start calling API...');
    axios
      .get('/sfw/waifu')
      .then((res) => {
        // 本当に一度だけ実行する
        if (!dataFetchCompleted) {
          console.log(res.data);
          setUrl(res.data.url);
          dataFetchCompleted = true;
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>
      <h1>Random Waifu Image</h1>
      <h2>{url}</h2>
      <img src={url} />
    </>
  );
}

export default MyComponent;
