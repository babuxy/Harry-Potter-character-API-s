import React from 'react'

const Profile = (props) => {
    const {data} = props;

    console.log("This is props " , props);
    console.log("After assigning to data " , data);


    return (
        <>
   
         
        {data}
      
       
        {/* //Below for testing only
        <div className="Name" > {data && data.map(data => (
        <p key={data.unique}>  {data}
        {/* {data.species} | {data.gender} | {data.house}  */}
        {/* <p>{data}</p>  */}
        
        {/* </p>
      ))}
        </div> */}

        {/* //End testing */}
        
        </>
    );
}

export default Profile



