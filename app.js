const inp=document.querySelector('#inp');
const button=document.querySelector('#btn');
// const button2=document.querySelector('#btn2');
const list=document.querySelector('#list');

button.addEventListener('click',()=>{
    const inputvalue=inp.value;
    const li=document.createElement('li');
    const Removebuton=document.createElement('button');
    Removebuton.innerText='remove';
    li.innerText=inputvalue;
    li.append(Removebuton);
    list.append(li);
     inp.value='';
     li.addEventListener('click',()=>{
        li.remove();
     })
   
});

// button2.addEventListener('click',()=>{
   //    li.remove();
   // })