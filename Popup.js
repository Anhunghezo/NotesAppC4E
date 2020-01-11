window.addEventListener('load', function () {
    let query = getQuery();
    let noteId = query['note-id'];
    if (noteId) return;
		
    $('#titleModal').modal('show');
    $('#button-save-title').on('click', () => {
        titles = $('#title-input').val();
    });
});