import React from 'react'

function Validate(inputs) {
  const errors = {};
  if (!inputs.username) {
      errors.email = 'Check username';
  } 
  
  //Password Errors
//   if(!inputs.password  || inputs.password.length<6){
//       errors.password = 'Check Password'
//   }
  return errors;
}

export default Validate
