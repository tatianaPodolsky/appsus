import utilService from './util-service.js'
import storageService from './storage-service.js'
export default {
    getMails,getMailById,gMails
}
var date = Date.now()
var gMails = [
    {id:utilService.makeId(),name:'Danny',subject:'Cats',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Tai',subject:'Dogs',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Tai',subject:'Dogs',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Tai',subject:'Dogs',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Tai',subject:'Dogs',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Tai',subject:'Dogs',body:'lorem ipsum',time:date,isRead:false},
    {id:utilService.makeId(),name:'Mor',subject:'Bird',body:'lorem ipsum',time:date,isRead:false}
];
function getMailById(id){
   return gMails.find((mail)=>{
        return mail.id ===id
    })
}
function getMails(){
    if(!storageService.load('mails')) storageService.store('mails',gMails)
    else{
        gMails = storageService.load('mails')
    }  
    return  Promise.resolve(gMails)
}





