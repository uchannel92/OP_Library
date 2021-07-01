const veg_form = document.querySelector('#form')
const basket = []

function Veg(type, color, taste) {
    this.type = type
    this.color = color
    this.taste = taste
    this.changeStatus = function () {
        if (this.taste === 'true') {
            alert('this works!')
            return 'Yes'
        } else {
            return 'No';
        }
    }
    
}

// let vegetable = new Veg('spring onion', 'white', true)

function addVegToBasket(e) {
    e.preventDefault()
    let new_veg = new Veg(e.target.elements.veg.value, e.target.elements.color.value, e.target.elements.selection.value)
    veg_form.addEventListener('submit', new_veg.changeStatus)
    console.log(e);
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
        <td class="change">${basket[i].changeStatus()}<br><span></span></td>
        <td><button class="button">Delete</button></td>
        </tr>`
        
    }
    tbody.innerHTML = html   
}

// associate DOM elements with basket array
function applyDataIndex() {
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
}

function deleteButton(e) {
    let row = e.target.parentNode.parentNode
    let index = e.target.parentNode.parentNode.dataset.index

    row.remove()
    basket.splice(index, 1)
    console.log(basket);

    // grabs the target node
    console.log(parseInt(e.target.parentNode.parentNode.dataset.index));
} 

veg_form.addEventListener('submit', addVegToBasket)
veg_form.addEventListener('submit', clearForm)
veg_form.addEventListener('submit', displayBasket)
veg_form.addEventListener('submit', applyDataIndex)
veg_form.addEventListener('submit', deleteRow)


// let input = document.querySelectorAll('.change')

// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('click', function (params) {
//         input[i].innerText = 'True'
//     })
// }