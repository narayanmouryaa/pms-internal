import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';


const PersonIcon = () => {
  const [modelAnchor, setModalAnchor] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
    setModalAnchor(null);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = personData.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPersons(filtered);
  };

  const personData = [
    { id: 1, name: 'John Doe', icon:"./Images/Person1.jpg" },
    { id: 2, name: 'Jane Smith', icon: './Images/Person2.jpg' },
    { id: 3, name: 'David Johnson', icon: './Images/Person3.jpg' },
   
  ];

  const renderPersonIcons = () => {
    const personsToRender = searchQuery ? filteredPersons : personData;
    return personsToRender.map((person) => (
      <MenuItem 
        key={person.id}
        className="person-item"
        onClick={() => handlePersonSelect(person)}
      >
        <img  style={{width:'40px',height:'40px',borderRadius:'50%',margin:'5px'}} src={person.icon} alt={person.name} />
        <span style={{cursor:'pointer'}}>{person.name}</span>
      </MenuItem>
    ));
  };

  return (
    <div className="person-icon-container">
      <div className="person-icon" onClick={(el) => setModalAnchor(el.currentTarget)}>
        {selectedPerson ? (
            <>
          <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={selectedPerson.icon} alt="SP" />
          
          </>
        ) : (
          
          <AccountCircleIcon/>
          
        )}
      </div>
      <Menu
        open={!!modelAnchor}
        anchorEl={modelAnchor}
        sx={{zIndex: 100000}}
        onClose={() => setModalAnchor(null)}
      >
      <div className="search-bar" style={{margin:'5px'}}>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {renderPersonIcons()}
      </Menu>
    </div>
  );
};

export default PersonIcon;
