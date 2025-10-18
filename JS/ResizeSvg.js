var mobileDevice, mediumDevice, mediumBigDevice, bigDevice;

const deviceSize = [mobileDevice, mediumDevice, mediumBigDevice, bigDevice];

const arrow = document.getElementById('arrow');


window.addEventListener('load' , () => {
    mobileDevice = window.innerWidth < 768 ? 1 : 0;
    mediumDevice = window.innerWidth >= 768 ? 1 : 0;
    mediumBigDevice = window.innerWidth >= 1024 ? 1 : 0;
    bigDevice = window.innerWidth >= 1440 ? 1 : 0;

    
    console.log(mobileDevice+', '+mediumDevice+', '+mediumBigDevice+', '+bigDevice);

    if(mobileDevice) {
        console.log('mobile');
        arrow.setAttribute('viewBox', '-4 -4 28 28');
    } else if(mediumDevice) {
        console.log('medium');
        arrow.setAttribute('viewBox', '-4 -6 28 28');
    }

    console.log('fuori switch');
})

window.addEventListener('resize', () => {

    mobileDevice = window.innerWidth < 768 ? 1 : 0;
    mediumDevice = window.innerWidth >= 768 ? 1 : 0;
    mediumBigDevice = window.innerWidth >= 1024 ? 1 : 0;
    bigDevice = window.innerWidth >= 1440 ? 1 : 0;

    
    console.log(mobileDevice+', '+mediumDevice+', '+mediumBigDevice+', '+bigDevice);

    if(mobileDevice) {
        console.log('mobile');
        arrow.setAttribute('viewBox', '-4 -4 28 28');
    } else if(mediumDevice) {
        console.log('medium');
        arrow.setAttribute('viewBox', '-4 -6 28 28');
    }

    console.log('fuori switch');
})


