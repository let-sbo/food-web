// INDEX HTML VERIABLES

const Nav= document.querySelectorAll("#nav");
const NavLinks= document.querySelectorAll("#links");
const remove = document.querySelectorAll('#remove')

// INDEX HTML EVENTOS
NavLinks.forEach(l=>{
    l.addEventListener('click',()=>{
        Nav.forEach(li=>{
            li.classList.toggle('active');
        })
    })
})
remove.forEach(a=>{
    a.addEventListener('click',()=>{
        Nav.forEach(n=>{
            n.classList.remove('active');
        })
    })
})



