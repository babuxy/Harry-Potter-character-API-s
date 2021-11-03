import React, { useState, useEffect } from 'react'
import Profile from "./components/Profile"
import  "./components/Profile.scss"
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



        <div className = "App">
     

            {charDetails && <Profile data={charDetails.map((p) => (
                
                // To assign unique key value Math.random() used 
                <p key={p.name + " "  + Math.random()} >
                    <img src={p.image} alt="pic" />
                    <div className="Name">
                    Name : {p.name} </div>
                    {/* Alternate Names :  {typeof(p.alternate_names) == 'undefined' ? "No alt names" : p.alternate_names} | */}
                    <div className = "Other-Details">
                    Alternate Names :  {p.alternate_names} | 
                    Species : {p.species} |
                    Gender : {p.gender} |
                    House :  {Object.keys(p.house).length ? p.house : " Info Not Available "} | 
                    Date of Birth : {p.dateOfBirth} | 
                    Year of Birth : {p.yearOfBirth} |
                    Wizard : {p.wizard.toString()} | {/* If array value is boolean, toString() is required else boolean values are not displayed*/}
                    Ancestry : {Object.keys(p.ancestry).length ? p.ancestry : " Info Not Available "} |
                    Eye Colour : {Object.keys(p.eyeColour).length ? p.eyeColour : " Info Not Available "} |
                    Hair Colour : {Object.keys(p.hairColour).length ? p.hairColour : " Info Not Available "} |
                    Patronus : {Object.keys(p.patronus).length ? p.patronus : " Info Not Available "} |
                    Hogwarts Student : {p.hogwartsStudent.toString()} |
                    Hogwarts Staff : {p.hogwartsStaff.toString()} |
                    Actor : {Object.keys(p.actor).length ? p.actor : " Info Not Available "} |
                    Alternate Actors : {Object.keys(p.alternate_actors).length ? p.alternate_actors : " Info Not Available "} |
                    Alive : {p.alive.toString()} |
                    Wand Wood : {Object.keys(p.wand.wood).length ? p.wand.wood : " Info Not Available "} | 
                    Wand Core : {Object.keys(p.wand.core).length ? p.wand.core : " Info Not Available "} | 
                    Wand Length : {p.wand.length} 
                  </div>
                </p>
            ))
                }  
            />
            }

        </div>
    )
}

export default App

