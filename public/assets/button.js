// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var eatentoggle = $(this).data("eaten");
  
      var neweaten = {
        eaten: eatentoggle
      };
  
      // Send the PUT request.
      $.ajax("/api/shelf/" + id, {
        type: "PUT",
        data: neweaten
      }).then(
        function() {
          console.log("changed eaten to ", eatentoggle);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newpastry = {
        name: $("#name").val().trim(),
        eaten: false
      };
  
      // Send the POST request.
      $.ajax("/api/shelf", {
        type: "POST",
        data: newpastry
      }).then(
        function() {
          console.log("created new pastry");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  