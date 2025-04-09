import React from 'react'
import './ChairmanMessage.css';
import chairman from '../assets/chairman.png' 
import signature from '../assets/signature.png' 
import rightarrow from '../assets/rightarrow.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ChairmanMessage() {

useEffect(() => {
    AOS.init({
        // duration: 1000, // animation duration (in ms)
        once: false,  // whether animation should happen only once
    });
    AOS.refresh();
    }, []);

  return (
    <section id='chairman'>
        <article id='chairman_inner'>
            <h2 className='chairmanTitle'>이사장 인사말.</h2>
            <section id='chairman_content_division'>
                <article className='charmanbox1'>
                    <p>안녕하세요, 사색의향기 이사장 오덕균 입니다</p><br />
                    <p>사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자</p>
                    <p>
                        노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
                    </p><br />
                    <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
                    <section id='signature_wrapper'>
                        <p>사단법인 사색의향기  이사장 오덕균</p>
                        <img src={signature} alt="" />
                    </section>
                    <p className='rightArrowContainer'>인터뷰 더 보기 <img src={rightarrow} alt="" /></p>
                </article>
                <article className='chairmanbox2'>
                    <img 
                        src={chairman} 
                        alt="Chairman" 
                        data-aos="fade-left" 
                    />
                </article>
            </section>
        </article>
    </section>
  )
}

export default ChairmanMessage
