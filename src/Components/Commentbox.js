import React, { useState } from 'react';
import '../Assets/style/style.css'; // Import your CSS file
import { Popover } from '@mui/material';

const MessageBox = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [comment, setComment] = useState('');

    // const togglePopup = () => {
    //     setPopupVisible(!popupVisible);
    // };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <>
        <div className="message-box" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <div className="message" style={{color:'grey'}}  >Comment or type "/" for Commands</div>
        </div>
        <Popover sx={{zIndex: 10000, width: '100%'}} open={!!anchorEl} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{vertical: 'bottom'}} transformOrigin={{vertical: 'bottom'}}>
            <textarea
                className="comment-textarea"
                placeholder="Write a comment..."
                value={comment}
                onChange={handleCommentChange}
                style={{width: 700}}
            />
            <button style={{border:'none',backgroundColor:'blue',color:'white',fontWeight:'600',borderRadius:'5px'}} className="comment-button" onClick={() => setAnchorEl(null)}>
                Comment
            </button>
        </Popover>
        </>
    );
};

export default MessageBox;
