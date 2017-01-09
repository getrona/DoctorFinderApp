var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.doctorFinder').submit(function(event) {
    event.preventDefault();
    debugger;
    var input = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctor(input);
  });
});
