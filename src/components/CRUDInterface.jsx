import React from 'react';
import CRUDOptions from './CRUDOptions';
import EditableItemView from './EditableItemView';

function CRUDInterface(){
    return(
        <div className="CRUDInterface">
           CRUDInterface
           <EditableItemView/>
           <CRUDOptions/>          
        </div>
    )
}

export default CRUDInterface;