let ul=document.getElementById("list");
let userinput=document.getElementById("input");
let button=document.getElementById("enterbutton");
function create(){
    let li=document.createElement("li");
    li.innerHTML=userinput.value;
    ul.appendChild(li);
    userinput.value="";
}
button.addEventListener("click",function(){
        if(userinput.value.length>0){
            create();
        }
    })

    userinput.addEventListener("keypress",function(event){

        if(userinput.value.length>0 && event.keyCode===13){
                 create();
             }
         })
     
     
     
     