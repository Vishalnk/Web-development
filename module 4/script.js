
( function (){
      var names = ["yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];

      for (var i=0; i<names.length; i++) {
          var firstLetter=names[i].charAt(0).toLowerCase();
        // console.log(firstLetter);
        if (firstLetter ==='j'/*|| firstLetter ==='J'*/) {
            byeSpeaker.speak(names[i]);
         
        } else {
            helloSpeaker.speak(names[i]);
          
        }
}
})();