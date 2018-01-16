$(function() {
  $(document).on("pageInit", function() {
    $("#birthday").calendar({
      dateFormat: "yyyy/mm/dd",
      onChange: function(p, v, d) {
        console.log(p, v, d);
      }
    });
  });
  $.init();
});
