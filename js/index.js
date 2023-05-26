let inpNeeds = document.querySelectorAll('.myBlue input')
let allInps = document.querySelectorAll('form input')
let form = document.forms.reg
let bts = document.querySelector('.submit')
let spiner = document.querySelector('.lds-spinner')
let span = document.querySelector('.num')
let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^998[012345789][0-9]{8}$/g,
    dad: /^[a-z ,.'-]+$/i,
    mom: /^[a-z ,.'-]+$/i,
    aboutYou: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    favouriteCar: /^[a-z ,.'-]+$/i,
    email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    age: /^(?=.*[0-9])/,
}
function validate(regex, field) {   
    if (regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
        field.parentElement.classList.add('invalid')
    }
}
allInps.forEach(inp => {
    inp.onkeyup = () => {
        validate(pattern[inp.name], inp)
    }
})
form.onsubmit = (event) => {
    event.preventDefault()
    let countErrs = 0
    bts.classList.add('loading');
    setTimeout(function () {
        bts.classList.remove('loading');
  inpNeeds.forEach(inp => {
        if (inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
            inp.parentElement.classList.add('invalid')
            countErrs++
        } else {
            inp.parentElement.classList.remove('invalid')
        }
    }
    );
    if (countErrs > 0) {
        console.log('Error')
    } else {
        submit(form)
    }
    }, 600)
}

function submit(formElement) {
    let user = {}
    let fm = new FormData(formElement)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}

















// let form_login = document.forms.login

// let err = document.querySelector(".error")

// let inputs = document.querySelector('.inputs')

// form_login.onsubmit = (event) => {
//     event.preventDefault()

//     let user = {}

//     let fm = new FormData(form_login)

//     fm.forEach((value, key) => {
//         user[key] = value
//     })

//     if (user.name && user.age && user.password) {
//         console.log(user);
//     } else {
//         console.log('pashol');
//     }
// }


