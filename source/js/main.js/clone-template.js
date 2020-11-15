var cloneTemplate = function() {

  var tableId = document.querySelector('#table_id');
  var tbody = tableId.querySelector('tbody');
  var tRows = tbody.children;

  var temlate = document.querySelector('#template').content;
  var myForm = temlate.querySelector('#myForm');

  window.formClone = myForm.cloneNode(true);

};
