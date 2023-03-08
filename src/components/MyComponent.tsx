import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent(): JSX.Element {
  const [url, setUrl] = useState('');

  // 1度だけ実行する（実際には2度実行される）
  useEffect(() => {
    axios
      .get('https://api.waifu.pics/sfw/waifu')
      .then((res) => {
        console.log(res.data);
        setUrl(res.data.url);
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
