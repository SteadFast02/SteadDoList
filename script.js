const inputText= document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask()
{
    if(inputText.value==='')
    {
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputText.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputText.value="";
    SaveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }

},false)

function SaveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function ShowTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
ShowTask();