import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Menu } from '@mui/material';
// import './CalendarIcon.css';

const CalendarIcon = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setAnchorEl(null)
  };

  const toggleCalendar = (el) => {
    setAnchorEl(el.currentTarget)
  };

  return (
    <div className="calendar-icon-container">
      {selectedDate ? (
        <>
        <div>
          
          <h5 style={{ marginBottom: '0px', fontSize: '11px', color: 'grey' }}>START DATE</h5>
          <button style={{ border: 'none', backgroundColor: 'white' }} className="change-date-btn" onClick={toggleCalendar}>
            <p style={{ fontSize: '15px' }}>{selectedDate.toLocaleDateString()}</p>
          </button>
           </div>

           {/* <div>
            <h5 style={{ marginBottom: '0px', fontSize: '11px', color: 'grey' }}>TIME</h5>
           </div> */}
           </>
          
       
      ) : (
        <button style={{ border: 'none', backgroundColor: 'white' }} className="calendar-icon" onClick={toggleCalendar}>
          <CalendarMonthIcon style={{ borderRadius: '50%', border: '1px solid black', fontSize: '35px', padding: '5px' }} />
        </button>
      )}
      <Menu open={!!anchorEl} anchorEl={anchorEl} sx={{ zIndex: 10000, padding: 0 }} onClose={el => setAnchorEl(null)}>
        {/* <DatePicker
          selected={selectedDate}
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          onChange={handleDateSelect}
          inline
        /> */}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          inline
        />
      </Menu>
    </div>
  );
};

export default CalendarIcon;