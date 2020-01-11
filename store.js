async function getData(){
    let data = await axios.get  ('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes');
    return data;
}
async function putData(id){
    let data = await axios.get  ('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes');
    return data;
}

async function main() {
    let res = await getData();
    let notes = res.data;
    let delNotes = notes.filter( tus => tus.status === 'isDeleted');
    renderDelNotes(delNotes);
}

function renderDelNotes(delNotes){
    let domDraft = document.getElementsByClassName('draft');
    let listNoteHTML = '';
    for (let i = 0; i < delNotes.length; i++){
        let note = delNotes[i];
        listNoteHTML += `<div class="card mb-3">
				<div class="note-item card-body">
						<label class="wrapper-checkbox">${note.title}
							<input type="checkbox" class="noteCheckBox" data-value="${note.id}">
							<span class="checkmark"></span>
						</label>
					 </div>
					 </div>`;
    }
    domDraft[0].innerHTML = listNoteHTML;
}

let deleteAll = document.getElementById('delete');
deleteAll.onclick = function(){
    let noteCheckBox = document.getElementsByClassName('noteCheckBox');
    for (let i = 0; i < noteCheckBox.length; i++){
        let box = noteCheckBox[i];
        if(box.checked){
            deleteNote(box.dataset.value);
        }
    }
};
async function deleteNote(id){
    try {
        await axios.delete (`https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${id}`);
        let res = await getData();
        let notes = res.data;
        let delNotes = notes.filter( tus => tus.status === 'isDeleted');
        renderDelNotes(delNotes);
    } 
    catch (error){
        console.error(error);
    }
}

let restoreAll = document.getElementById('restore');
restoreAll.onclick = function(){
    let noteCheckBox = document.getElementsByClassName('noteCheckBox');
    for( let i= 0; i < noteCheckBox.length; i++)
    {
        let box = noteCheckBox[i];
        if(box.checked){
            restoreNote(box.dataset.value);
        }
    }
};
async function restoreNote(id){
    try {
        await axios.put(`https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${id}`, {
            status: 'isWorking'
        });
        let res = await getData();
        let notes = res.data;
        let delNotes = notes.filter( tus => tus.status === 'isDeleted');
        renderDelNotes(delNotes);
    } 
    catch (error){
        console.error(error);
    }
} 

main();