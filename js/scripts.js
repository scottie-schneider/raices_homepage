// select the floating button in the user interface 
const floatingBTN = document.querySelector('.footerBtn');
// attach an event listener 
floatingBTN.addEventListener('click', e => {
  // select the footer
  const footer = document.querySelector('.footer');
  // add the active class to the footer 
  if(footer.classList.contains('active')) {
    footer.classList.remove('active')
    // return the original text
    e.target.innerText = 'Terms, Privacy, Currency & more'
  } else {
    footer.classList.add('active')
    // add the close text
    e.target.innerText = "X Close"
  }
  
})