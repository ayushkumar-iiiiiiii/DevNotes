import "./../scr_css/notes.css"
import { data_api, page_api } from "./apis"



const all_notes = document.getElementById("all_notes");
const main_contant = document.getElementById("main_contant");
const note_editor = document.getElementById("note_editor");
const close_editor = document.getElementById("close_editor");
const save_btn = document.getElementById("savebtn");
const main_contant_container = document.getElementById("main_content_container")
const tell_the_page_is_end = document.getElementById("tell_the_page_is_end")
const logout_btn = document.getElementById("logout_btn")
// const editor_title_input = document.getElementById("title");
// const editor_subject_inputs = document.getElementById("subject");
// const editor_content_input = document.getElementById("notes_main_contant");



let opened_editor_ID = null // it store the data that editor is opeing which note by storing the note id






// function for getting the 25 note data from the server for first time

async function get_all_notes() {
    try {

        const response = await data_api.get('/notes/get_notes')

        return response.data

    } catch (error) {
        console.log(error)
        if (error.status == 401 && error.response.data.massage == "token not found") {
            console.log('get note error')
        }
    }
}


// function for getting the 25 notes from server while scrolling

async function scrolling_get_notes(last_note_id) {

    try {

        const response = await data_api.get('/notes/scrolling_get_notes', {
            params: {
                last_note_id: last_note_id
            }
        })

        return response.data

    } catch (error) {
        console.log(error)
        if (error.status == 401 && error.response.data.massage == "token not found") {
            console.log('get note error')
        }
    }
    
}




// function for getting one note data from server

async function get_one_note(note_id) {

    try {

        const response = await data_api.get('/notes/get_one_note', {
            params: {
                note_id: note_id
            }
        })

        return response.data

    } catch (error) {
        console.log(error)
        if (error.status == 401 && error.response.data.massage == "token not found") {
            console.log('get auth note error')
        }

        if (error.response.data.massage == "cant get one note data") {
            console.log('getting error in fetching one note in server')
        }
    }

}





// function for deleteing the note from DOM

function deletenote(note_id) {

    const note = document.getElementById(note_id)

    note.remove()
}




// way to create all notes 


async function create_all_notes() {

    all_notes.innerHTML = ""

    const all_notes_fragment = document.createDocumentFragment();

    const notes = await get_all_notes()

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

create_all_notes()




// way to create all notes while scrolling


async function create_all_notes_scrolling(last_note_element_id) {

    const all_notes_fragment = document.createDocumentFragment();

    const notes = await scrolling_get_notes(last_note_element_id)

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




// way to crate only one note

async function create_one_note(note_id) {

    const note = document.getElementById(note_id)

    note.remove()

    try {

        console.log(note_id)

        const note_data = await get_one_note(note_id)

        note_data.forEach((element) => {
            const note_div = document.createElement("div")
            const tag_container = document.createElement("div")
            const subject = document.createElement("h6")
            const title = document.createElement("h4")
            const content = document.createElement("p")
            const date = document.createElement("p")

            tag_container.className = "tag_container"
            note_div.className = "notes"
            note_div.id = note_id
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
            all_notes.prepend(note_div)

            note_div.addEventListener("click", () => {
                main_contant.style.display = "none"
                note_editor.style.display = "flex"
            })

        });


    } catch (error) {
        console.log(error)
    }

}






//  function for selecting the notes id and change the url as /id

function change_url_as_notId() {

    const note = event.target.closest(".notes");

    if (!note) return;

    const clicked_note_id = note.id;

    //console.log(clicked_note_id);

    history.pushState(
        {},
        "",
        `/${clicked_note_id}`
    )

}

// function for the changeing the url back to normal

function change_url_as_normal() {
    history.pushState(
        {},
        "",
        "/"
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

        const response = await data_api.patch('/notes/save-note', {
            note_id: note_id,
            title: title.value,
            subject: subject.value,
            note_main_contant: note_main_contant.value
        })

    } catch (error) {
        console.log(error)
    }

}



// function for handling the loading of more notes


let loading = false;

main_contant_container.addEventListener("scroll", async () => {
    if (loading) return;

    const shouldLoad =
        main_contant_container.scrollTop +
            main_contant_container.clientHeight >=
        main_contant_container.scrollHeight - 200;

    if (!shouldLoad) return;

    loading = true;

    try {
        const lastNoteId = all_notes.lastElementChild.id;

        console.log(lastNoteId)
        await create_all_notes_scrolling(lastNoteId);
    } finally {
        loading = false;
    }
})






// logout funtion

async function logout() {

    try {

        const response = await data_api.delete('/logout/logout')
        
    } catch (error) {
        console.log(error)
    }
    
}

logout_btn.addEventListener('click', logout)




// open note in editor


all_notes.addEventListener("click", (event) => {

    const note = event.target.closest(".notes");

    if (!note) return;

    const clicked_note_id = note.id;

    opened_editor_ID = note.id

    fill_editor(clicked_note_id)

})




// closing the editor


close_editor.addEventListener("click", async () => {
    main_contant.style.display = "grid"
    note_editor.style.display = "none"
    await create_one_note(opened_editor_ID)
    opened_editor_ID = null
})








// changing the url of open note

all_notes.addEventListener("click", change_url_as_notId)

// changing the url to normal

close_editor.addEventListener("click", change_url_as_normal)


//saving the edited note in db

save_btn.addEventListener("click", () => {
    update_note(opened_editor_ID)
})




