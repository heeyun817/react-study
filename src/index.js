import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //./App뒤에는 .js확장자가 생략된거임
import reportWebVitals from './reportWebVitals';
// index.js는 전역적인 설정들이 들어간다고 생각
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( //<App />태그가 id값이 root인 태그로 render되라 -> public/index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 배포를 위해 npm run build하면 build폴더가 생김 -> serve -s build(build한 결과를 서비스할 때 serve라는 앱을 사용하는걸 추천) : 사용자가 어떤 경로로 들어와도 index.html을 서비스하는거를 build폴더를 지정했기에 build안에 있는 index.html파일을 서비스해줌

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
