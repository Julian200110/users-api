import axios from 'axios';
import React,{useState, useEffect} from 'react';
import '../StyleSheets/User.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';

const MovieDetails = ({ screen_name, setID}) => {
    const [followers,setFollowers] = useState(' ');
    const [follows,setFollows] = useState(' ');
    const [Tweets,setTweets] = useState(' ');
    const [description,setDescription] = useState(' ');
    const [name,setName] = useState(' ');
    const [img,setImg] = useState('');
    useEffect(() => {
        fetchData();
        console.log('El componente se ha montado');
      }, [screen_name]); 

    const fetchData = () =>{
        const options = {
            method: 'GET',
            url: 'https://twitter154.p.rapidapi.com/user/details',
            params: {
              username: screen_name,
            },
            headers: {
              'X-RapidAPI-Key': 'd13cc0a5cdmshd28b4c522e91393p177934jsnceccd9cfd52d',
              'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
            }
          };
        axios.request(options)
        .then(response => {
            return response
        })
        .then(responseData => {
            if (responseData && responseData.data.user_id) {
                setID(responseData.data.user_id)
                setFollowers(responseData.data.follower_count)
                setFollows(responseData.data.following_count)
                setDescription(responseData.data.description)
                setTweets(responseData.data.number_of_tweets)
                setName(responseData.data.name)
                setImg(responseData.data.profile_pic_url)
                console.log(responseData.results.data.user_id)
            } else {
                setID(''); 
            }
        }).catch(error => {
            console.error(error);
        }); 
    }
  return (
    <div>
        <UserDetails screen_name = {screen_name} name={name} followers = {followers} follows={follows} Tweets = {Tweets} description={description} img={img}/>
    </div>
  );
};

export default MovieDetails;
