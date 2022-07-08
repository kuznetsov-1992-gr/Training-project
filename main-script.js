const scillsProgram = document.querySelectorAll('.skills__program');
const menuToggle = document.querySelector('#menu-toggle');
const menuAnchor = document.querySelectorAll('.menu__anchor')


menuAnchor.forEach(anchor => {
    anchor.addEventListener('click', ()=>{
        menuToggle.checked = false;

    })
})

scillsProgram.forEach(program =>{
    program.addEventListener('mouseover', (e)=>{
        
        let starblock = program.querySelectorAll('.skills__star');
        starblock.forEach(star => {
            if(star.classList.length === 1){
                star.style.fill = 'gold'
            }else{
                star.style.fill = 'silver'
            }

          
        });

    });

    program.addEventListener('mouseout', (e) => {
        let starblock = program.querySelectorAll('.skills__star');
        starblock.forEach(star => {

            
            
            if(star.classList.length === 1){
                star.style.fill = '#070707'
            }else{
                star.style.fill = '#E5E5E5'
            }
        })
    })
});



