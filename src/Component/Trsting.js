import React, { useState } from 'react'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePicker from 'react-time-picker';
function Trsting() {
    const [value, onChange] = useState();
    console.log(value)
    function convertTo12HourFormat(time24) {
        const [hours, minutes] = time24.split(':');

        // Convert to 12-hour format
        let hours12 = parseInt(hours, 10) % 12;
        hours12 = hours12 === 0 ? 12 : hours12;

        // Determine AM or PM
        const amPm = parseInt(hours, 10) < 12 ? 'AM' : 'PM';

        // Format with leading zeros
        const formattedHours = String(hours12).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes} ${amPm}`;
    }




    return (
        <div>Trsting
            <label style={{ width: "60px" }}>
                {/* <TimePicker onChange={(e) => { convertTo12HourFormat(e) }} value={value}
                    disableClock={true}
                    clearIcon={false}

                /> */}
            </label>

        </div>
    )
}

export default Trsting