const list = document.querySelectorAll('.list')

function activeLink(){
    list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active')
        console.log(this)
}

list.forEach((item)=>
    item.addEventListener('click',activeLink))