import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/reset.css';
import '../css/index_3.css'
import $ from 'jquery';
import axios from 'axios';


function MainPage() {
    const [todoList, setTodoList] = useState([]);

    const fetshData = () => {
        axios.get('https://mega-world-be.link/megaplan/sessioncheck')
            .then((response) => setTodoList(response.data));
        
        // $('.choice').removeClass('hide');
    }

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
        // x 버튼
        $('.choice>section>p, .choice>section').on('click', function () {
            $('.choice').addClass('hide');
        })
    })

    return (
        <div className="mainWrap">
            <header>
                <article>
                    <img src="/img/megaplan_1.png" alt="logo" />
                    <span>3D immersive design for Web3.0 Metaverse</span>
                    <p>the world's first virtual experience inside realistic immersive metaverse restaurant on the</p>
                    <strong>Han-river in Seoul city</strong>
                    <Link to="/list01">
                        <button className='btn' options={defaultOptions} onClick={fetshData}>
                            <span >play</span>
                        </button>
                    </Link>
                    <>
                        {console.log(todoList)}
                    </>
                </article>
                <video muted autoPlay loop className='main_video'>
                    <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/movie_1.mp4" type="video/mp4" />
                </video>
            </header>
        </div>
    );
}

export default MainPage;
