const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes <= 1){
  console.log(names[0]);
  // return names[0];
  }
  else if(strokes <= par - 2){
  console.log(names[1]);
  // return names[1];
  }
  else if(strokes <= par - 1){
  console.log(names[2]);
  // return names[2];
  }
  else if(strokes <= par){
  console.log(names[3]);
  // return names[3];
  }
  else if(strokes <= par + 1){
  console.log(names[4]);
  // return names[4];
  }
  else if(strokes <= par + 2){
  console.log(names[5]);
  // return names[5];
  }
  else{
  console.log(names[6]);
  // return names[6];
  }
  // Only change code above this line
}

function list(){
golfScore(5, 4);
golfScore(4, 1)
golfScore(4, 2)
golfScore(5, 2)
golfScore(4, 3)
golfScore(4, 4)
golfScore(1, 1)
golfScore(5, 5)
golfScore(4, 5)
golfScore(4, 6)
golfScore(4, 7)
golfScore(5, 9)
}