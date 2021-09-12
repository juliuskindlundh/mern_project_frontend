import React from 'react';
import {useSelected} from "../Context"
import databaseServices from '../services/databaseServices';
import { useData } from '../Context';

function CRUDOptions(){

    const {selected,setSelected} = useSelected();
    const {setData} = useData();

    const clear = ()=>{
        setSelected({
            firstName:"",
            lastName:"",
            phoneNumber:"",
            email:"",
            _id:""
        });
    }
    return(
        <div className="CRUDOptions">
           <button onClick={()=>{databaseServices.create(selected,setData);
                                clear();}}>Create</button>
           <button onClick={()=>{databaseServices.update(selected,setData);
                                clear();}}>Update</button>
           <button onClick={()=>{databaseServices.delete(selected,setData);
                                clear();}}>Delete</button>
           <button onClick={()=>clear()}>Clear</button>
        </div>
    )
}

export default CRUDOptions;