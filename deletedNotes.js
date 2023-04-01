const delNotesDiv = document.getElementById('notes');
let delArr = localStorage.getItem('deletedArray');

delArr = JSON.parse(delArr);

function checkNotes() {
    let delNotes = '' ;
    for(let i=0;i<delArr.length;i++) {
        delNotes += `<div class="note">
                            <button class="deleteNote"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                            <button class="archiveNote"><i class="fa fa-archive fa-lg" aria-hidden="true"></i></button>
                            <div class="title">${delArr[i].title}</div>
                            <div class="text">${delArr[i].note}</div>
                      </div>`
     }
     delNotesDiv.innerHTML = delNotes;
}

checkNotes();