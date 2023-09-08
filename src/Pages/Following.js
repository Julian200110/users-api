import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../StyleSheets/HomePage.css';

function Following({setScreenName, ID}){
const [container,setContainer] = useState([]);

useEffect(()=>{
  fetchData()
},[])

const saveScreenName = (name) => {
    setScreenName(name);
};

const fetchData = () =>{
    const options = {
        method: 'GET',
        url: 'https://twitter154.p.rapidapi.com/user/following',
        params: {
          user_id: ID,
        },
        headers: {
          'X-RapidAPI-Key': 'd13cc0a5cdmshd28b4c522e91393p177934jsnceccd9cfd52d',
          'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
      };
    axios.request(options)
    .then(response => {
        console.log(response.data.results)
        return response
    })
    .then(responseData => {
        if (responseData && responseData.data.results) {
        setContainer(responseData.data.results);
        } else {
        setContainer([]); // Si 'd' no está definido en la respuesta, inicializa container como un array vacío
        }
    })
    .catch(error => {
        // Maneja cualquier error que ocurra durante la solicitud
        console.error(error);
    });  

}

return (
  <div className="Home">
    <div className='search'>
      <Link to={`/`}> 
        <button type="submit" className='searchbutton'>Inicio</button>
      </Link>
    </div>
    <div className='element'>
      {container.map((item, index) => {
        return (
          <div key={index} className='element-div'>
            <Link to={`/movie/@${item.username}`}>
              <img src={item.profile_pic_url} alt={item.username} 
              onClick={() => saveScreenName(item.username)}
              />
            </Link>
            <p>@{item.username}</p>
            <p>{item.name}</p>
            <p>{item.user_id}</p>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default Following;