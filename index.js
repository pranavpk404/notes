let addBtn = document.getElementById("addBtn");
let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");
let notesElm = document.getElementById("notes");

const showNotes = () => {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="my-2 mx-2 customBorder" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  if (notesObj.length !== 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML =
      'Nothing to show! Use "Add a Note" section above to add notes.';
  }
};
const addNote = () => {
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesObj.push(myObj);

  if (addTxt.value.length === 0) {
    alert("Nothing to Add");
  } else {
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }

  addTxt.value = "";
  addTitle.value = "";
  showNotes();
};
addBtn.addEventListener("click", addNote);

showNotes();

const deleteNote = (index) => {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
};
