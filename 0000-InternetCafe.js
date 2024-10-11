function toggleAnimation() {
    const radioButton = document.querySelector('.btnRadio');
    const images = document.querySelectorAll('.drink');
    
    radioButton.classList.toggle('checked');
    
    images.forEach(image => {
        image.classList.toggle('active');
    });
}