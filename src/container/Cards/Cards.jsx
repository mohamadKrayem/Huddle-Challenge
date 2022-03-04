import React from 'react';
import Card from '../../components/CardComponent/Card';
import grow from '../../assets/illustration-grow-together.svg';
import flowing from '../../assets/illustration-flowing-conversation.svg';
import yourUsers from '../../assets/illustration-your-users.svg';
import './Cards.scss';

const Cards = () => {
  const description =[
    "Generate meningful diescussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
  ]

  return (
    <div className="card-container">
      <Card 
        src={grow} 
        alt="Grow together" 
        title="Grow together"
        description={description[0]}
      />
      <Card 
        src={flowing}
        alt="Flowing Conversations" 
        title="Flowing Conversations"
        description={description[1]}
        id="card2"
      />
      <Card 
        src={yourUsers}
        alt="Your Users" 
        title="Your Users"
        description={description[2]}
      />

      <div className="LastCard">
        <h2>Ready To Build Your Community?</h2>
        <button href="#" className="btn">Get Started For Free</button>
      </div>
    </div>
  )
}

export default Cards