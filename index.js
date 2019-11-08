const contador = document.getElementById('contador')
const buttonAdd = document.getElementById('addList')
const buttonRemove = document.getElementById('removeList')
const buttonSaveUrl = document.getElementById('saveUrl')
const inputUrl = document.getElementById('inputUrl')
const ul = document.getElementById('list')
const inputValue = document.getElementById('inputValue')
const buttonReload = document.getElementById('reload')
var count = 0
var list = []
var url = ""

window.addEventListener("load", () => {
    loadPage()
    setValues(count, list, url)
})

function loadPage() {
    list = localStorage.getItem("list")
    count = localStorage.getItem("count")
    url = localStorage.getItem("url")
    if (count == null) count = 0
    if(contador) contador.textContent = count
    if (localStorage.getItem("list")) {
        var splits = localStorage.getItem("list").split(',', count)
    }
    if (url == null) url = "https://natura.atlassian.net/browse/"
    if (ul) ul.innerHTML = ""
    if (inputUrl) inputUrl.value = url
    for (let index = 0; index < localStorage.getItem("count"); index++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        li.innerHTML = index+1 + '- '
        li.appendChild(a)
        let att = document.createAttribute("href")
        let target = document.createAttribute("target")
        target.value = "_blank"
        att.value = url + splits[index]
        a.setAttributeNode(att)
        a.setAttributeNode(target)
        a.innerHTML = splits[index]
        ul.appendChild(li)
    }
}

function setValues(count, list, url) {
    localStorage.clear()
    let newCount = count
    let newList = list
    let newUrl = url

    localStorage.setItem("count", newCount)
    localStorage.setItem("list", newList)
    localStorage.setItem("url", newUrl)

    loadPage()
}

window.onload = function () {
    if(buttonAdd){
        buttonAdd.addEventListener('click', () => {
            var newList = []
            newCount = 0
            url = localStorage.getItem("url")
            let idx = localStorage.getItem("count")
            var splits = localStorage.getItem("list").split(',', idx)
            for (let index = 0; index < localStorage.getItem("count"); index++) {
                newCount++
                newList.push(splits[index])
            }
            newCount++
            newList.push(inputValue.value)
            setValues(newCount, newList, url)
        })
    }
    if(buttonRemove){
        buttonRemove.addEventListener('click', () => {
            var newList = []
            let idx = localStorage.getItem("count")
            newCount = idx
            url = localStorage.getItem("url")
            var splits = localStorage.getItem("list").split(',', idx)
            for (let index = 0; index < localStorage.getItem("count"); index++) {
                if (splits[index].replace(" ", "") != inputValue.value.replace(" ", "")) {
                    newList.push(splits[index])
                } else {
                    newCount--
                }
            }
            setValues(newCount, newList, url)
        })
    }
    if(buttonSaveUrl){
        buttonSaveUrl.addEventListener('click', () => {
            list = localStorage.getItem("list")
            count = localStorage.getItem("count")
            url = inputUrl.value
            setValues(count, list, url)
        })
    }

}