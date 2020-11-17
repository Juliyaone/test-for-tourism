function validate(param) {

  if (param.search('_') > -1 || param === '' || param === '+7(___)-___-__-__') {
    $( ".telephone-example" ).addClass( "invalid" );

  } else {
    $( ".telephone-example" ).removeClass( "invalid" );
    $( "#phone" ).parent().find('.dataTd').text(param);
    $( "#phone" ).parent().find('.dataTd').removeClass( "visually-hidden" );
    $( "#phone" ).remove();
  }
};
