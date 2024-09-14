import { Icon } from '@mui/material';
import './sidebarrow.css';
function Sidebarrow({selected,title}){
    return(
        <div className={`sidebarrow ${selected && "selected"}`}>
        
        <h1 className='sidebar_title'>{title}</h1>
        </div>
    );
}
export default Sidebarrow;