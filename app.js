const veg_form = document.querySelector('#form')
const basket = []

function Plants() {

}

function Veg(type, color, taste) {
    this.type = type
    this.color = color
    this.taste = taste
}

Veg.prototype = Object.create(Plants.prototype)

let vegetable = new Veg('spring onion', 'white', true)

function createVegObject(e) {
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
}

function displayBasket() {
    let html = ''
    let tbody = document.querySelector('tbody')
    for (let i = 0; i < basket.length; i++) {
        html += `
        <tr data-type="${i}">
        <td>${basket[i].type}</td>
        <td>${basket[i].color}</td>
        <td>${basket[i].taste}</td>
        <td><button class="button">Delete</button></td>
        </tr>`
        
    }
    tbody.innerHTML = html   
}
    
veg_form.addEventListener('submit', createVegObject)
veg_form.addEventListener('submit', clearForm)
veg_form.addEventListener('submit', displayBasket)