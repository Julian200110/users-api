import axios from 'axios';
import React,{useState, useEffect} from 'react';
import '../StyleSheets/User.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const UserDetails = ({ screen_name, name, followers, follows,Tweets,description,img}) => {
  return (
    <div>
      <Link to={`/`}>
      <button className='homebutton'>Inicio</button>
      </Link>
      <article className="card">
        <header className="card__header">
          <img src={img} alt="profile image" className="card__header-profile" />
        </header>
        <section className="card__body">
          <p className="card__text">
            {name}
          </p>
          <p className="card__text card__text--light">@{screen_name}</p>
          <p className="card__text card__text--light">{description}</p>
        </section>
        <footer className="card__footer">
          <div className="card__stats">
          <Link to={`/followers/@${screen_name}`}>
            <p className="card__number">{followers}</p>
          </Link>
            <p className="card__text card__text--light">Followers</p>
          </div>
          <div className="card__stats">
          <Link to={`/following/@${screen_name}`}>
            <p className="card__number">{follows}</p>
          </Link>
            <p className="card__text card__text--light">Following</p>
          </div>
          <div className="card__stats">
            <p className="card__number">{Tweets}</p>
            <p className="card__text card__text--light">Tweets</p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default UserDetails;
