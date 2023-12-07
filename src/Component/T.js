import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { FetchNews } from '../Redux/Action';

function sortTimeArray(timeArray) {
    const convertToComparableFormat = (time) => {
        const [hh, mm, period] = time.match(/\d+|\D+/g);
        const totalMinutes = parseInt(hh, 10) * 60 + parseInt(mm, 10) + (period === 'PM' ? 720 : 0);
        return { totalMinutes, time };
    };

    const sortedArray = timeArray
        .map((time) => convertToComparableFormat(time))
        .sort((time1, time2) => time1.totalMinutes - time2.totalMinutes)
        .map((formattedTime) => formattedTime.time);

    return sortedArray;
}

const T = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    console.log("lkbfj", data,)

    useEffect(() => {
        // Dispatch the FetchNews action when the component mounts
        dispatch(FetchNews());
    }, [dispatch]);

    // Example usage
    const timeArray = ["3:01 PM", "2:02 PM", "2:10 AM", "5:10 AM"];
    const sortedTimeArray = sortTimeArray(timeArray);

    return (
        <div>
            <h2>Sorted Time Array:</h2>
            <ul className='parentlist'>
                <div className='list'>
                    <div className='left'>
                        <h3>React Developer</h3>
                        <h4>KeySkill:<span>java ,</span>
                            <span>react,</span></h4>
                        <p>Location:<span>kolkata ,</span>
                            <span>kanada,</span></p>
                    </div>
                    <div className='right'>
                        <button>View And Upload CV</button>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default T;
