const span = document.getElementById('spanJ')
const button = document.getElementById('addList')
const saveUrl = document.getElementById('saveUrl')
const inputUrl = document.getElementById('inputUrl')
const list = document.getElementById('list')
var arrayList = []
var count = 0
str_count = localStorage.getItem("count")

if (str_count == null || str_count == "null") {
    count = 0
} else {
    count = parseInt(str_count)
}

window.addEventListener("load", (event) => {
    event.preventDefault()
    span.textContent = localStorage.getItem("count")
    var splits = localStorage.getItem("list").split(',', localStorage.getItem("count"))
    inputUrl.value = localStorage.getItem("url")
    for (let index = 0; index < localStorage.getItem("count"); index++) {
        
        //create function
        let li = document.createElement("li")
        let a = document.createElement("a")
        li.appendChild(a)
        var att = document.createAttribute("href")
        var target = document.createAttribute("target")
        target.value = "_blank"
        att.value = inputUrl.value + splits[index]
        a.setAttributeNode(att)
        a.setAttributeNode(target)
        a.innerHTML = splits[index]
        list.appendChild(li)
        arrayList.push(splits[index])
        
    }
});

saveUrl.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.setItem("url", inputUrl.value)
})

button.addEventListener('click', (event) => {
    arrayList.push(document.getElementById('inputValue').value)
    event.preventDefault()
    count++
    localStorage.setItem("count", count)
    localStorage.setItem("list", arrayList)
    span.textContent = localStorage.getItem("count")
    span.style.color = random_rgba()
    
    //create function
    let li = document.createElement("li")
    let a = document.createElement("a")
    li.appendChild(a)
    var att = document.createAttribute("href")
    var target = document.createAttribute("target")
    target.value = "_blank"
    att.value = inputUrl.value + document.getElementById('inputValue').value
    a.setAttributeNode(att)
    a.setAttributeNode(target)
    a.innerHTML = document.getElementById('inputValue').value
    list.appendChild(li)

});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s)
}