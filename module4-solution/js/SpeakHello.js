'use striict';

(function (window) {
  const helloSpeaker = {};
  const speakWord = "Hello";

  helloSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
  };

  window.helloSpeaker = helloSpeaker;
  
})(window);

