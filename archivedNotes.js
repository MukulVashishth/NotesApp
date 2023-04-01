const archNotesDiv = document.getElementById('archNotes');
let archArr = localStorage.getItem('archivedArray');

archArr = JSON.parse(archArr);
console.log(archArr);
function checkNotes() {
    let archNotes = '' ;
    for(let i=0;i<archArr.length;i++) {
        archNotes += `<div class="note">
                            <button class="deleteNote"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                            <button class="archiveNote"><i class="fa fa-archive fa-lg" aria-hidden="true"></i></button>
                            <div class="title">${archArr[i].title}</div>
                            <div class="text">${archArr[i].note}</div>
                      </div>`
     }
     archNotesDiv.innerHTML = archNotes;
}

checkNotes();