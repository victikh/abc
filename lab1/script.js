document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.form-container');
    var nameInput = document.getElementById('name');
    var addressInput = document.getElementById('address');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (
        !nameInput.value ||
        !addressInput.value ||
        !phoneInput.value ||
        !emailInput.value
      ) {
        alert('Не все поля заполнены!');
        return;
      }
  
      var phonePattern = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(phoneInput.value)) {
        alert('Некорректный формат телефонного номера!');
        return;
      }
  
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(emailInput.value)) {
        alert('Некорректный адрес электронной почты!');
        return;
      }
  
      var card = document.createElement('div');
      card.classList.add('card');
  
      var nameParagraph = document.createElement('p');
      nameParagraph.textContent = 'ФИО: ' + nameInput.value;
      card.appendChild(nameParagraph);
  
      var addressParagraph = document.createElement('p');
      addressParagraph.textContent = 'Адрес доставки: ' + addressInput.value;
      card.appendChild(addressParagraph);
  
      var phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = 'Телефон: ' + phoneInput.value;
      card.appendChild(phoneParagraph);
  
      var emailParagraph = document.createElement('p');
      emailParagraph.textContent = 'Email: ' + emailInput.value;
      card.appendChild(emailParagraph);
  
      form.reset();
  
      var flexContainer = document.querySelector('.flex-container');
      flexContainer.appendChild(card);
    });
  });
  