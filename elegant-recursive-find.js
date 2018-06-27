function findKey(obj, keyV){
    let myNewObj= obj;
    let keyVal= keyV; 
    for(i in myNewObj){
        let typOfI= typeof(myNewObj[i]);
        
        if (i === keyVal){
            console.log(myNewObj[i]);
        } 
        if (typOfI === 'object'){
             findKey(myNewObj[i], keyVal);
        }
        
    }
}