$(document).ready(function() {



    // При нажатии на кнопку submit форма отправит данные и удалится
    $('.form-submit').click( function(evt) {
      evt.preventDefault();

      // На поле с телефоном навешиваем обработчик события по потере фокуса
      $('#phone').blur( function(evt) {
        // Находим введенные в поле данные
        var dataInput = $('#phone').serializeArray();

        // Находим value 1 элемента массива dataInput
        var dataInputValue = dataInput[0].value;
        console.log(dataInputValue);

        if (dataInputValue.search('_') > -1 || dataInputValue ==='+7-(___)-___-___-__' || dataInputValue === '') {
          $(".telephone-example").addClass("invalid");
        } else {
          console.log(dataInputValue);
          // $('#myForm').remove();
        }
      });
    });

    // При нажатии на enter форма отправит данные и удалится
    $('#table_id').on('keydown', function(evt) {
      var dataInput = $('#phone').serializeArray();

      if (evt.keyCode === 13) {
          evt.preventDefault();
          $(this).submit();
          console.log(dataInput);

          // $('#myForm').remove();
      }

    });
});
