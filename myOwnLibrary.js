function bounceOff(obs1,obs2){
if (obs1.x - obs2.x < obs2.width/2 + obs1.width/2
      && obs2.x - obs1.x < obs2.width/2 + obs1.width/2) {
    obs1.velocityX = obs1.velocityX * (-1);
    obs2.velocityX = obs2.velocityX * (-1);
  }
  if (obs1.y - obs2.y < obs2.height/2 + obs1.height/2
    && obs2.y - obs1.y < obs2.height/2 + obs1.height/2){
    obs1.velocityY = obs1.velocityY * (-1);
    obs2.velocityY = obs2.velocityY * (-1);
  }
}

function isTouching(object1,object2){ if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) { return true; } else { return false; } }