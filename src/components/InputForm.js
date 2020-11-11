import React,{useState} from 'react';
import Table from './Table';
import {Link} from 'react-router-dom';
import './InputForm.css';
import {useSelector,useDispatch} from 'react-redux';
import {addData,updateData} from '../redux/actions';
import uuid from 'uuid';

function InputForm() {
    const dispatch = useDispatch();
    const data = useSelector(state => state)
    const [editable,setEditable]=useState(false);
    const [id,setId] = useState();
    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [dob, setDob]= useState('');
    const [city, setCity]= useState('');
    const [district, setDistrict]= useState('');
    const [provience, setProvience]= useState('3');
    const [country, setCountry]=  useState('Nepal');
    const [countries] = useState(['India','China','Australia','Nepal','France','Germany','Japan','Canada']);
  
    console.log(data);
    const handleEdit =(d)=>{
        setEditable(true)
        dispatch(updateData(...data))
        setId(d.id)
        setUsername(d.username)
        setEmail(d.email)
        setPhone(d.phone)
        setDob(d.dob)
        setCity(d.city)
        setDistrict(d.district)
        setProvience(d.provience)
        setCountry(d.country)
        }

    const handleUpdate=(d)=>{
        dispatch(updateData({id:id,username:username,email:email,phone:phone,dob:dob,city:city,district:district,provience:provience,country:country}));
        setEditable(false)
        setToInitial();
    }

    const setToInitial=()=>{
            setUsername('');
            setEmail('');
            setPhone('');
            setDob('');
            setCity('');
            setDistrict('');
            setProvience('3');
            setCountry('Nepal');
    }
    const handleSubmit=(e)=>{
        if(!username||!email||!phone||!dob||!district||!city){
            alert('Please enter all the fields')
            setToInitial();
        }
        else if(!phone.match( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
            alert("Please check your phone number");
            setToInitial();
        }
        else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            alert("Please check your email address");
           setToInitial();
        }
       else{
        dispatch(addData({id:uuid.v4(),username:username,email:email,phone:phone,dob:dob,district:district,city:city,provience:provience,country:country}));
        setToInitial();
       }
        
         
    }
   
  
   const getProvience = ()=>{
       let provience=[]
       for (let i = 0; i <7;i++){
            provience.push(<option key={i+1} value={i+1}>provience-{i+1}</option>);
       }
       return provience;
   }
    return (
        <div>
            <div className="header">
                <div className="header__title">
                    <h3>Simple User Data</h3>
                </div>
            </div>
            <div className="container">
                <div className="form">
                      
                            
                            <label htmlFor="username">Name</label><input type="text" id="username" value={username}  onChange={(e)=>{setUsername(e.target.value)}}/>
                     
                            <label htmlFor="email">Email</label><input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                
                            <div className="pInfo">
                                <div className="phone">
                            <label htmlFor="phone">Phone</label><input type="text" id="phone" value={phone}  onChange={(e)=>{setPhone(e.target.value)}} />
                            </div>
                            <div className="dob">
                            <label htmlFor="dob">Date of Birth</label><br/><input type="date" value={dob} id="dob"  onChange={(e)=>{setDob(e.target.value)}}/>
                            </div>
                            </div>
                            <br/>
                          
                            <div className='address'>
                            <div className="address">
                                
                                        <label htmlFor="city">City</label><input type="text" id="city" value={city}  onChange={(e)=>{setCity(e.target.value)}}/>
                                        <label htmlFor="district">District</label><input type="text" id="district" value={district}  onChange={(e)=>{setDistrict(e.target.value)}}/>
                                        <div className="cInfo">
                                            <div className="provience">     
                                        <label htmlFor="provience">Provience</label>
                                        <select name="provience" id ="provience"  onChange={(e)=>{setProvience(e.target.value)}} defaultValue="3">
                                        {
                                                    getProvience()
                                        }    
                                        </select>
                                        </div>
                                        <div className="country">
                                        <label htmlFor="country">Country</label>
                                            <select name="country" id ="country" defaultValue="Nepal"  onChange={(e)=>{setCountry(e.target.value)}}>
                                            {
                                                countries.map(country=>
                                                
                                                        (<option key={country} value={country}>{country}</option>)

                                                )
                                            }
                                        </select>
                                        </div>
                                        </div>
                                        </div>
                                        <button className="submit" onClick={editable?handleUpdate:handleSubmit} type="submit">{editable?'Update':'Submit'}</button>
                                                        
                            </div>
                        {/* </form> */}
                    </div>
                <div className="table">
                    <Table edit={handleEdit}/>
                     {data.length>0?<Link to="profiles"><button className="profileBtn">Profiles</button></Link>:''}

                   
                  </div>
                 </div>
           
        </div>
    )
}

export default InputForm;
