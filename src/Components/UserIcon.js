import React, { useState } from 'react';
// import './PersonIcon.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const PersonIcon = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
    setIsModelOpen(false);
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
      <div 
      
        key={person.id}
        className="person-item"
        onClick={() => handlePersonSelect(person)}
      >
        <img  style={{width:'40px',height:'40px',borderRadius:'50%',margin:'5px'}} src={person.icon} alt={person.name} />
        <span style={{cursor:'pointer'}}>{person.name}</span>
      </div>
    ));
  };

  return (
    <div className="person-icon-container">
      <div className="person-icon" onClick={toggleModel}>
        {selectedPerson ? (
            <>
          <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={selectedPerson.icon} alt="SP" />
          
          </>
        ) : (
          
          <AccountCircleIcon/>
          
        )}
      </div>
      {isModelOpen && (
        <div className="person-model" style={{marginTop:'5px',border:'1px solid black',padding:'5px',backgroundColor:'smokywhite'}}>
          <div className="search-bar" style={{margin:'5px'}}>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="person-icons">{renderPersonIcons()}</div>
        </div>
      )}
    </div>
  );
};

export default PersonIcon;
