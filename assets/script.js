window.addEventListener('DOMContentLoaded', function(event) {

    let submit = document.querySelector('.btn');
    let result = document.querySelector('.result');

    submit.addEventListener('click', function(){

        
        // registram o número de cada resposta no quiz
        let A1 = document.querySelectorAll('input[value="A1"]:checked').length;
        let B1 = document.querySelectorAll('input[value="B1"]:checked').length;
        let C1 = document.querySelectorAll('input[value="C1"]:checked').length;

        let A2 = document.querySelectorAll('input[value="A2"]:checked').length;
        let B2 = document.querySelectorAll('input[value="B2"]:checked').length;
        let C2 = document.querySelectorAll('input[value="C2"]:checked').length;
        
        let resultadoY = (((C1*2)+(B1*1))*10);
        let resultadoX = (((A2*2)+(B2*1))*10);
        
        
         result.scrollIntoView({ behavior: 'smooth'});

         result.classList.remove('invisible');
         result.classList.add('visible');

         let ponto = document.querySelector('.position');

         ponto.style.right = `${resultadoX}%`;
         ponto.style.top = `${resultadoY}%`;

         

    });

});
