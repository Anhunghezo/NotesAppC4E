window.addEventListener("load",function(){
  window.location.href =  `xxx?note-id= ${url_parameter}`

  async function getUser() {
    try {
      const response = await axios.get('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/ + ${url_parameter}');
      console.log(response);
      quill.setContents(response.data.delTa);
    } catch (error) {
      console.error(error);
    }    
}

} )
