// function add() {
//     const input = document.querySelector("input")
//     const ul = document.querySelector("ul")
//     const li = document.createElement("li")
//     const tarefas = []
//     tarefas.push(input.value)
//     input.value = ""
//     ul.appendChild(li)
//     li.innerText = tarefas
// }

// addEventListener("keyup", (event) => {
//     if (event.key === "Enter") {
//         add();
//     }

// });


function add() {
    const input = document.querySelector("input")
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const teopai = input.value
    ul.appendChild(li)
    li.innerText = teopai
}