const buttons = document.querySelectorAll('.square');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    switch (event.target.id) {
      case 'red':
        body.style.backgroundColor = event.target.id;
        break;
      case 'green':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break;
    }
  });
});
