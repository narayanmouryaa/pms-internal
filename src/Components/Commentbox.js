import React, { useState } from 'react';
import '../Assets/style/style.css'; // Import your CSS file
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const MessageBox = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [comment, setComment] = useState('');

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleMessageBoxClick = () => {
        if (!popupVisible) {
            setPopupVisible(true);
        }
    };

    return (
        <div className="message-box" onClick={handleMessageBoxClick}>
            <div className="message" style={{color:'grey'}}>Comment or type "/" for Commands</div>
            {popupVisible && (
                <div className="popup">
                    <textarea
                        className="comment-textarea"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <div className="icons-container">
                        <SentimentSatisfiedAltIcon style={{ marginRight: '15px', marginLeft: '10px' }} />
                        <KeyboardVoiceIcon style={{ marginRight: '15px' }} />
                        <RecordVoiceOverIcon style={{ marginRight: '15px' }} />
                        <AssignmentIndIcon style={{ marginRight: '15px' }} />
                        <DescriptionOutlinedIcon style={{ marginRight: '15px' }} />
                    </div>
                </div>
            )}
            {popupVisible && (
                <button style={{border:'none',backgroundColor:'blue',color:'white',fontWeight:'600',borderRadius:'5px'}} className="comment-button" onClick={togglePopup}>
                    Comment
                </button>
            )}
            {!popupVisible && (
                <button className="comment-button-hidden" onClick={togglePopup}>
                    Comment
                </button>
            )}
        </div>
    );
};

export default MessageBox;
