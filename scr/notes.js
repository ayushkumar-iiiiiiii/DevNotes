import "./index.css"
import { data_api, page_api } from "./apis"


const all_notes_fragment = document.createDocumentFragment();
const all_notes = document.getElementById("all_notes");
const main_contant = document.getElementById("main_contant");
const note_editor = document.getElementById("note_editor");
const close_editor = document.getElementById("close_editor");
const save_btn = document.getElementById("savebtn");
// const editor_title_input = document.getElementById("title");
// const editor_subject_inputs = document.getElementById("subject");
// const editor_content_input = document.getElementById("notes_main_contant");



let opened_editor_ID = null // it store the data that editor is opeing which note 






// function for getting the data from the server of the user

async function get_notes() {
    try {

        const response = await data_api.get('/notes/get_notes')

        return response.data

    } catch (error) {
        console.log(error)
    }
}




// way to create notes


async function create_notes() {

    const notes = await get_notes()

    console.log(notes)

    notes.forEach((element) => {
        const note_div = document.createElement("div")
        const tag_container = document.createElement("div")
        const subject = document.createElement("h6")
        const title = document.createElement("h4")
        const content = document.createElement("p")
        const date = document.createElement("p")

        tag_container.className = "tag_container"
        note_div.className = "notes"
        note_div.id = element.note_id
        subject.className = "notes_subject"
        content.className = "notes_content"
        title.className = "notes_title"

        element.tags.forEach((element_of_tags) => {

            const tags = document.createElement("span")

            tags.className = "notes_tags"

            tags.textContent = element_of_tags;

            tag_container.append(tags);

        })



        title.textContent = element.title
        content.textContent = element.content
        subject.textContent = element.subject
        date.textContent = element.created_date


        note_div.append(title, subject, content, tag_container, date);
        all_notes_fragment.appendChild(note_div)

        note_div.addEventListener("click", () => {
            main_contant.style.display = "none"
            note_editor.style.display = "flex"
        })

    });

    all_notes.appendChild(all_notes_fragment);

}

create_notes()






//  function for selecting the notes id and change the url as /id

function change_url_as_notId() {

    const note = event.target.closest(".notes");

    if (!note) return;

    const clicked_note_id = note.id;

    //console.log(clicked_note_id);

    history.pushState(
        {},
        "",
        `/api/notes/${clicked_note_id}`
    )

}

// function for the changeing the url back to normal

function change_url_as_normal() {
    history.pushState(
        {},
        "",
        "/api/notes"
    )
}


// function for checking the url and decide what to give notes list or editor




// function for open notes data in editor

function fill_editor(note_id) {

    const note = document.getElementById(note_id)

    const editor = document.getElementById('note_inputs')

    const title = editor.querySelector('#title')

    const subject = editor.querySelector('#subject')

    const note_main_contant = editor.querySelector('#notes_main_contant')

    title.value = note.querySelector('.notes_title').textContent

    subject.value = note.querySelector('.notes_subject').textContent

    note_main_contant.value = note.querySelector('.notes_content').textContent

}


// function for updating the note/save in db

async function update_note(note_id) {

    const editor = document.getElementById('note_inputs')

    const title = editor.querySelector('#title')

    const subject = editor.querySelector('#subject')

    const note_main_contant = editor.querySelector('#notes_main_contant')

    console.log(title.value)

    try {

        const response = data_api.patch('/notes/save-note', {
            note_id: note_id,
            title: title.value,
            subject: subject.value,
            note_main_contant: note_main_contant.value
        })

    } catch (error) {
        console.log(error)
    }

}





all_notes.addEventListener("click", (event) => {

    const note = event.target.closest(".notes");

    if (!note) return;

    const clicked_note_id = note.id;

    opened_editor_ID = note.id

    fill_editor(clicked_note_id)

})







close_editor.addEventListener("click", () => {
    main_contant.style.display = "block"
    note_editor.style.display = "none"
    opened_editor_ID = null
})



all_notes.addEventListener("click", change_url_as_notId)


save_btn.addEventListener("click", () => {
    update_note(opened_editor_ID)
})


close_editor.addEventListener("click", change_url_as_normal)