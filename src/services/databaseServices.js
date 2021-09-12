
const url = "http://localhost:8080/api"
const databaseServices ={
    create: (dto,setData) => {
        fetch(url+"/create",{
            method: "post",
            body:JSON.stringify(dto),
            headers:{
                "Content-Type":"application/json",
            }
        }).then((res)=>{
            if(res.ok){
                databaseServices.getAll(setData);
            }
        });
    },
      getAll: (setData) =>{
        fetch(url+"/get",{
            method:"get",
        }).then(res=> res.json()).then(data=>{
            setData(data);
        });
    },
    update:(dto,setData) =>{
        if(dto._id === ""){
            return;
        }
        return fetch(url+"/updateById",{
            method: "put",
            body:JSON.stringify(dto),
            headers:{
                "Content-Type":"application/json",
            }
        }).then((res)=>{
            if(res.ok){
                databaseServices.getAll(setData);
            }
        });
    },
    delete: (dto,setData) =>{
        if(dto._id === ""){
            return;
        }
        return fetch(url+"/deleteById",{
            method: "delete",
            body:JSON.stringify(dto),
            headers:{
                "Content-Type":"application/json",
            }
        }).then(res=>{
            if(res.ok){
                databaseServices.getAll(setData);
            }
        });
    }
};

export default databaseServices;