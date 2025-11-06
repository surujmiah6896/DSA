/**
 * create promise with sleep
 * 
 */


const sleep = async(millis) =>{
    return new Promise(resolve=>setTimeout(resolve, millis));
}

sleep(3000).then(()=>console.log('hello'));