let bars = document.querySelector('#bars')
let x = document.querySelector('#x')
    // document.body.onclick = () => {
    //     navbar.classList.toggle('active')
    //     x.classList.toggle('active')
    //     console.log('Navbar is active')
    //     bars.style.display = 'none'
    // }
bars.onclick = () => {
    navbar.classList.toggle('active')
        // x.classList.toggle('active')
        // console.log('Navbar is active')
    bars.style.display = 'none'
    x.style.display = 'block'

    let btn = document.createElement("button");

    btn.innerHTML = 'Get Started'

    btn.setAttribute('class', 'btn')
    document.getElementById('navbar').appendChild(btn)
}
x.onclick = () => {
    navbar.classList.remove('active')
        // x.classList.toggle('active')
        // console.log('Navbar is active')
    x.style.display = 'none'
    bars.style.display = 'block'

    function myFunction() {
        const list = document.getElementById("navbar");
        list.removeChild(list.lastElementChild);
    }
    myFunction()
}