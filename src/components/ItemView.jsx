import React from 'react';
import {useSelected} from "../Context"


function ItemView(props){
    const {setSelected} = useSelected();

    const isFieldSet = (field) => {
        if(field === "undefined"){
            return true;
        }
        else{
            return false;
        }
    }
        
    return(
        <div className="ItemView" onClick={()=>setSelected(props.data)}>
            <label>First name: </label>{props.data.firstName}
            {
                !isFieldSet(props.data.lastName) ? 
                <div>
                    <label>Last name: </label>{props.data.lastName}
                 </div>
                 :
                <></>
            }
            {
                !isFieldSet(props.data.phoneNumber) ? 
                <div>
                    <label>Phone number: </label>{props.data.phoneNumber}
                </div>
                    :
                <></>
            }
            {
                !isFieldSet(props.data.email) ? 
                    <div>
                      <label>email: </label>{props.data.email}
                    </div>
                    :
                    <></>
            }          
        </div>
    )
}

export default ItemView;