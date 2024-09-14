import './Videorow.css';
function Videorow({views,subscribers,description,timestamp,channel,title,image}){
    return(
        <div className='videorow'>
            <img src={image} alt=''/>
            <div className='video_text'>
            <h3>{title}</h3>
            <p className='vid_head'>{channel}.
                <span className='spc'>{subscribers}</span> subscribers {views} views  </p>
            <p className='des'>{description}</p>
            </div>

        </div>
    );
}
export default Videorow;