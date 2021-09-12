import React from 'react';
import { useSelected } from '../Context';

function EditableItemView(){
    const {selected,setSelected} = useSelected();
    
    const handleChange1 = e =>{
        setSelected({
            firstName:e.target.value,
            lastName:selected.lastName,
            phoneNumber:selected.phoneNumber,
            email:selected.email,
            _id:selected._id
        })
    }

    const handleChange2 = e =>{
        setSelected({
            firstName:selected.firstName,
            lastName:e.target.value,
            phoneNumber:selected.phoneNumber,
            email:selected.email,
            _id:selected._id
        })
    }

    const handleChange3 = e =>{
        setSelected({
            firstName:selected.firstName,
            lastName:selected.lastName,
            phoneNumber:e.target.value,
            email:selected.email,
            _id:selected._id
        })
    }

    const handleChange4 = e =>{
        setSelected({
            firstName:selected.firstName,
            lastName:selected.lastName,
            phoneNumber:selected.phoneNumber,
            email:e.target.value,
            _id:selected._id
        })
    }

    const blockUndefined = (field) =>{
        if(typeof(field) === "undefined"){
            return "";
        }
        return field;
    }

    return(
        <div className="EditableItemView">
            <form>
                <input type="text" value={blockUndefined(selected.firstName)} onChange={handleChange1}></input><br/>
                <input type="text" value={blockUndefined(selected.lastName)} onChange={handleChange2}></input><br/>
                <input type="text" value={blockUndefined(selected.phoneNumber)} onChange={handleChange3}></input><br/>
                <input type="text" value={blockUndefined(selected.email)} onChange={handleChange4}></input>
            </form>
        </div>
    )
}

export default EditableItemView;