const span = document.getElementById('contador')
const button = document.getElementById('addList')
const saveUrl = document.getElementById('saveUrl')
const inputUrl = document.getElementById('inputUrl')
const list = document.getElementById('list')
const inputValue = document.getElementById('inputValue')
var arrayList = []
var count = 0
str_count = localStorage.getItem("count")

if (str_count == null || str_count == "null") count = 0
else count = parseInt(str_count)

//Carrega as informações no reload
window.addEventListener("load", (event) => {

    event.preventDefault()

    //Inicializa contador a cada reload
    span.textContent = localStorage.getItem("count")

    //Inicializa os Jiras salvos
    var splits = localStorage.getItem("list").split(',', localStorage.getItem("count"))
    for (let index = 0; index < localStorage.getItem("count"); index++) {
      createLi(splits[index])
      arrayList.push(splits[index])
    }

    //Inicializa a URL setada
    inputUrl.value = localStorage.getItem("url")

});

//Salva URL que sera concatenada
saveUrl.addEventListener('click', (event) => {

    event.preventDefault()
    localStorage.setItem("url", inputUrl.value)

})

//Adiciona o contador e a LI criada
button.addEventListener('click', (event) => {

  event.preventDefault()
  count++

  arrayList.push(inputValue.value)

  localStorage.setItem("count", count)
  localStorage.setItem("list", arrayList)
  
  span.textContent = localStorage.getItem("count")
  span.style.color = random_rgba()
  
  createLi(null)

});

//Monta as LIs
function createLi(value) {

  if (value == null) value = inputValue.value

  let li = document.createElement("li")
  let a = document.createElement("a")

  li.appendChild(a)

  var att = document.createAttribute("href")
  var target = document.createAttribute("target")

  target.value = "_blank"
  att.value = inputUrl.value + value

  a.setAttributeNode(att)
  a.setAttributeNode(target)
  a.innerHTML = value

  list.appendChild(li)

}

//Colore os links e o contador
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s)
}