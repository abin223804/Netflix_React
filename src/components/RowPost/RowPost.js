import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../constants/axios'

function Rowpost(props) {
const [movies, setMovies] = useState([])

useEffect(() => {
  axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
    console.log(response.data);
    setMovies(response.data.results);
  }).catch(err => {

    console.log(err);
  })

 
}, [])





  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
       
{movies.map((obj)=>
<img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
)}
       
        
      </div>
    </div>
  )
}

export default Rowpost
