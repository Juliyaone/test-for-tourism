$(document).ready(function() {

  $("#table_id").on( 'dblclick', 'tr td', function ( evt ) {

    $( "#myForm" ).remove();
    $( ".background-cell--active" ).removeClass();

    // Добавляем класс для изменения фона активной ячейки
    $(this).toggleClass( "background-cell--active" );


    //Находим данные из ячейки
    var valueForAttr = $(this).text();

    //Добавляем форму для редактирования телефона
    $(this).append( "<form action='#' id='myForm' enctype='multipart/form-data'><input type='tel' id='phone' class='telephone-example' name='phone' minlength ='18' required /><label class='phone-label visually-hidden' for='phone'>Заполните это поле</label><input class='form-submit' type='submit' value='Сохранить' /></form>" );

    // Добавляем атрибут value в поле ввода телефона и добавляем атрибуту данные из ячейки

    $(this).find( '#phone' ).attr( "value", valueForAttr);
    $(this).find( '#phone' ).attr( "placeholder", "+7-(999)-999-99-99");


    // Добавляем маску на поле с номером телефона
    $('#phone').inputmask('+7(999)-999-99-99');

    // Ставим курсор сразу в поле для редактирования телефона
    $( "#phone" ).focus();

    // На поле с телефоном навешиваем обработчик события по потере фокуса
    $('#phone').blur( function(evt) {
      // Находим введенные в поле данные
      var dataInput = $('#phone').serializeArray();

      // Находим value 1 элемента массива dataInput
      var dataInputValue = dataInput[0].value;

      if (dataInputValue.search('_') > -1 || dataInputValue ==='+7-(___)-___-___-__' || dataInputValue === '') {
        $(".telephone-example").addClass("invalid");
        $(".phone-label").removeClass("visually-hidden");

      } else {
        console.log(dataInputValue);
        $('#myForm').remove();
      }
    });



    // При нажатии на кнопку submit форма отправит данные и удалится
    $('#myForm').submit( function(evt) {
      evt.preventDefault();
      // $('#myForm').remove();
      return false;
    });

    // При нажатии на enter форма отправит данные и удалится
    $('#table_id').on('keydown', function(evt) {

      // Находим введенные в поле данные
      var dataInput = $('#phone').serializeArray();

      // Находим value 1 элемента массива dataInput
      var dataInputValue = dataInput[0].value;

      if (evt.keyCode === 13) {

        if (dataInputValue.search('_') > -1 || dataInputValue ==='+7-(___)-___-___-__' || dataInputValue === '') {
          $(".telephone-example").addClass("invalid");
          $(".phone-label").removeClass("visually-hidden");
        }


        // console.log(dataInputValue);
        // $(this).submit();
        // $('#myForm').remove();
      }

    });
  });
});
