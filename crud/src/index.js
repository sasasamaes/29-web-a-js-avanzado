const { v4: uuidv4 } = require('uuid')

console.log("UUID:", uuidv4())

const d = document

// CAPTURAR LOS ELEMENTOS DE HTML CON JAVASCRIPT
let app = d.querySelector(".app")

let input_todo = d.getElementById("input-todo")
let btn_add = d.getElementById("btn-add")
let content_w = d.getElementById("content-wrapper")

const url = "http://localhost:3000/data"

// FUNCION QUE CREA ELEMENTOS PARA LA LISTA DE TAREAS DE FORMA DINAMICA
function printTask(id, task) {
  let li = document.createElement("li")
  let p = document.createElement("p")
  let taskText = document.createTextNode(task)
  let div = document.createElement("div")

  let btn_1 = document.createElement("button")
  let btn_2 = document.createElement("button")
  let btn1Text = document.createTextNode("Editar")
  let btn2Text = document.createTextNode("Eliminar")

  btn_1.classList.add("btn-edit")
  btn_2.classList.add("btn-delete")

  btn_1.addEventListener("click", function () {
    putData(id, input_todo.value)
  })

  btn_2.addEventListener("click", function () {
    deleteData(id)
  })

  p.appendChild(taskText)
  btn_1.appendChild(btn1Text)
  btn_2.appendChild(btn2Text)

  div.append(btn_1, btn_2)
  li.append(p, div)

  content_w.appendChild(li)
}

// FUNCION QUE OBTIENE DATOS DE LA API DE PRUEBAS
async function getData() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    data.forEach(element => {
      printTask(element.id, element.task)
    })

  } catch (error) {
    console.error(error)
  }
}

// FUNCION QUE ENVIA DATOS A LA API DE PRUEBAS
async function postData(task) {
  try {

    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: uuidv4(),
        task: task
      })
    })

  } catch (error) {
    console.error(error)
  }
}

// FUNCION QUE ACTUALIZA DATOS DE LA API DE PRUEBAS
async function putData(id, task) {
  try {

    const request = await fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task: task
      })
    })

  } catch (error) {
    console.error(error)
  }
}

// FUNCION QUE ELIMINA DATOS DE LA API DE PRUEBAS
async function deleteData(id) {
  try {
    const request = await fetch(url + "/" + id, {
      method: "DELETE",
    })
  } catch (error) {
    console.error(error)
  }
}

//CARGA LOS DATOS DE LA API DE PRUEBAS AL MOMENTO DE CARGAR EL SITIO WEB EN EL NAVEGADOR
document.addEventListener("DOMContentLoaded", getData)

// LOGICA DEL BOTON DE AÑADIR UNA TAREA
btn_add.addEventListener("click", function () {
  postData(input_todo.value)
})