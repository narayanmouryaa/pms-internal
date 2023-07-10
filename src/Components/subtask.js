import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box, FormControlLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import CalendarIcon from './subtaskstartcal';
import PersonIcon from './UserIcon';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FlagIconDropdown from './Drop';



const SubtaskList = () => {
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');


    const handleAddSubtask = () => {
        if (newSubtask.trim() !== '') {
            setSubtasks([...subtasks, newSubtask]);
            setNewSubtask('');
        }
    };

    const handleDeleteSubtask = (index) => {
        const updatedSubtasks = subtasks.filter((_, i) => i !== index);
        setSubtasks(updatedSubtasks);
    };




    return (
        <Box style={{ display: 'flex', alignItems: 'center', width: '700px' }}>
            <div>
                <List>
                    {subtasks.map((subtask, index) => (
                        <ListItem key={index}>


                            <FormControlLabel
                                control={<Checkbox />}
                                onChange={() => handleDeleteSubtask(index)}

                            />
                            <Avatar sx={{ height: 30, width: 30 }}>A</Avatar>


                            <ListItemText primary={subtask} style={{ marginLeft: '10px' }} />


                        </ListItem>
                    ))}
                </List>
                <TextField
                    label="Add Subtask"
                    style={{ width: '600px' }}
                    value={newSubtask}
                    onChange={(e) => setNewSubtask(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <>

                                <Tooltip title="Due Date" placement="top">
                                    <CalendarIcon  />
                                </Tooltip>

                                <Tooltip title="Due Date" placement="top">
                                    <CalendarIcon />
                                </Tooltip>

                                <PersonIcon />
                                <FlagIconDropdown/>

                            </>
                        )
                    }}


                />

                <Button variant="contained" onClick={handleAddSubtask} sx={{ padding: '15px' }}>
                    Save
                </Button>
            </div>
        </Box>
    );
};

export default SubtaskList;