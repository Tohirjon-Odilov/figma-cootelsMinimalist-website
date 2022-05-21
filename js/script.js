let bars = document.querySelector('#bars')
let navbar = document.querySelector('#navbar')

bars.onclick = () => {
    navbar.classList.toggle('active')
    console.log('salom')
}