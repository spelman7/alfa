jQuery(document).ready(function(){
  $("button").click(function(){
    $.ajax({
      url: "https://api.instagram.com/v1/users/188557588/media/recent/?client_id=06c8efb97a234943a988e53b6ec3fe9c&count=1",
      dataType: "jsonp",
      success: function (data) {
        var jaDate = new Date(data.data["0"].created_time*1000);
        var jaDate2 = jaDate.toUTCString();
        $('#location').html("Ja was last seen on " + jaDate2 + ", at latitude " + data.data["0"].location.latitude + " and longitude " + data.data["0"].location.longitude)
        $('#link').html(data.data["0"].link)
        $('#link').attr("href", data.data["0"].link)
      }
    });
  });
});
