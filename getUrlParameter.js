window.addEventListener("load",function(){
    try{
        let url_parameter = window.location.search;
        console.log(url_parameter);
    } catch (error){
        console.log(error);
    }
})

let url_parameter;