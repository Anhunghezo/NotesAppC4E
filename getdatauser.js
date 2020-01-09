

window.addEventListener("load",function(){
           
      if(id!==0){
            async function getUser() {
              try {
                const response = await axios.get(` https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${id} `)
                console.log(response);
                console.log(data)
                quill.setContents(response.data.delTa);
              } catch (error) {
                console.error(error);
              }    
            
          }
          console.log(id);
          getUser();
      }else{


      }
          

} )

