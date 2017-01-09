var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctorFinder').click(function() {
    var simpleDoctor = new Doctor();
    currentDoctorObject.getDoctor();
  });
});
