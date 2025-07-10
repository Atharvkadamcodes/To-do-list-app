let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log(item.innerText);
    inp.value = "";
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    item.appendChild(delbtn);
});

ul.addEventListener("click", function (event){
    if(event.target.nodeName == "BUTTON");{
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
