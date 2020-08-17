import React, {useRef, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Countrydetails from './Countrydetails'
import {Input, Button} from '@material-ui/core'

function Home() {  

const [event, setEvent] = useState()
const searchbox = useRef('')  
const [apires, setApires] = useState('.')
const [results, setResults] = useState('')
const [valueinput, setValueinput] = useState()
const [sresults, setSresults] = useState([]);
const [items, setItems] = useState(['']);
const emptyarray = []   
const apifunction = async () => {

 const api = await fetch(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_KEY}=${apires}`);
 const res = await api.json()
 setSresults(res)

 //console.log("api sresults", sresults)
 
}

useEffect(() => {
   
    
    apifunction()
    
    if(results !== ""){
        setApires(results)  
        
        setEvent(false)
    }else{
        setApires(valueinput)
        setEvent(false)
      } 
        
     

},[results])


useEffect(() =>{
    apifunction() 
   setResults(valueinput)
    
  setEvent(false)
  

},[valueinput])


const handlesubmit = (e) => {
    e.preventDefault() 
    apifunction()
    if(results === '' || sresults.length !== 10) return
    setApires(valueinput)
    //console.log(sresults)
    setEvent(true)  
    
     //console.log('submit!', event)
   
}
   
    return (
    <div className="HomeContainer App">
   <form className="search" onSubmit={handlesubmit} >
   
  <Input className="searchinput"  ref={searchbox} onChange={e => setResults(e.target.value)} value={results}  style={{color:"white"}} placeholder="Search...."  /><Button style={{textTransform:"none"}} onClick={handlesubmit}  variant="contained" color="primary">Search!</Button>
  {event  ? <h2></h2> :sresults.map(item => <li key={Date.now()} className="listoption"  style={{cursor:"pointer", listStyle:"none"}}  onClick={() => {setValueinput(item.name)}}  key={item.id}>{item.name}</li>)}
</form>
    <Countrydetails  event={event}  details = {results}/>
    
    
    
    </div>
  
    )
}

export default Home
