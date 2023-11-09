import React, { useState } from 'react';
import { DateRangePicker, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme
// import './RangeCalendar.css'; // Import custom CSS (optional)

const RangeCalendar = () => {
  // Initialize the date range state
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);


  return (
    <div className="range-calendar-container">
      <DateRange
        editableDateInputs={true}
        onChange={item => setDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
    </div>
  );
};

export default RangeCalendar;
