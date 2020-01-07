$(document).ready(function () {
    $('#titleModal').modal('show');
    $('#button-save-title').on('click', () => {
        titles = $('#title-input').val();
    });
});