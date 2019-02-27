export default {
    getMails
}

var gMails = [
    {name:'Danny',subject:'Cats',title:'The big cat',body:'lorem ipsum'},
    {name:'Tai',subject:'Dogs',title:'The small puppy',body:'lorem ipsum'},
    {name:'Mor',subject:'Bird',title:'The tiny bird',body:'lorem ipsum'}
];

function getMails(){
    return  Promise.resolve(gMails)
}





