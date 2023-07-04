import React, { useState } from 'react';
 import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
 import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
 import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 import { Divider } from '@mui/material';
import '../Assets/style/style.css';

const FlagIconDropdown = () => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flag-icon-dropdown">
      <button className="flag-icon-button" onClick={toggleDropdown}>
        {selectedFlag ? (
          <span className="selected-flag">{selectedFlag}</span>
        ) : (
          <OutlinedFlagIcon style={{color:'grey',border:'1px dashed grey',borderRadius:'50%',fontSize:'40px',padding:'5px'}}/>
        )}
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          <ul>
            <li onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'red',border:'2px solid red',borderRadius:'50%',fontSize:'40px',padding:'5px'}}/>
              )}>
                <AssistantPhotoIcon style={{color:'red',marginRight:'10px'}}/>

              Urgent

            </li>
            <li onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'orange',border:'2px solid orange',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'orange',marginRight:'10px'}} />
              High
            </li>
            <li onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'blue',border:'2px solid blue',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'blue',marginRight:'10px'}} />
              Normal
            </li>
            <li onClick={() => handleFlagSelect( <AssistantPhotoIcon style={{color:'grey',border:'2px solid grey',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'grey',marginRight:'10px'}} />
              Low
            </li>
            <Divider/>
            <li onClick={() => handleFlagSelect('')}>
              <HighlightOffIcon style={{color:'grey',marginRight:'10px'}} />
              Clear
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlagIconDropdown;
