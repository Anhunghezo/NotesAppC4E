let quill = new Quill('#function', {
    theme: 'snow'
  });
 
  let Titles;

document.getElementById("save").addEventListener("click",
     function saveButton(){
        let delta = quill.getContents(); 
        let converter = new QuillDeltaToHtmlConverter(delta.ops, {});
        let html = converter.convert(); 
        console.log(html)
        console.log(delta)

      axios.post('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes ', {
            delTa: delta.ops,
            Html: html,
            title    : Titles,
            Contents : 'IloveU',
            
       })
       .then(function (response) {
         console.log(response);
         alert('Lưu thành công !');
       })
       .catch(function (error) {
         console.log(error);
       });
      
     })
