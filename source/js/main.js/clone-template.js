var cloneTemplate = function() {

  var temlate = document.querySelector('#template').content;
  var myPhone = temlate.querySelector('#phone');

  window.phoneClone = myPhone.cloneNode(true);
};
