let bar = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let changecolor = document.querySelector('#changecolor');
let search = document.querySelector('.fa-search');
let search1 = document.querySelector('#search');

bar.addEventListener('click',function(e) {
    if (e.target.classList == 'fas fa-bars') {
        navbar.classList.add('active');
        bar.classList.replace('fa-bars','fa-times')
    }else if (e.target.classList == 'fas fa-times'){
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
})

changecolor.addEventListener('click',function(e) {
    if (e.target.classList == 'fas fa-moon'){
        document.body.classList.add('active');
        changecolor.classList.replace('fa-moon','fa-sun')
    }else if (e.target.classList == 'fas fa-sun'){
        document.body.classList.remove('active');
        changecolor.classList.replace('fa-sun','fa-moon')
    }
})

navbar.addEventListener('click',function(e) {
    if (e.target.classList == 'link') {
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
})

search.addEventListener('click',function(e) {
    search1.classList.add('active')
})

document.querySelector('#cancel').addEventListener('click',function() {
    search1.classList.remove('active')
})

window.onscroll = (e) => {
    navbar.classList.remove('active');
    bar.classList.replace('fa-times','fa-bars')
}

window.onresize = () => {
    if (window.innerWidth >= 750) {
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
}