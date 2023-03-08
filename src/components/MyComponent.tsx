import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios'; // この行は不要
import AxiosContext from './AxiosContext';

let dataFetchCompleted = false;

function MyComponent(): JSX.Element {
  const axios = useContext(AxiosContext);
  const [url, setUrl] = useState('');

  useEffect(() => {
    // ここで axios の共通設定を初期化していたが、
    // この設定を1箇所に集約したい
    // axios.defaults.baseURL = 'https://api.waifu.pics/';
    // axios.defaults.headers.common.Authorization = `Barer <cookies.token>`;

    console.log('Start calling API...');
    axios
      .get('/sfw/waifu')
      .then((res) => {
        // 本当に一度だけ実行する
        if (!dataFetchCompleted) {
          console.log('Data received.');
          console.log(res.data);
          setUrl(res.data.url);
          dataFetchCompleted = true;
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [axios]); // ← 変数 axios の値が AxiosMock から本来の axios に変更されたら上記の処理を実行する

  return (
    <>
      <h1>Random Waifu Image</h1>
      <p>Github: <a href="https://github.com/yuinore/axios_provider">https://github.com/yuinore/axios_provider</a></p>
      <p>{url}</p>
      <img src={url} alt="random waifu" style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </>
  );
}

export default MyComponent;
