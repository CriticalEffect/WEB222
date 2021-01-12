function handleContactFormType() {
  const options = document.getElementsByClassName('form-type');
  for (let i = 0; i < options.length; ++i) {
    options[i].addEventListener('change', function(e) {
      const orderNoDOM = document.getElementById('contactus-orderno-box');
      const val = e.target.value;
      if (val === 'order-problem') {
        orderNoDOM.style.display = 'block';
      } else {
        orderNoDOM.style.display = 'none';
      }
    })
  }
};

handleContactFormType();