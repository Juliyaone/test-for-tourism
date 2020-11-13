$(document).ready(function() {

  $("#table_id").on( 'dblclick', 'tr td', function ( evt ) {

    $( "#myForm" ).remove();
    $( ".background-cell--active" ).removeClass();

    // Добавляем класс для изменения фона активной ячейки
    $(this).toggleClass( "background-cell--active" );


    //Находим данные из ячейки
    var valueForAttr = $(this).text();

    //Добавляем форму для редактирования телефона
    $(this).append( "<form action='#' id='myForm' enctype='multipart/form-data'><input type='tel' id='phone' class='telephone-example' name='phone' minlength ='18' required /><label class='phone-error visually-hidden' for='phone'>Заполните это поле</label><input class='form-submit' type='submit' value='Сохранить'/></form>" );

    // Добавляем атрибут value в поле ввода телефона и добавляем атрибуту данные из ячейки

    $(this).find( "#phone" ).attr( "value", valueForAttr);
    $(this).find( "#phone" ).attr( "placeholder", "+7-(999)-999-99-99");


    // Добавляем маску на поле с номером телефона
    $( "#phone" ).inputmask('+7(999)-999-99-99');

    // Ставим курсор сразу в поле для редактирования телефона
    $( "#phone" ).focus();










    // При нажатии на кнопку submit форма отправит данные и удалится
    $( "#myForm" ).submit( function(evt) {
      evt.preventDefault();
      var dataInput = $( "#phone" ).val();
      console.log(dataInput);
      validate(dataInput);
      // console.log(dataInputValue);
      // $(this).submit();
      // $('#myForm').remove();
      // return false;
    });



    // При нажатии на enter форма отправит данные и удалится
    $( "#phone" ).on('keydown', function(evt) {
      // evt.preventDefault();
      if (evt.keyCode === 13) {
        var dataInput = $( "#phone" ).val();
        console.log(dataInput);
        validate(dataInput);
        // console.log(dataInputValue);
        // $(this).submit();
        // $('#myForm').remove();
      }

    });
  });
});
