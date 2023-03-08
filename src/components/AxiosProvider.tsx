import React, { useState, useEffect } from 'react';
import axiosInstance from 'axios';
import type { AxiosStatic } from 'axios';
import AxiosMock from './AxiosMock';
import AxiosContext from './AxiosContext';

let axios: AxiosStatic | AxiosMock = new AxiosMock();

function AxiosProvider(props: { children: JSX.Element }): JSX.Element {
  const [isAxiosInitialized, setIsAxiosInitialized] = useState(false);

  useEffect(() => {
    // useContext が正常に動作しているかどうか確認するために
    // 試しに1000ミリ秒待機する意地悪ををしてみる
    // （実際にはこのsetTimeoutは不要）
    setTimeout(() => {
      if (isAxiosInitialized) {
        return;
      }

      console.log('Axios initialization started...');
      axios = axiosInstance;

      // ここで axios.defaults の初期化を行う
      // useCookies などを使用してヘッダーなどの設定が可能
      axios.defaults.baseURL = 'https://api.waifu.pics/';
      axios.defaults.headers.common.Authorization = `Barer <cookies.token>`;
      axios.defaults.timeout = 10000;

      // ここで useState フックを呼び出すことで、
      // let axios の値に変更があったことを React に伝え、
      // AxiosProvider を再レンダリングし、それによって、
      // AxiosContext の変更を子コンポーネントに伝える
      setIsAxiosInitialized(true);
    }, 1000);
  }, [isAxiosInitialized]);

  return (
    <AxiosContext.Provider value={axios}>
      {props.children}
    </AxiosContext.Provider>
  );
}

export default AxiosProvider;
