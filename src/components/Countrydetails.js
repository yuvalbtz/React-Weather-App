import React, {useEffect, useState} from 'react'
import '../App.css'
function Countrydetails(props) {
     
     const [details ,setDetails] = useState([""])
     

    const api = async () => {
         const apifetch = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}=${props.details}&days=10`)
         const res = await apifetch.json()
         setDetails(res)
        }
    useEffect(() => {
         api()
          },[props.details])
    
    return (
        <div>
           {!props.event  ? <h2 className="texthome">Plan Your Vacation Now!</h2> : <div><div className="detailscontainer"> <div ><h2>Location: {details.location.country}</h2>
            <h2>Name: {details.location.name}</h2>
            <h2>Region: {details.location.region}</h2>
            <h2>Country: {details.location.country}</h2>
            <h2>lat: {details.location.lat}</h2>
            <h2>lon: {details.location.lon}</h2>
            <h2>Local Time: {details.location.localtime}</h2>
            </div>
            <div >
            <h2 className="now">The weather now:</h2>
                
                <h2 className="text" >{details.current.condition.text}</h2>
                <img width={80} height={80} src={details.current.condition.icon}/>
                <h2 className="tempc" style={{fontFamily:"weatherfont"}}>{details.current.temp_c+'°c/'+details.current.temp_f+'°f'}</h2>
                <h2 style={{fontSize:20}}>Last-Updated: {details.current.last_updated}</h2>
          </div>
          </div>
           <div className="detailscontainer">
             {details.forecast.forecastday.map(item =><div key={item.date}>
                <h2>{item.date}</h2>
                <h2>{item.day.condition.text}</h2>
                <img src={item.day.condition.icon}/>
             </div>)}
           </div>
           
           </div>}
           
               
            
            
        </div>
    )
}

export default Countrydetails
