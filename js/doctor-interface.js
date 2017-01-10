var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(input, doctorInfo) {
  $('.showDoctor').text(doctorInfo);
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('.doctorFinder').submit(function(event) {
    event.preventDefault();
    var input = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctor(input, displayDoctor);
  });
});
