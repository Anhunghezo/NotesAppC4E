let quill = new Quill('#editor', {
    theme: 'snow'
});
$('#save-success-alert button.close').on('click', () => {
    $('#save-success-alert').removeClass('show');
});

let titles;

document.getElementById('save').addEventListener('click',
    function saveButton(){
        let delta = quill.getContents(); 
        let converter = new QuillDeltaToHtmlConverter(delta.ops, {});
        let html = converter.convert(); 

        axios.post('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes ', {
            delTa: delta.ops,
            Html: html,
            title: titles,
            Contents: 'IloveU',
				
        })
            .then(function (response) {
                $('#save-success-alert').addClass('show');
            })
            .catch(function (error) {
                console.log(error);
            });
	
    });
