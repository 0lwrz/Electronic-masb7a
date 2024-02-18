
const buttons = document.querySelectorAll('button');
const result = document.querySelectorAll('span');
const counter=[0,0,0,0];
for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=(e)=>{
        e.preventDefault();
        counter[i]++;
        result[i].textContent=counter[i];
    }
}
const rest = document.querySelectorAll(".rest");
for (let i=0;i<rest.length;i++){
    rest[i].onclick=function(e){
e.preventDefault();
counter[i]=0;
result[i].textContent=counter[i];
    }
}