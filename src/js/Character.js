import { Link } from "react-router-dom";
import $ from 'jquery';
<<<<<<< HEAD
<<<<<<< HEAD:src/Character.js
import App_2 from './App_2.js';
=======
>>>>>>> 349e7f3aa2397e2a8e7ddb45c141d1e8a821f932:src/js/Character.js
=======
>>>>>>> f50cc45799cae35d3893e4a38a23d1987b5e19a8

function click_x() {
    $('.choice').addClass('hide');
}

function Character() {

    return (

        <div className="choice hide">
            <h1>캐릭터를 선택하세요</h1>
            <article>
                <ul>
                    <li>
                        <Link to="/list01">
                            <video muted loop className='video'>
                                <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/human_1.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </li>
                    <li>
                        <Link to="/list01">
                            <video muted loop className='video_1'>
                                <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/human_2.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </li>
                    <li>
                        <Link to="/list01">
                            <video muted loop className='video_2'>
                                <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/human_3.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </li>
                    <li>
                        <Link to="/list01">
                            <video muted loop className='video_3'>
                                <source src="https://megaplantheriverbucket.s3.ap-northeast-2.amazonaws.com/human_4.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </li>
                </ul>
            </article>
            <section onClick={click_x}>
                <p></p>
                <p></p>
            </section>
        </div >

    );
}
export default Character;