import './Channelrow.css';
import { Avatar } from '@mui/material';
function Channelrow({image,Channel,
    verified,
    subscribers,
    noofvideos,
    description}){
    return(
        <div className="channelrow">
            <Avatar className="channel_row_logo" alt={Channel} src={image}/>
            <div className="channel_text">
                <h4>{Channel}{verified}</h4>
                <p>{subscribers} subscribers.{noofvideos} videos</p>
                <p className="hi">{description}</p>
            </div>
        </div>
    );
}
export default Channelrow;