import React from 'react'
import './AppPromoSection.css';
import appPromoImage from '../assets/apppromo.png';
import appicon from '../assets/appicon.png';
import download from '../assets/download.png';

function AppPromoSection() {
  return (
    <section id='app_promo_section'>
      <article id='app_promo_inner'>
        <div>
            <img className='appicon' src={appicon} alt="App icon" />
            <h2 className='app_promo_title'>
                <p>더 나은 세상을</p>
                <p>만들어 가기 위한 노력.</p>
            </h2><br />
            <p>
                바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다. 
            </p>
            <p>작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다. </p><br />
            <p>
                삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요. 
            </p><br />
            <p className='app_promo_date'>
                2025. 6. 출시 예정 <span className='appColorTxt'>커뮤니티 APP ‘소소담담’</span>
            </p><br />
            <a href="#" className='appDownload'>
                <p>앱 다운로드</p>
                <img src={download} alt="download icon" />
            </a>
        </div>
        <div className='promobox2'>
            <img src={appPromoImage} alt="appPromoImage" />
        </div>
      </article>
    </section>
  )
}

export default AppPromoSection