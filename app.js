const veg_form = document.querySelector('#form')
const basket = []

function Veg(type, color, taste) {
    this.type = type
    this.color = color
    this.taste = taste
}

let vegetable = new Veg('spring onion', 'white', true)

function addVegToBasket(e) {
    e.preventDefault()
    let new_veg = new Veg(e.target.elements.veg.value, e.target.elements.color.value, confirmTaste())
    
    function confirmTaste() {
        if (e.target.elements.selection.value === 'y') {
        
            return e.target.elements.selection.value = true

        } else if (e.target.elements.selection.value === 'n') {
         
            return e.target.elements.selection.value = false
        }
    }
    basket.push(new_veg)
}

function clearForm(e) {
    e.preventDefault()
    e.target.elements.veg.value = ''
    e.target.elements.color.value = ''
    document.querySelectorAll('input')[2].checked = false
    document.querySelectorAll('input')[3].checked = false
}

function displayBasket() {
    let html = ''
    let tbody = document.querySelector('tbody')
    for (let i = 0; i < basket.length; i++) {
        html += `
        <tr>
        <td>${basket[i].type}</td>
        <td>${basket[i].color}</td>
        <td>${basket[i].taste}</td>
        <td><button class="button">Delete</button></td>
        </tr>`
        
    }
    tbody.innerHTML = html   
}

// associate DOM elements with basket array
function applyDataSet() {
    let rows = document.querySelectorAll('tr')
    for (let i = 0; i < rows.length; i++){
        rows[i].dataset.index = i
        console.log(rows[i].dataset)
    }
}

function deleteRow() {
    let buttons = document.querySelectorAll('button')

    // start from the second button as the first button adds the new Rows!
    for (let i = 1; i < buttons.length; i++){
        buttons[i].addEventListener('click', deleteButton)
    }
    function deleteButton() {
        let row = document.querySelectorAll('tr')[0].remove()
    }
    
}

function deleteFromArray() {
    for (let i = 0; i < basket.length; i++) {
        basket.splice(parseInt(document.querySelectorAll('tr')[0].dataset.index),1)
        }
}

veg_form.addEventListener('submit', addVegToBasket)
veg_form.addEventListener('submit', clearForm)
veg_form.addEventListener('submit', displayBasket)
veg_form.addEventListener('submit', applyDataSet)
veg_form.addEventListener('submit', deleteRow)