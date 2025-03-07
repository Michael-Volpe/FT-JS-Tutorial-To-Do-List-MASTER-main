const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list  = document.getElementById("list");

function addToDo(toDo) {
    const text = `<li class="item">
        <i class="co fa fa-circle thin" job="complete"></i>
        <p class="text"> ${toDo} </p>
        <i class="de fa fa-trash-o" job="delete"></i>
    </li>`
}

//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Shows todays date
const options = {weekday: "long", month:"short", day:"numeric"};
const today = new Date();
dateElements.innerHTML = today.toLocaleDateString("en-US", options);


const position = "beforeend";

list.insertAdjacentHTML(position,text);

const input = document.getElementById("input");

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo,id, false, false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                }
            );
            input.value = "";
            id++;
        }
    }
});

