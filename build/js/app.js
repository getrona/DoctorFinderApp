(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "694ff00ec65bc413d32e1d260c035c0f";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(input, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ input+'&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      displayFunction(input, result.data.bio);
    }).fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
