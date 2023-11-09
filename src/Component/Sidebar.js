import React ,{useState}from 'react'

function Sidebar() {

    const[poptogle,setpoptogle]=useState(false);
  return (
    <div>Sidebar

<div onClick={(e)=>
        {e.stopPropagation();
            
             setpoptogle(false)
        }}


          style={{backgroundColor:"red",position:'fixed',
         overflow:"auto",
          height: '100%',}}>


    <li onClick={(e)=>
        {e.stopPropagation()
            setpoptogle(true)}}
         style={{cursor:'pointer'}}>1st element
        
        <div  style={{  display:poptogle?"block":"none",position:'absolute',backgroundColor:"yellow",padding:"1rem",textAlign:"center"}}><p>
            hellow 
            <button onClick={()=>{alert("hii")}}>Click</button>
            </p></div>
    </li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>
    <li>1st element</li>
    <li>2nd element</li>

</div>


    </div>
  )
}

export default Sidebar