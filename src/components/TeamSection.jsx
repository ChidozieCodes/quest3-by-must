import React from 'react';
import './TeamSection.css';
import team1 from '../assets/team1.png' 
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'

function TeamSection() {
  return (
    <section id='team'>
        <article id='team_inner'>
            <img src={team1} alt="team one" />
            <img src={team2} alt="team two" />
            <img src={team3} alt="team three" />
        </article>
    </section>
  )
}

export default TeamSection