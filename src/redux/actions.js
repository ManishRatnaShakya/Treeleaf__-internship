export const addData = (data)=>{
    return{
        type:'ADD_DATA',
        payload:data,
    }
}
export const deleteData = (dataId)=>{
    return{
        type:'DELETE_DATA',
        payload:dataId,
    }
}
export const updateData = (data)=>{
    return{
        type:'UPDATE_DATA',
        payload:data,
    }
}