var elementosDuvida = document.querySelectorAll('.duvidas')

    elementosDuvida.forEach(function (duvida) {
       duvida.addEventListener('click' , function () {
       duvida.classList.toggle('ativa')
    })
})



// 