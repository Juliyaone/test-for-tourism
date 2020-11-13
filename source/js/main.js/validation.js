function validate(param) {

  if (param.search('_') > -1 || param === '') {
    $( ".telephone-example" ).addClass( "invalid" );
    $( ".phone-error" ).removeClass( "visually-hidden" );
  }
};

