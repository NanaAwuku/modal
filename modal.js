const clickBtn= document.querySelector('.btn');
const closeBtn= document.querySelector('.close-btn');
const modalOverlay= document.querySelector('.modal-overlay');

clickBtn.addEventListener('click', function(){
    modalOverlay.classList.toggle('show');
});
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('show');
});

