import './Videocard.css';

import { Avatar } from "@mui/material";

function Videocard({image,title,channel,timestamp,views}){
    return(
        <div className="videocard">
            <img className="vide_thum" src={image} alt=""/>
            <div className="video_info">
            <Avatar className="videocard_avatar" alt="Cl"/>
            <div className="vide_name">
            <h4>{title}</h4>
            <p>{channel}</p>
            <h5>{views}|{timestamp}</h5>            </div>
            </div>
        </div>
    );
}
export default Videocard;