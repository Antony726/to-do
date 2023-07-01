const inputbox = document.getElementById("input-box");
const listcont = document.getElementById("list-container");

function AddTSK(){
    if(inputbox.value ===''){
        alert('You must write something!!!');

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}

listcont.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data",listcont.innerHTML);

}

function showtsk(){
    listcont.innerHTML = localStorage.getItem("data");

}
showtsk();