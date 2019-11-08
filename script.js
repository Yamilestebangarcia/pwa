if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js")
    .then(reg=>console.log("Registro de sw", reg))
    .catch(err=>console.warn("error",err))
    }else{
console.log("no existe navigator")
}