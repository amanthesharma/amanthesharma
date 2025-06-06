// grab elements
const hero   = document.querySelector('.hero');
const playBtn= document.querySelector('.play-btn');
const video  = document.getElementById('intro-video');

playBtn.addEventListener('click', () => {
  // if stopped or paused, play — otherwise pause
  if (video.paused || video.ended) {
    video.play();
    video.controls = true;          // show native controls
    hero.classList.add('playing');  // fade out your overlay
    playBtn.textContent = '❚❚ Pause';
  } else {
    video.pause();
  }
});

video.addEventListener('pause', () => {
  hero.classList.remove('playing');
  video.controls = false;
  playBtn.textContent = '▶ Play';
});

video.addEventListener('ended', () => {
  hero.classList.remove('playing');
  video.controls = false;
  playBtn.textContent = '▶ Play';
});
