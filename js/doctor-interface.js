var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(input, doctorInfo) {
  doctorInfo.forEach(function(x){
    $('.showDoctor').append(x.profile.bio + "<br>");

  });

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
