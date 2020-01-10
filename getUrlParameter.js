
let url_parameter = window.location.search;
console.log(url_parameter);
console.log(typeof(url_parameter));

if(url_parameter== ""){
    var id = 404;
}else{
    let arrQuery = url_parameter.split("=");
    console.log(arrQuery);

    var id = arrQuery[1];
    console.log(id);
}

