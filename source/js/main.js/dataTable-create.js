$(document).ready(function() {

  var table = $('#table_id').DataTable({
    "ajax":
          {
           "url": "data.json",
           "dataType": "json",
           "dataSrc": "data"
       },

     "columns": [
        { "data": "telephone.number" }
      ]
  });


});
