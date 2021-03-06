function abtractText (string, maxLength) {
    if (string.length > maxLength) {
        return `${string.slice(0, maxLength - 1)}...`;
    }
    return string;
}
async function getData() {
    let data = await axios.get('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes');
    return data;
}

async function postData(data) {
    await axios.post('https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes', data);
}

document.getElementById('return').addEventListener('click',
    function moveWindow() {
        window.location.href='https://blinkblog.netlify.com';
    });

async function mySearch() {
    let res = await getData();
    let titles = res.data;
    let searchString = document.getElementById('myInput').value;
    if (!searchString) {
        renderSearchNotes(titles);
    } else {
        let searchNotes = titles.filter(tus => tus.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);//điều kiện tìm kiếm
        renderSearchNotes(searchNotes);
    }
}

function renderSearchNotes(searchNotes) {
    let domDraft = document.getElementsByClassName('draft');
    let listNoteHTML = '';
    for (let i = 0; i < searchNotes.length; i++) {

        let note = searchNotes[i];
        if (note.status === 'isDeleted') continue;
        let noteContent = $(note.Html).text() || 'No content';
        listNoteHTML += `
      <div class="col-sm-12 col-md-3">
        <div class="note card mb-3">
          <div class="card-header">
            <div class="note__title">
              <span>${note.title}</span>
            </div>
            
            <div class="note__actions btn-group">
              <button class="btn remove-note-button" data-note-id="${note.id}">
                <i class="fa fa-close"></i>
              </button>
              <button class="btn view-note-button" data-note-id="${note.id}">
                <i class="fa fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="note__content card-text">${abtractText(noteContent, 20)}</div>
          </div>
        </div>
      </div>`;
    }
    domDraft[0].innerHTML = `<div class="row">${listNoteHTML}</div>`;
  
    $('.remove-note-button').on('click', function () {
        axios.put(`https://5df38c84f9e7ae00148012bc.mockapi.io/NOTE4E/notes/${this.dataset.noteId}`, {
            status: 'isDeleted'
        })
            .then(function (response) {
                console.log(response);
                mySearch();
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    $('.view-note-button').on('click', function () {
        window.location.href = `https://blinkblog.netlify.com/?note-id=${this.dataset.noteId}`;
    });
}

window.addEventListener('load', function () {
    mySearch();
});

