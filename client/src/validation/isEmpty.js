// onst isEmpty= value =>{
//     value ==undefined ||
//     value == null || 
//     (typeof value=== 'object' && Object.keys (value).length === 0)||
//     (typeof value ==='string' && value.trim().length ===0);   
// }


const isEmpty = value =>{
    if(value === undefined || value===null){
        return true;
    }
    return false
}
export default isEmpty;
        
