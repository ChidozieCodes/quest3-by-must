import React from 'react';
import './Footer.css';
import logo1 from '../assets/logoF1.png';
import logo2 from '../assets/logoF2.png';
import arrow from '../assets/arrow-right.png';

function Footer() {
  return (
    <section id='footer'>
        <article id='footer_inner'>
            <div id='footerBox1'>
                <img src={logo1} alt="Logo" />
                <img src={logo2} alt="Logo" /> <br />
                <p>
                    개인정보 처리방침 이용약관 <span className='footTxtColor'>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span> 
                </p><br />
                <p>사단법인 사색의향기 <span className='footTxtColor'>이사장</span>오덕균 <span className='footTxtColor'>고유번호</span> 355-82-00129</p><br />
                <p>
                    <span className='footTxtColor'>주소</span> 서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동) <span className='footTxtColor'>전화</span> 02-539-5101 <span className='footTxtColor'>팩스</span> 070-8668-5091 <span className='footTxtColor'>이메일</span> culppy@culppy.com
                </p><br />
                <p>Copyright ⓒ 2025 사색의향기. All Rights Reserved</p>
            </div>
            <div id='footerBox2'>
                <h3>뉴스레터 구독하기</h3><br />
                <p>
                    이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
                </p>
                <p>빠르게 받아보실 수 있습니다.</p><br />
                <a href="" className='lastbox'>
                    이메일 구독신청
                    <img src={arrow} alt="arrow right" />
                </a>
            </div>
        </article>
    </section>
  )
}

export default Footer