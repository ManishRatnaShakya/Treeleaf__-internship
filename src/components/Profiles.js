import React from 'react'
import {Link} from 'react-router-dom';
import './Profiles.css';
const Profiles = (props) =>{
    let data = props.location.data;
    console.log("from profiles",props.location.data);
    return(
       <div className="profiles">
           <h2>List of Profiles</h2>
            <div className="profiles__container">
            { data.map((profile,index)=>{
            return(
            
               <div key={profile.phone}>
                   
                <Link  className="link" to={{
                    pathname:`profiles/${profile.phone}`,
                    data:profile
                }}>
                    <div className="detail"><div className="index">{index+1}</div><div className="index__data"><h2> {profile.username}</h2></div>
                    <div className="index__email">{profile.email}</div></div>
                </Link>
              </div>
           )
       })}
       </div>
       </div>
    )
}

export default Profiles;