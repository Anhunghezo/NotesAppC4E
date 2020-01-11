let quill = new Quill('#editor', {
    theme: 'snow'
});
$('#save-success-alert button.close').on('click', () => {
    $('#save-success-alert').removeClass('show');
});

$('#update-success-alert button.close').on('click', () => {
    $('#save-success-alert').removeClass('show');
});

let titles;


function getQuery () {
    let urlParameter = window.location.search;
    let praseUrl = urlParameter.slice(1).split('&');
    let query = {};
    praseUrl.forEach(item => {
        let [key, value] = item.split('=');
        query[key] = value;
    });
    return query;
}

    getQuery();
    
    let query = getQuery();
    let noteId = query['note-id'];

let buttondata = document.getElementById("save"); 

if(!noteId){
    buttondata.onclick = function saveButton(){
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
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
	
    }
}else{
    buttondata.onclick = function updateButton(){
        let delta = quill.getContents(); 
        axios.put(`https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${noteId} `, {
            delTa: delta.ops
        })
            .then(function (response) {
                $('#update-success-alert').addClass('show');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
	
    }
}