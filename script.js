let clickBtn = document.querySelector('.Click')
let content = document.querySelector('.content')

clickBtn.addEventListener('click', function() {
    var audio = new Audio(); 
    audio.src = 'click.mp3'; 
    audio.autoplay = true; 
    audio.loop = true; //
    clickBtn.style.display = 'none'; //
    content.style.display = 'block'; 
    console.log('click')
});