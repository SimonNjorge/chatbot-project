import UserProfileImage from '../assets/user.png'
import  RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css';

export function ChatMessage ({message, sender}) {
    // let message = props.message;
    //let sender = props.sender;
    //const { message, sender } = props;
    /*
    if(sender === 'robot') {
        return (
            <div>
                <img src="robot.png" width="50"/>
                {message}
            </div>
        )
    }
    */
    return (
        <div className={sender == "user"
          ? "message-cont chat-message-container-user":
            "message-cont" } 
        >
            {sender === 'robot' && (
                <img src={RobotProfileImage}/>
            )}
            <p className="message-paragraph">{message}</p>
            {sender === 'user' && (
                <img src={UserProfileImage} />
            )}
        </div>
    )
}