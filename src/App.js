/* eslint-disable*/
import { Tilt } from 'react-tilt';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/css/reset.css';
import '../src/css/index.css';
import $ from 'jquery';
import '../src/js/index.js';
import App_2 from './App_2.js';
import Character from './Character';
import axios from 'axios';

function testClick() {
  // 버튼 클릭하면 캐릭터 보임
  $('.choice').removeClass('hide');
  $('.choice>section>p').on('click', function () {
    $('.choice').addClass('hide');
  })
}

function App() {
  // api
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get('https://developer-front.d20im9zyqcbfm4.amplifyapp.com/');
  //     return res.data;
  //   }
  //   fetchData().then(res => setData(res));
  // }, []);


  const [todoList, setTodoList] = useState([]);

  const fetshData = () => {
    axios.get('https://deverlper-front.d20im9zyqcbfm4.amplifyapp.com/')
      .then((response) => setTodoList(response.data));
  }
  useEffect(() => {
    fetshData();
  }, []);

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  useEffect(() => function click() {

    // 버튼 클릭하면 캐릭터 보임
    // $('.btn').on('click', function () {
    //   console.log("버튼 클릭 테스트");
    //   $('.choice').removeClass('hide');
    // })

    // x
    $('.choice>section>p, .choice>section').on('click', function () {
      $('.choice').addClass('hide');
    })
  })

  return (

    <div className="mainWrap">
      <>
        <header>
          <article>
            <img src="/img/megaplan_1.png" alt="logo" />
            <span>3D immersive design for Web3.0 Metaverse</span>
            <p>the world's first virtual experience inside realistic immersive metaverse restaurant on the</p>
            <strong>Han-river in Seoul city</strong>
            {/*           
          <Tilt className='btn' options={defaultOptions} onclick={testClick}>
            <span >play</span>
          </Tilt> */}
            <button className='btn' options={defaultOptions} onClick={testClick}>
              <span >play</span>
            </button>


          </article>
          <video muted autoPlay loop className='main_video'>
            <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/movie_1.mp4" type="video/mp4" />
          </video>
        </header>
      </>

      {todoList && todoList.map((todo) => (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Character />} />
            <Route path="/list01" element={<App_2 />} />
          </Routes>
        </BrowserRouter>
      ))}
    </div>

  );
}

export default App;
