function validate(param) {

  if (param.search('_') > -1 || param === '' || param === '+7(___)-___-__-__') {
    $( ".telephone-example" ).addClass( "invalid" );

  } else {
    $( ".telephone-example" ).removeClass( "invalid" );

    $(".form-submit").parent().parent().text(param);
    $('#myForm').submit();
    $('#myForm').remove();
  }

};

