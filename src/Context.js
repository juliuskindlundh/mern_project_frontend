import React,{useContext, useState} from "react";

const DataContext = React.createContext();
const Selectedcontext = React.createContext();

export function useData(){
    return useContext(DataContext);
}

export function useSelected(){
    return useContext(Selectedcontext);
}


export function ContextProvider({children}){
    const [data,setData] = useState([]);
    const [selected,setSelected] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        _id:""
    });    

    return(
        <DataContext.Provider value ={{data,setData}}>
            <Selectedcontext.Provider value ={{selected,setSelected}}>
                {children}
            </Selectedcontext.Provider>
        </DataContext.Provider>
    )
}