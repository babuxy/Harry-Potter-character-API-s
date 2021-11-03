import React, { useState, useEffect } from 'react'
import Profile from "./components/Profile"
// import from "../components/App.css"

const App = () => {

    const [charDetails, setCharDetails] = useState(null);

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
            .then(res => res.json())
            // .then ((json) => {console.log("Testing json" , JSON.stringify(json));}) //To display contents of fetch API
            .then(data => setCharDetails(data))
            .catch(err => console.log(err))
    })

    return (



        <>
            {/* JSON.stringify(json)); */}



            {charDetails && <Profile data={charDetails.map(p => (
                //To assign unique key value Math.random() used 
                <p key={p.name + " "  + Math.random()} >
                    <p><img src={p.image} alt="pic" /></p>
                    Name : {Object.keys(p.name).length ? p.name : " Info Not Available "} | 
                    Alternate Names :  {Object.keys(p.alternate_names).length ? p.alternate_names : " Info Not Available "} |
                    Species : {p.species} |
                    Gender : {p.gender} |
                    House :  {p.house} | 
                    Date of Birth : {p.dateOfBirth} | 
                    Year of Birth : {p.yearOfBirth} |
                    Wizard : {Object.keys(p.wizard).length ? p.wizard : " Info Not Available "}|
                    Ancestry : {p.ancestry}|
                    Eye Colour : {p.eyeColour} |
                    Hair Colour : {p.hairColour} |
                    Patronus : {p.patronus} |
                    Hogwarts Student : {Object.keys(p.hogwartsStudent).length ? p.hogwartsStudent : " Info Not Available "} |
                    Hogwarts Staff : {Object.keys(p.hogwartsStaff).length ? p.hogwartsStaff : " Info Not Available "} |
                    Actor : {p.actor} |
                    Alternate Actors : {Object.keys(p.alternate_actors).length ? p.alternate_actors : " Info Not Available "} |
                    Alive : {Object.keys(p.alive).length ? p.alive : " Info Not Available "} |
                    Wand Wood : {p.wand.wood} |
                    Wand Core : {p.wand.core} | 
                    {/* {/* Wand Length : {p.wand.length}  */}
                    Wand Core : {Object.keys(p.wand.core.length).length ? p.wand.core.length : " Info Not Available "}
                </p>
            ))
                } 
            />
            }

        </>
    )
}

export default App

