import React,{useEffect, useState} from 'react'
import TimePicker from 'react-time-picker';

function InputsField() {

  

 
      const [time, setTime] = useState('10:00'); 
    
      const handleTimeChange = (newTime) => {
        setTime(newTime);
      };
//       const getdata=async()=>{
//         try{
//         const data=await fetch("https://gist.github.com/anubhavshrimal/75f6183458db8c453306f93521e93d37.js")
// console.log("jbkjjk",data.json())


//         }catch
//           (err){console.log(err)}
//       }   
      


      

      useEffect(()=>{
        // getdata()
      })
    
      return (
        <div>
          <h2>Select a Time:</h2>
          <TimePicker
            onChange={handleTimeChange}
            value={time}
          />
          <p>Selected Time: {time}</p>
        </div>
      );
    }
    
  
    
    
    
    
export default InputsField