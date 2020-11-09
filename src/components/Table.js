import React from 'react';
import {useSelector} from 'react-redux';
const Table = () =>{
    const data = useSelector(state => state)
    
    return (
    
        <div>
            {data.length===0?'Nothing To Show':
        <table border="1">
           <thead>
           <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Date of birth</th>
               <th>City</th>
               <th>District</th>
               <th>provience</th>
               <th>country</th>
               
           </tr>
           </thead>
           <tbody>
                {data.map((d)=>
                <tr key={d.email}>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.dob}</td>
                <td>{d.city}</td>
                <td>{d.district}</td>
                <td>{d.provience}</td>
                <td>{d.country}</td>
                 </tr>)
                 }
          </tbody>
           </table>
            }
        </div>
    )
}

export default Table
