import React from 'react'
 import  "./Profile.scss"

const Profile = (props) => {
    const {data} = props;

    console.log("This is props " , props);
    console.log("After assignings to data " , data);

    // const charactersData =  data.split("|");
    return (
        <>
        {/* <div className = "grid-container"> 
                {data.map(({name, house, index}) => (
          <div className = "Names" key= {Math.random()}> {name}</div>
         
        ))}
        </div> */}

          <div className = "grid-container">

          {/* {data.length} */}
        {data}
        {/* {dataSplit} */}

        


      
        </div>
  
        
        </>
    );
}

export default Profile



