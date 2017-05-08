//Business Logic
function placesMine(location, landmarks, season, activities, notes) {
  this.locale = location,
  this.landmarks = landmarks,
  this.season = season,
  this.activites = activities,
  this.notes = notes
}





//UI Logic
$(document).ready(function() {
  $("form#allForms").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedSeason = $("input#season").val();
    var inputtedActivities = $("input#activities").val();
    var inputtedNotes = $("input#notes").val();
    var location = new placesMine(inputtedLocation, inputtedLandmarks, inputtedSeason, inputtedActivities, inputtedNotes);

    $("ul#Places").append("<li><span class='location'>" + location.locale + "</span></li>");
  });

  $("location").last().click(function(){
    $("#show-location").show();
    $("#show-location p").text(location, landmarks, season, activities, notes)
    $(".location").text(inputtedLocation.locale);
    $(".landmarks").text(inputtedLandmarks.landmarks);
    $(".season").text(inputtedSeason.season);
    $(".activities").text(inputtedActivities.activities);
    $(".notes").text(inputtedNotes.notes);
  });
});
