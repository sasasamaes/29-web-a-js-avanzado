const d = document;

// CAPTURAR LOS ELEMENTOS DE HTML CON JAVASCRIPT
let app = d.querySelector(".app");

let input_todo = d.getElementById("input-todo");
let btn_add = d.getElementById("btn-add");
let content_w = d.getElementById("content-wrapper");

const url = "http://localhost:3000/data"

// FUNCION QUE CREA ELEMENTOS PARA LA LISTA DE TAREAS DE FORMA DINAMICA
function printTask(task) {
  let li = document.createElement("li");
  let p = document.createElement("p");
  let taskText = document.createTextNode(task);
  let div = document.createElement("div");

  let btn_1 = document.createElement("button");
  let btn_2 = document.createElement("button");
  let btn1Text = document.createTextNode("Editar");
  let btn2Text = document.createTextNode("Eliminar");

  btn_1.classList.add("btn-edit");
  btn_2.classList.add("btn-delete");

  btn_1.addEventListener("click", function () {
    alert("Editando...");
  });

  btn_2.addEventListener("click", function () {
    alert("Eliminando...");
  });

  p.appendChild(taskText);
  btn_1.appendChild(btn1Text);
  btn_2.appendChild(btn2Text);

  div.append(btn_1, btn_2);
  li.append(p, div);

  content_w.appendChild(li);
};

// FUNCION QUE OBTIENE DATOS DE LA API DE PRUEBAS
function getData() {
  // fetch(url)
}

printTask("Limpiar mi cuarto");