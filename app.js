var possibleNotes = ["A", "B", "C", "D", "E", "F", "G"],
    amountOfNotes = possibleNotes.length,
sightReadAttempts = 10,
             read = 0,
       intervalID = setInterval(getNewNote, 2000);

function getNewNote(){
  var generator = Math.floor((Math.random() * amountOfNotes))
  $(".readThis").html("<h1>" + possibleNotes[generator] + "</h1>")
  read += 1
  if (read === sightReadAttempts){
    clearInterval(intervalID)
    console.log("we're done here!")
  }
}
