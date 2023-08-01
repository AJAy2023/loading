 const accordian =document.querySelectorAll('.accordian');

 accordian.forEach(e =>{
    const icon = e.querySelector('.icon');
    const answer = e.querySelector('.answer');


    icon.addEventListener('click',() =>{
       
        if(icon.classList.toggle('active')){
            // icon.classList.remove('active');
            answer.style.maxHeight = null;

        } else{
            icon.classList.remove('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })

 })

