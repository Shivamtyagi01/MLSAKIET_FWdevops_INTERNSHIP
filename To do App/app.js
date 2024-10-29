let btn1 = document.querySelector("#btn1");
let u = document.querySelector("ul");

btn1.addEventListener("click", () =>{
    let inp = document.querySelector("#task");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    li.innerText = inp.value;
    li.append(btn);
    u.append(li);
    li.className = "tas";
})


u.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
        event.target.parentElement.remove();
    }
})
