$(document).ready(function() {

  $("#table_id").on( 'dblclick', 'tr td', function ( evt ) {

    //клонируем из template input функция вернет phoneClone
    cloneTemplate();

    //при каждом dblclick по td удаляем класс скрывающий данные ячейки, удаляем input, удаляем класс с фоном
    $( ".dataTd" ).removeClass( "visually-hidden" );
    $( "#phone" ).remove();
    $( ".background-cell--active" ).removeClass();



    // Добавляем класс для изменения фона активной ячейки
    $(this).toggleClass( "background-cell--active" );

    // Добавляем класс для скрытия данных активной ячейки
    $(this).find( ".dataTd" ).addClass( "visually-hidden" );

    //Находим данные из ячейки
    var valueTd = $(this).find('.dataTd').text();
    console.log(valueTd);

    //Добавляем форму для редактирования телефона
    $(this).append(phoneClone);

    // Добавляем атрибут value в поле ввода телефона и добавляем атрибуту данные из ячейки
    $(this).find( "#phone" ).attr( "value", valueTd);
    $(this).find( "#phone" ).attr( "placeholder", "+7-(999)-999-99-99");

    // Добавляем маску на поле с номером телефона
    $( "#phone" ).inputmask('+7(999)-999-99-99');

    // Ставим курсор сразу в поле для редактирования телефона
    $( "#phone" ).focus();







    // input при потере фокуса сохранит валидные данные в переменную dataInput и удалится, невалидные данные сохранять не будет + подсветит бордер красным
    $( "#phone" ).blur( function(evt) {
      evt.preventDefault();

      var dataInput = $( "#phone" ).val();

      validate(dataInput);
    });


    // При нажатии на enter форма сохранит данные в переменную dataInput и удалится, , невалидные данные сохранять не будет + подсветит бордер красным
    $( "#phone" ).on('keydown', function(evt) {
      if (evt.keyCode === 13) {

        var dataInput = $( "#phone" ).val();

        validate(dataInput);
      }
    });
  });
});
