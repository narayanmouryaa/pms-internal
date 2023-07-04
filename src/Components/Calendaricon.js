// import React, { useState, useRef } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import './CalendarIcon.css';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { Typography } from '@mui/material';

// const CalendarIcon = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const datepickerRef = useRef(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleIconClick = () => {
//     datepickerRef.current.setFocus();
//   };

//   return (
//     <div className="calendar-container">
//       {!selectedDate && (

//         <div className="calendar-icon" onClick={handleIconClick}>
//           <div className="calendar-popup">
//             <DatePicker            
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/YY"
//               placeholderText="Select a Start date"              
//               ref={datepickerRef}
//               popperPlacement="bottom-end"
//               popperModifiers={{
//                 offset: {
//                   enabled: true,
//                   offset: '0px, 10px'
//                 },
//                 preventOverflow: {
//                   enabled: true,
//                   escapeWithReference: false,
//                   boundariesElement: 'viewport'
//                 }
//               }}
//             />
//             {/* <CalendarMonthIcon /> */}
//           </div>
//         </div>

//       )}

//       {selectedDate && (
//         <div className="selected-date">
//           <Typography style={{ marginBottom: '5px', fontSize: '11px', color: 'grey' }}>START DATE</Typography>
//           <Typography style={{ fontSize: '14px' }} >{selectedDate.toLocaleDateString()}</Typography>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarIcon;

























import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import zIndex from '@mui/material/styles/zIndex';
// import './CalendarIcon.css';

const CalendarIcon = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    
  };

  return (
    <div className="calendar-icon-container">
      {selectedDate ? (
        <div>
          <h5 style={{marginBottom:'0px',fontSize:'11px',color:'grey'}}>START DATE</h5>          
          <button style={{border:'none',backgroundColor:'white'}} className="change-date-btn" onClick={toggleCalendar}>
            <p style={{fontSize:'15px'}}>{selectedDate.toLocaleDateString()}</p>
          </button>
        </div>
      ) : (
        <button style={{border:'none',backgroundColor:'white'}} className="calendar-icon" onClick={toggleCalendar}>
        <CalendarMonthIcon style={{borderRadius:'50%',border:'1px solid black',fontSize:'35px',padding:'5px'}}/>
        </button>
      )}

      {showCalendar && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          inline
        />
      )}
    </div>
  );
};

export default CalendarIcon;