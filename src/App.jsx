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
                    <img src={p.image} alt="pic" />
                    Name : {p.name} | 
                    {/* Alternate Names :  {typeof(p.alternate_names) == 'undefined' ? "No alt names" : p.alternate_names} | */}
                    Alternate Names :  {p.alternate_names} | 
                    Species : {p.species} |
                    Gender : {p.gender} |
                    House :  {p.house} | 
                    Date of Birth : {p.dateOfBirth} | 
                    Year of Birth : {p.yearOfBirth} |
                    Wizard : {p.wizard.toString()} | {/* If array value is boolean, toString() is required else boolean values are not displayed*/}
                    Ancestry : {p.ancestry} |
                    Eye Colour : {p.eyeColour} |
                    Hair Colour : {p.hairColour} |
                    Patronus : {p.patronus} |
                    Hogwarts Student : {p.hogwartsStudent.toString()} |
                    Hogwarts Staff : {p.hogwartsStaff.toString()} |
                    Actor : {p.actor} |
                    Alternate Actors : {Object.keys(p.alternate_actors).length ? p.alternate_actors : " Info Not Available "} |
                    Alive : {p.alive.toString()} |
                    Wand Wood : {Object.keys(p.wand.wood).length ? p.wand.wood : " Info Not Available "} | 
                    Wand Core : {Object.keys(p.wand.core).length ? p.wand.core : " Info Not Available "} | 
                    Wand Length : {p.wand.length} |
                  
                </p>
            ))
                }  
            />
            }

        </>
    )
}

export default App

