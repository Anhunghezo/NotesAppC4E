
async function getNote(id) {
    try {
        const response = await axios.get(` https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${id} `);
        console.log(response);
        quill.setContents(response.data.delTa);
    } catch (error) {
        console.error(error);
    }    
	
}
window.addEventListener('load',function(){
    let query = getQuery();
    let noteId = query['note-id'];
    if (noteId) getNote(noteId);
} );

