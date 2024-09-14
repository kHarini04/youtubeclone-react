import { Button} from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";

function Demo1(){
    const[count,setcount]=useState(0);

    const Increment=()=>{
        setcount(count+1);


    }
    const Decrement=()=>{
        if(count>0){
            setcount(count-1);
        }
        else{
            window.alert("jasti amkthidya");
        }


    }

    

    return(
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="outlined" onClick={Increment} >Increment</Button>
        <Button variant="outlined" onClick={Decrement} >Decrement</Button>
        <h1>count:{count}</h1>
        </>
    );
}
export default Demo1;