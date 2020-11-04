let fullScreener={

    ph : document.querySelector('.photoHolder'),

    fullScreenCheck(elm){
        if(elm.style.height === '90vh'){
            elm.style.height = '';
            elm.style.width = '';
            elm.style.position = '';
            elm.style.borderBottom = '';
            elm.style.border = '';
            elm.style.boxShadow = '';



        } else{
            elm.style.height = '90vh';
            elm.style.width = '60%';
            elm.style.position = 'absolute';
            elm.style.border = 'none';
            elm.style.zIndex = '100';
            elm.style.boxShadow = '1rem .5rem 1rem black';

        }
    }
}

fullScreener.ph.addEventListener('click',()=>{
    fullScreener.fullScreenCheck(fullScreener.ph);

})