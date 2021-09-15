// UI
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message one',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
];


// button.addEventListener('click',()=>createnotification());
button.addEventListener('click',()=>createnotification('Can\'t access!', 'success'));
// button.addEventListener('click',()=>createnotification('Can\'t access!'));



function createnotification(message,type){
    // console.log('hay');

    
    // const notify = document.createElement('div');
    // notify.classList.add('toast');
    // notify.innerText = getrandommessage();
    // // console.log(notify);

    // toasts.appendChild(notify);

    
    // setTimeout(()=>{
    //     notify.remove();
    // },3000);

    
    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : 'success');
    notify.innerText = message ? message : getrandommessage();
    // console.log(notify);

    toasts.appendChild(notify);

    
    setTimeout(()=>{
        notify.remove();
    },3000);
    
    
}

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];

};
// console.log(getrandommessage());


