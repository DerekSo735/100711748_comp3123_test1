
function lowerCaseWords(array){
    let promise = new Promise(function (resolve,reject){
        var temp=[]
        for(i=0;i<array.length;i++){
            
            if((typeof array[i]) == "string"){
                temp.push(array[i].toLowerCase())
                
            }
            
        }
        
        resolve(temp)



    })
    return promise
}
array = ['PIZZA',10,true,25,false,'Wings']
lowerCaseWords(array)
    .then((result)=>console.log(result))
    