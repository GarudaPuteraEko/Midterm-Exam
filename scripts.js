  const buttons = document.querySelectorAll('button, .cta');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  });
  
const getAccessButton = document.querySelector('.cta');

if (getAccessButton) {
  getAccessButton.addEventListener('mouseover', function () {
    this.style.opacity = 0.5; // Make it semi-transparent
  });

  getAccessButton.addEventListener('mouseout', function () {
    this.style.opacity = 1; // Reset to full opacity
  });
}