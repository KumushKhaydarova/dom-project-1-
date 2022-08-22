let button_1 = document.querySelector('.button_1')
let button_2 = document.querySelector('.button_2')
let button_3 = document.querySelector('.button_3')
let button_4 = document.querySelector('.button_4')
let button_5 = document.querySelector('.button_5')
let button_6 = document.querySelector('.button_6')
let main = document.querySelector('.main_image')
let span = document.querySelector('.change_text')
let on_enter = document.querySelector('.on_enter')
button_1.onclick = () => {
    main.setAttribute('src', './images/blue_iphone.jpg')
} 
button_2.onclick = () => {
    main.setAttribute('src', './images/green_iphone.jpg')
}
button_3.onclick = () => {
    main.setAttribute('src', './images/midnight_iphone.jpg')
}
button_4.onclick = () => {
    main.setAttribute('src', './images/pink_iphone.jpg')
}
button_5.onclick = () => {
    main.setAttribute('src', './images/red_iphone.jpg')
}
button_6.onclick = () => {
    main.setAttribute('src', './images/starlight_iphone.jpg')
}
 
button_1.onmouseenter = () => {
    span.innerHTML = 'blue'
    
} 
button_1.onmouseleave = () => {
    span.innerHTML = 'color'
}
button_2.onmouseenter = () => {
    span.innerHTML = 'green'
}
button_2.onmouseleave = () => {
    span.innerHTML = 'color'
}
button_3.onmouseenter = () => {
    span.innerHTML = 'midnight'
}
button_3.onmouseleave = () => {
    span.innerHTML = 'color'
}
button_4.onmouseenter = () => {
    span.innerHTML = 'pink'
}
button_4.onmouseleave = () => {
    span.innerHTML = 'color'
}
button_5.onmouseenter = () => {
    span.innerHTML = 'red'
}
button_5.onmouseleave = () => {
    span.innerHTML = 'color'
}
button_6.onmouseenter = () => {
    span.innerHTML = 'starlight'
}
button_6.onmouseleave = () => {
    span.innerHTML = 'color'
}

let button_hov = document.querySelector('.btn')
button_hov.onclick = () => {
    console.log('nahs')
}


