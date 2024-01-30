const body = document.querySelector("body")
const buttons = document.querySelectorAll('.buttons')


buttons.forEach(function (button)  {
    button.addEventListener('click',function (e){
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'violet'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

    })
});