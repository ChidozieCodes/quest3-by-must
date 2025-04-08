import React from 'react';
import activities from '../data/activities.json';
import './ActivitySection.css';

const ActivitySection = () => {
  return (
    <section className="activities-section">
      <h1>함께하는 일 <span className='activityColorTxt'> · 우리의 흔적</span></h1><br />
        <article id='activity_inner'>
              {activities.map((activity, index) => (
              <div
                className={`activity ${index % 2 === 0 ? 'row' : 'row-reverse'}`}
                key={index}
              >
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className="activity-text">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
        </article>
    </section>
  );
};

export default ActivitySection;
