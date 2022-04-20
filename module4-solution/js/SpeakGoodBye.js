'use striict';

(function (window) { 
  const byeSpeaker = {};
  const speakWord = "Good Bye";
  
  byeSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
  };
    
  window.byeSpeaker = byeSpeaker;

})(window);
