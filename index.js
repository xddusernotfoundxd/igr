let cvad = document.querySelectorAll('.cvad')
cvad.forEach(cvad => {
    cvad.addEventListener('click', () => {
        cvad.classList.toggle('dis')
        cvad.style.backgroundColor = 'white'
    })
})