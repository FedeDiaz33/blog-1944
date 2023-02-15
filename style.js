
// when the scroll button is clicked, scroll down 2000 pixels
scrollButton.onclick = function () {
  scrollTo(document.body, {
    top: 2000,
    duration: 1000,
    easing: 'ease-out',
  }).then(function () {
    console.log('finished scrolling!');
  });
};