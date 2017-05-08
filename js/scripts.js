//Business Logic











//UI Logic
$document.ready(function() {
 $("form#new-place").submit(function(event)
  event.preventDefault();

}
var location = $("input#location").val();
var landmarks = $("input#landmarks").val();
var season = $("input#season")val();
var activities = $("input#activities").val();
var notes = $("input#notes").val();

  $("ul#Places.append")("<li><span class='location'>" + locationTitle.location() + "</span></li>");
