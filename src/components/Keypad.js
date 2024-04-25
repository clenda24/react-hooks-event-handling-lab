import React from 'react';
// Code Keypad Component Here 
function Keypad (){
    function handlechange(event){
        console.log('Entering password...')
    }
    return (
         <input type="password" onChange={handlechange}/>
    )
    function Keypad(){
        return(
            <div></div>
        )
    }
}

export default Keypad;