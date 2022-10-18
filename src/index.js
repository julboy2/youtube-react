import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Youtube from './components/service/youtube';

const root = ReactDOM.createRoot(document.getElementById('root'));
//  클래스를 1번만 호출하기위해 index.js 에 생성해서 props 를 넘겨줌 
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
