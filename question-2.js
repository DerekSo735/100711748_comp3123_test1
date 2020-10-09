function resolvedPromise(){
    let promise = new Promise(function (resolve,reject){
         setTimeout(()=>{
            let success = {'message': 'delayed success!'}
            resolve(success)
        },500)
        //reject("something went wrong")

    })
    return promise
}
function rejectedPromise(){
    let promise = new Promise(function (resolve,reject){
         setTimeout(()=>{
            try{
                 reject(Error('error: delayed exception!'));
            } catch (e){
                console.error(e)
            }
        },500)
        

    })
    return promise
}

resolvedPromise()
    .then((result)=>console.log(result));
    
rejectedPromise()
.catch(error => console.log(error));