var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(input, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ input+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      displayFunction(input, result.data);
    }).fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
