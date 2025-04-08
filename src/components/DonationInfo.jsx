import React from 'react';
import './DonationInfo.css';
import heart from '../assets/heart-icon.png';

function DonationInfo() {
  return (
    <section id='donation_info'>
        <article id='donation_inner'>
            <h3 className='donation_title'>기부를 통해 따뜻한 마음을 보내고 싶다면,</h3> <br />
            <p>후원계좌 안내</p>
            <p>국민 924501-01-351204 / 사단법인 사색의향기</p>
            <ul id='heart_wrapper'>
                <li id='heart_con'>
                    <img src={heart} alt="heart-icon" />
                    <p>정기 후원</p>
                </li>
                <li>
                    일시 후원
                </li>
            </ul>
        </article>
    </section>
  )
}

export default DonationInfo