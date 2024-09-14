import './Sidebar.css'
import Sidebarrow from './Sidebarrow';
function Sidebar(){
    return(
        <div className='sidebar'>
            
            <Sidebarrow selected title="Home" />
            <Sidebarrow title="Trending" />
            <Sidebarrow title="Subscription" />
            <hr/>
            <Sidebarrow title="Library" />
            <Sidebarrow title="History" />
            <Sidebarrow title="Yourvideos" />
            <Sidebarrow title="Watch later" />
            <Sidebarrow title="Liked Videos" />
            <Sidebarrow title="Showmore" />
            <hr/>
            
            
            
            
            
        </div>
    );
}
export default Sidebar;