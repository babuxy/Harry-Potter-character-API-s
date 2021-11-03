import React, {useState, useEffect}  from 'react'
import Profile from "./components/Profile"

const App = () => {

    const [charDetails, setCharDetails] = useState(null);

    useEffect(() =>{
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then (res => res.json())
        // .then ((json) => {console.log("Testing json" , JSON.stringify(json));}) //To display contents of fetch API
        .then (data => setCharDetails(data))
        .catch(err => console.log(err))
    })

    return (
        <>
            {/* JSON.stringify(json)); */}
     
            {/* {charDetails && <Profile data={charDetails} />} */}

          {charDetails && <Profile data = {charDetails.map(p => (
   <p key={p.name} >
   {p.name} | {p.species} | {p.gender} | {p.house} | {p.dateOfBirth} | {p.actor} 
</p>
          ))}/>}
            
        </>
    )
}

export default App