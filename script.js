function playSound(soundPath) {
    console.log('Playing sound:', soundPath);
    const audio = new Audio(soundPath);
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }
  
  function handleButtonClick() {
    const soundPath = this.getAttribute('data-sound');
    playSound(soundPath);
  }
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('active');
  }
  
  const drumButtons = document.querySelectorAll('.drum');
  drumButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if (button) {
      const soundPath = button.getAttribute('data-sound');
      playSound(soundPath);
      button.classList.add('active');
    }
  });
  