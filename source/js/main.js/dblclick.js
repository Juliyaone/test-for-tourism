$(document).ready(function() {

  $("#table_id").on( 'dblclick', 'tr td', function ( evt ) {

    //клонируем из template форму функция вернет formClone
    cloneTemplate();

    $( "#myForm" ).remove();
    $( ".background-cell--active" ).removeClass();

    // Добавляем класс для изменения фона активной ячейки
    $(this).toggleClass( "background-cell--active" );


    //Находим данные из ячейки
    var valueTd = $(this).text();

    //Добавляем форму для редактирования телефона
    $(this).append(formClone);

    // Добавляем атрибут value в поле ввода телефона и добавляем атрибуту данные из ячейки

    $(this).find( "#phone" ).attr( "value", valueTd);
    $(this).find( "#phone" ).attr( "placeholder", "+7-(999)-999-99-99");


    // Добавляем маску на поле с номером телефона
    $( "#phone" ).inputmask('+7(999)-999-99-99');

    // Ставим курсор сразу в поле для редактирования телефона
    $( "#phone" ).focus();



    // При нажатии на кнопку submit форма отправит данные и удалится
    $( ".form-submit" ).click( function(evt) {
      evt.preventDefault();

      var dataInput = $( "#phone" ).val();

      validate(dataInput);
    });



    // При нажатии на enter форма отправит данные и удалится
    $( "#phone" ).on('keydown', function(evt) {
      if (evt.keyCode === 13) {

        var dataInput = $( "#phone" ).val();

        validate(dataInput);
      }
    });
  });
});
