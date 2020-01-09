// window.addEventListener("load",function(){
//     try{
//         var url_parameter = location.search;
//         console.log(url_parameter);
//     } catch (error){
//         console.log(error);
//     }
    
// })

let url_parameter = window.location.search;
console.log(url_parameter);
console.log(typeof(url_parameter));

let arrQuery = url_parameter.split("=");
console.log(arrQuery);

var id = arrQuery[1];
console.log(id);



// window.addEventListener("load",function(){
  
//     async function getData() {
//         let data = await axios.get('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes');
//         return data;
//         console.log(data);
//     }
  
//   } )


