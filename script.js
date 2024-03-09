let InputElement = document.getElementById('inputField');
let ClickButton = document.querySelector('.btn');
let ToDoElement = document.querySelector('.ToDoListElements');

const addToDo = () =>
{
    let ParagraphElement = document.createElement("p");
    ParagraphElement.textContent = InputElement.value;
    ToDoElement.append(ParagraphElement);

    InputElement.value = "";
}

ClickButton.addEventListener("click", () =>
{
    addToDo();
});

ToDoElement.addEventListener('click', () =>
{
    let CurrentElement = event.target;
    if(CurrentElement.classList.contains('ParaText') ) return;
    CurrentElement.remove();
});
