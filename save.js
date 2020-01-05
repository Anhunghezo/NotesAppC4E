async function getData(){
  let data = await axios.get  ('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes')
  return data
}

async function postData(data){
  await axios.post ('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes', data);
}



async function mySearch() {
  let res = await getData()
  let titles = res.data
  let searchString = document.getElementById("myInput").value
  if (!searchString) {
    renderSearchNotes(titles)  
  } else {
    let searchNotes = titles.filter( tus => tus.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);//điều kiện tìm kiếm
    renderSearchNotes(searchNotes)
  }
}

function renderSearchNotes (searchNotes) {
let domDraft = document.getElementsByClassName("draft")
let listNoteHTML = ''
for (let i = 0; i < searchNotes.length; i++) {

    let note = searchNotes[i]
    if (note.status === "isDeleted") continue 
    listNoteHTML += ` <div class="note-item">
     <button id="move" data-note-id="${note.id}"><div>${note.title}</div> 
    <div class="note"><a href=""></a></div>
    <button class="btn" data-note-id="${note.id}"><i class="fa fa-close"></i></button>
    </button>
   </div>`
}
domDraft[0].innerHTML = listNoteHTML
document.getElementsByClassName("btn").addEventListener("click",
function deletedButton() {
 axios.put(`https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${this.dataset.noteId}`, {
    status   : 'isDeleted'
})
.then(function (response) {
  console.log(response);
  mySearch()
})
.catch(function (error) {
  console.log(error);
});
console.log(this.dataset.noteId)
});
document.getElementById("move").addEventListener("click",
function moveWindow() {
  window.location.href=`https://notesappc4e.netlify.com/?fbclid=IwAR1Jqx2JajHE7rpAylKqBUBwzwxCrWCDFCHfAEKUI7C1m9AX0KKQN2IQoWg?note-id=${this.dataset.noteId}`
});
}

window.addEventListener('load', function () {
  mySearch()
})

