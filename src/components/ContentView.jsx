import React, { useEffect } from 'react';
import { useData } from '../Context';
import databaseService from "../services/databaseServices"
import ItemView from "./ItemView"

function ContentView(){

    const {data,setData} = useData();

    useEffect(()=>{
        setData(databaseService.getAll(setData))
    },[setData])

    const isDataLoaded = () =>{
        if(typeof(data) === "undefined"){
            return false;
        }
        return true;
    }

    return(
        <div className="contentView">
           {   
           isDataLoaded() ? 
           <div>{    
               data.map((row,index)=>{
                   return (
                        <ItemView key={index} data={row}/>
                    )
               })}
            </div>
            :
            <div>
                Loading...
            </div>
           }
        </div>
    )
}

export default ContentView;