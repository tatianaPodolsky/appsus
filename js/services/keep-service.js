import storageService from '../services/storage-service.js';
import utilService from '../services/util-service.js';


export default {
    query,

}

var gNotes = [
    {
        type: 'textNote',
        content: 'My wish list: peace and love',
        style: {
            bColor: 'lightcyan',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date()
    },
    {
        type: 'imgNote',
        content: './img/demo-keep.png',
        style: {
            bColor: 'lightpink',
        },
        pinned: false,
        id: utilService.makeId(),
        date: new Date()
    },
    {
        type: 'todoNote',
        content: [{txt: 'To do this', done: false}, {txt: 'To do that as well', done: true}],
        style: {
            bColor: 'lightgreen',
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


