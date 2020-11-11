import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import './Table.css';
import {useDispatch} from 'react-redux';
import {deleteData} from '../redux/actions';
const Table = ({edit}) =>{
    const [asc,setAsc] = useState(true);
    const dispatch = useDispatch();
    let data = useSelector(state => state)
     if(asc){
            data=data.sort((a, b) => (a.username > b.username) ? 1 : -1)
        }
        else{
            data=data.sort((a, b) => (a.username > b.username) ? -1 : 1)
        }
    
    const handleSort=()=>{
        setAsc(!asc)
       
    }
    
   
    return (
    
        <div>
            {data.length===0?'Nothing To Show':
        <table border="1">
           <thead>
           <tr>
               <th onClick={handleSort} style={{cursor:'pointer'}}>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Date of birth</th>
               <th>City</th>
               <th>District</th>
               <th>provience</th>
               <th>country</th>
               <th colSpan="2">Actions</th>
               
           </tr>
           </thead>
           <tbody>
                {data.map((d)=>
                <tr key={d.id}>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.dob}</td>
                <td>{d.city}</td>
                <td>{d.district}</td>
                <td>{d.provience}</td>
                <td>{d.country}</td>
                <td><button className="table__button" onClick={()=>edit(d)}>Edit</button></td>
                <td><button className="table__button" onClick={()=>dispatch(deleteData(d.id))}>Delete</button></td>
                 </tr>
                 )
                 }
          </tbody>
           </table>
            }
        </div>
    )
}

export default Table
