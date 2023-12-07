import React, { useState, useEffect } from 'react'
import "./T.css"
function Timer() {
    const [count, setcount] = useState(0);
    const [flag, setflag] = useState(false);
    const [reset, setreset] = useState(true)

    let timer;

    useEffect(() => {
        if (flag) {
            timer = setInterval(() => {
                // setcount(count + 1);
                setcount(prev => prev + 1);

            }, 1000)
        }
        else {
            clearInterval(timer);
        }
        if (flag != true && reset != true) {
            clearInterval(timer);
            setcount(0);
        }

        return (() => {
            clearInterval(timer);
        })
    }, [flag, reset])


    return (
        <div>Timer

            count:{count};
            <br></br>
            <button onClick={() => { setflag(true); setreset(true) }}>start</button>
            <br></br>
            <button onClick={() => { setflag(false) }}>stop</button>
            <br></br>
            <button onClick={() => { setflag(false); setreset(false) }}>reset</button>

            <button></button>

        </div>
    )
}

export default Timer