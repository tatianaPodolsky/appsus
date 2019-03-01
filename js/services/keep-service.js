import storageService from '../services/storage-service.js';
import utilService from '../services/util-service.js';


export default {
    query,
    addNote,
    removeNote,
    updateNote,
    copyNote
}

var gNotes = [
    {
        type: 'textNote',
        content: 'My wish list: peace and love',
        style: {
            bColor: 'lightcyan',
        },
        pinned: true,
        id: utilService.makeId(),
        date: new Date(),
        isEditing: false
    },
    {
        type: 'imgNote',
        content: './img/demo-keep.png',
        style: {
            bColor: 'lightpink',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date(),
        isEditing: false
    },
    {
        type: 'todoNote',
        content: [{txt: 'To do this', done: false}, {txt: 'To do that as well', done: true}],
        style: {
            bColor: 'lightgreen',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date(),
        isEditing: false
    }
];

function query() {
    if (storageService.load('notes')) gNotes = storageService.load('notes');
    else storageService.store('notes', gNotes)
    return Promise.resolve(gNotes);
}
function addNote(type, content) {
    var newNote = _createNote(type, content);
    gNotes.push(newNote);
    storageService.store('notes', gNotes);
}
function copyNote(noteToCopy) {
    console.log('noteToCopy', noteToCopy);
    var coppiedNote = {
        type: noteToCopy.type, 
        content: noteToCopy.content, 
        style: noteToCopy.style, 
        pinned: noteToCopy.pinned, 
        id: utilService.makeId(), 
        date: new Date(),
        isEditing: false};
    gNotes.push(coppiedNote);
    storageService.store('notes', gNotes);
}
function removeNote(noteToRemove) {
    var noteIdx = gNotes.findIndex(note => note.id === noteToRemove.id)
    gNotes.splice(noteIdx, 1);
    storageService.store('notes', gNotes);
    return Promise.resolve();
}
function updateNote(noteToUpdate) {
    // debugger
    var noteIdx = gNotes.findIndex(note => note.id === noteToUpdate.id)
    gNotes.splice(noteIdx, 1, noteToUpdate);
    storageService.store('notes', gNotes);
    return Promise.resolve();
}
function _createNote(type, content) {
    var formattedContent;
    if(type === 'todoNote') {
    formattedContent = content.split(',').map(el => {
            var todoList = {txt: el, done: false};
            return todoList
        })
    } else formattedContent = content;
    
    var backColor;
    switch(type) {
        case 'textNote':
            backColor = 'lightcyan';
            break;
        case 'imgNote':
            backColor = 'lightpink';
            break;
        case 'todoNote':
            backColor = 'lightgreen';
            break;

    }
    return {
        type: type,
        content: formattedContent,
        style: {
            bColor: backColor
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date(),
        isEditing: false
    }
}

