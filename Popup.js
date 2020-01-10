if (id==404){
    $(document).ready(function () {
        $('#titleModal').modal('show');
        $('#button-save-title').on('click', () => {
            titles = $('#title-input').val();
        });
    });
}else{

}



console.log(id);