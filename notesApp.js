const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNotesButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

//Storing the updated notes list in local storage
var deletedArray = [];

var archivedArray = [];

function addNotes() {
    //Here we check if any notes are available in local storage
    let notes = localStorage.getItem('notes');

    //If not available then we create that
    if(notes === null) {
        notes = [];
    }

    else {
        notes = JSON.parse(notes);      //Value from local storage comes in form of string so we convert that to object using JSON.parse
    }
    //This validation is for empty note value
    if(addText.value == '') {
        alert('Empty note cannot be added');
        return;
    }

    const notesObj = {
        title: addTitle.value,
        note: addText.value,
    }
    addTitle.value = '';
    addText.value = '';
    notes.push(notesObj);
    localStorage.setItem('notes', JSON.stringify(notes));   // We can only put values in local storage as string
    showNotes();
}

function showNotes() {
    let notesDisp = '';
    
    let notes = localStorage.getItem('notes');
    if(notes === null) {
        return ;
    }
    else {
        notes = JSON.parse(notes);
    }

    for(let i=0;i<notes.length;i++) {
        notesDisp += `<div class="note">
                            <button class="deleteNote" id="${i}" onclick="delNote(${i})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                            <button class="archiveNote" id="${i}" onclick="archNote(${i})"><i class="fa fa-archive fa-lg" aria-hidden="true"></i></button>
                            <div class="title">${notes[i].title === '' ? 'Note' : notes[i].title}</div>
                            <div class="text">${notes[i].note}</div>
                      </div>`
     }
     notesDiv.innerHTML = notesDisp;
}


function delNote(ind) {
    let notes = localStorage.getItem('notes');
    if(notes === null) {
        return ;
    }
    else {
        notes = JSON.parse(notes);
    }

    deletedArray.push(notes[ind]);
    localStorage.setItem('deletedArray', JSON.stringify(deletedArray));

    notes.splice(ind,1);
    localStorage.setItem('notes', JSON.stringify(notes));   // We can only put values in local storage as string
    showNotes();
}

function archNote(ind) {
    let notes = localStorage.getItem('notes');
    if(notes === null) {
        return ;
    }
    else {
        notes = JSON.parse(notes);
    }

    archivedArray.push(notes[ind]);
    localStorage.setItem('archivedArray', JSON.stringify(archivedArray));

    notes.splice(ind,1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

addNotesButton.addEventListener('click', addNotes);

showNotes();