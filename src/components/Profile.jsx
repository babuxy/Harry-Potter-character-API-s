import React from 'react'

const Profile = (props) => {
    const {data} = props;

    console.log("This is props " , props);
    console.log("After assigning to data " , data);


    return (
        <>
   
         
        {data}
      
       
  
        
        </>
    );
}

export default Profile



