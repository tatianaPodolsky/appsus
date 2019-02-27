import storageService from '../services/storage-service.js';
import utilService from '../services/util-service.js';


export default {
    query,

}

var gNotes = [
    {
        type: 'text',
        content: 'My wish list: peace and love',
        style: {
            bColor: 'pink',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date()
    },
    {
        type: 'img',
        content: '../img/demo-keep.png',
        style: {
            bColor: 'blue',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date()
    },
    {
        type: 'todo',
        content: [{txt: 'To do this', done: false}, {txt: 'To do that as well', done: true}],
        style: {
            bColor: 'green',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date()
    }
];

function query() {
    if (storageService.load('notes')) gNotes = storageService.load('notes');
    else storageService.store('notes', gNotes)
    return Promise.resolve(gNotes);
}


