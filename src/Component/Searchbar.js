import './Searchpage.css';
import Channelrow from './Channelrow';
import Videorow from './Videorow';
function Searchbar(){
    return(
        <div className="searchbar">
            <div className="searchpage_fil">
                <img className="imm" src="https://img.icons8.com/?size=100&id=82701&format=png&color=000000.png" alt=""/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <Channelrow
            image="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-software-clipart-vector-png-image_6812300.png"
            Channel="Harinisoftware"
            verified
            subscribers="50M"
            noofvideos={100}
            description="welcome to fast programming"/>
            <hr/>
            <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
              <Videorow
             title= "Become software engineer in 1 min"
             views="3.5M Views"
             subscribers= "50M"
             description="welcome to fast programming"
             timestamp="1min ago"
             channel="Harinisoftware"
             image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQeh9kJ4mIfEy0GQWoqkj1PVl7Sy9wPcfZg&s"/>
            </div>
    );
}
export default Searchbar;