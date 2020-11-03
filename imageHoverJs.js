let imgHov = {

    photos: document.querySelectorAll('.photoSelections .photo'),
    backDrop : document.querySelector('.photoHolder'),
    backDropText : document.querySelector('.photoHolder h1'),
    // need all the photos in an array
    // if index is equal to 0-5 then either add a class list of one and so on

    photoArr : [],
    currentInd : 0,

    createPhotoArray(){
        this.photos.forEach(photo=>{
            this.photoArr.push(photo);
        })
    },

    setInd(e){
        this.currentInd = this.photoArr.indexOf(e);
    },

    
    createClasses(e){
        switch(this.currentInd){
            case 0:
                e.classList.add('one');
                e.classList.remove('two');
                e.classList.remove('three');
                e.classList.remove('four');
                e.classList.remove('five');
                e.classList.remove('six');


            break
            case 1:
                e.classList.add('two');
                e.classList.remove('one');
                e.classList.remove('three');
                e.classList.remove('four');
                e.classList.remove('five');
                e.classList.remove('six');

                
            break
            case 2:
                e.classList.add('three');
                e.classList.remove('one');
                e.classList.remove('two');
                e.classList.remove('four');
                e.classList.remove('five');
                e.classList.remove('six');

            break
            case 3:
                e.classList.add('four');
                e.classList.remove('two');
                e.classList.remove('three');
                e.classList.remove('one');
                e.classList.remove('five');
                e.classList.remove('six');

            break
            case 4:
                e.classList.add('five');
                e.classList.remove('two');
                e.classList.remove('three');
                e.classList.remove('four');
                e.classList.remove('one');
                e.classList.remove('six');

            break
            case 5:
                e.classList.add('six');
                e.classList.remove('two');
                e.classList.remove('three');
                e.classList.remove('four');
                e.classList.remove('five');
                e.classList.remove('one');

            break

        }
    },

    changeImgText(){
        switch(this.currentInd){
            case 0:
                this.backDropText.innerHTML = '1/12/2020 | ..Lake Beauty..'
            break
            case 1:
                this.backDropText.innerHTML = '4/21/2020 | ..Dock Duty..'

            break
            case 2:
                this.backDropText.innerHTML = '2/26/2020 | ..Clouded Head..'

            break
            case 3:
                this.backDropText.innerHTML = '7/12/2020 | ..Flowery Bed..'

            break
            case 4:
                this.backDropText.innerHTML = '2/9/2020 | ..Green Thumb..'

            break
            case 5:
                this.backDropText.innerHTML = '5/12/2019 | ..Autumn Fun..'

            break

        }
    }

}

imgHov.createPhotoArray();

imgHov.photos.forEach(p=>{
    p.addEventListener('mouseover',()=>{
        imgHov.setInd(p);
        imgHov.createClasses(imgHov.backDrop)
        imgHov.changeImgText(imgHov.backDropText)
    })
})