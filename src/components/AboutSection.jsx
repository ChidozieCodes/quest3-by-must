import React from 'react';
import './AboutSection.css';
import aboutimg from '../assets/aboutImg.png';

function AboutSection() {
  return (
    <section id='about'>
        <article id='about_inner'>
            <h1 className='about_title'>새로운 문화 나눔을 만들어갑니다.</h1>
            <div id='about_text_img'>
                <p className='aboutTxt'>우리는</p>
                <img className='aboutimg' src={aboutimg} alt="" />
            </div>
            <p className='abouttxt2'>사색의향기입니다</p><br />
            <p>
                사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회 공헌과 선진적이고
            </p>
            <p>
                건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다
            </p>
        </article>
    </section>
  )
}

export default AboutSection
