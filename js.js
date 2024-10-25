let box = document.querySelector('.burger__box')
let ul = document.querySelector('.header__nav ul')
let btn = document.querySelector('.header__nav button')
let burger = document.querySelector('.burger')

let toggleBurger = ()=>{
    box.classList.toggle('active')
    ul.classList.toggle('active')
    btn.classList.toggle('active')
    burger.classList.toggle('active')

}
