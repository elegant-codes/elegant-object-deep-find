function findKey(obj, keyV){ 
    let myNewObj= obj;
    let keyVal= keyV;
      for(i in myNewObj){ 
          let typOfI= typeof(myNewObj[i]); 
          if (i === keyVal){ 
              let prinTkey = myNewObj[i]; 
             return  console.log(prinTkey)
        
             
        } 
        if (typOfI === 'object'){ 
            findKey(myNewObj[i], keyVal); 
        } 
    } 
}