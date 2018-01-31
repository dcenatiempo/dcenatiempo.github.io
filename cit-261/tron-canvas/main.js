var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var board = {
  w: 1200,
  h: 600
};

var game = {
  on: false,
  pause: false, //
  speed: 1,
  numDead: 0,
  p1: {
    color: 'blue',
    location: [200,200], // x,y coordinates
    direction: [1,0], // l,r,u,d
    path: [ [200,200] ],
    alive: true,
    points: 0
  },
  p2: {
    color: 'green',
    location: [1000,400], // x,y coordinates
    direction: [-1,0], // l,r,u,d
    path: [[1000,400]],
    alive: true,
    points: 0
  },
  p3: {
    color: 'red',
    location: [200,400], // x,y coordinates
    direction: [1,0], // l,r,u,d
    path: [[200,400]],
    alive: true,
    points: 0
  }
};

function resetGame() {
  console.log("resetting game")
  game.on = false;
  game.pause = false; //
  
  game.p1.location = [200,200]; // x,y coordinates
  game.p1.direction = [1,0]; // l,r,u,d
  game.p1.path = [ [200,200] ];
  game.p1.alive = true;
  
  game.p2.location = [1000,400]; // x,y coordinates
  game.p2.direction = [-1,0]; // l,r,u,d
  game.p2.path = [[1000,400]];
  game.p2.alive = true;
  
  game.p3.location = [200,400]; // x,y coordinates
  game.p3.direction = [1,0]; // l,r,u,d
  game.p3.path = [[200,400]];
  game.p3.alive = true;
  
  drawScreen();
};

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPath(game.p1);
  drawPath(game.p2);
  drawPath(game.p3);
  if (game.p1.alive) game.p1.alive = checkCollision(game.p1);
  if (game.p2.alive) game.p2.alive = checkCollision(game.p2);
  if (game.p3.alive) game.p3.alive = checkCollision(game.p3);
  //console.log(game);
  drawPlayer(game.p1);
  drawPlayer(game.p2);
  drawPlayer(game.p3);
  game.numDead = 0;
  if (!game.p1.alive) game.numDead++;
  if (!game.p2.alive) game.numDead++;
  if (!game.p3.alive) game.numDead++;
  console.log(game.numDead)
  if (game.numDead === 0) {
    movePlayer(game.speed, game.p1);
    movePlayer(game.speed, game.p2);
    movePlayer(game.speed, game.p3);
  }
  else if (game.numDead === 1 ) {
    if (game.p1.alive) movePlayer(game.speed, game.p1);
    if (game.p2.alive) movePlayer(game.speed, game.p2);
    if (game.p3.alive) movePlayer(game.speed, game.p3);
  }
  else {
    if (game.p1.alive) game.p1.points++;
    if (game.p2.alive) game.p2.points++;
    if (game.p3.alive) game.p3.points++;
    
    game.on = false;
    game.pause = true;
    updateScore();
  }
};

function updateScore() {
  var blue = document.getElementById("blue");
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  blue.innerText = game.p1.points;
  red.innerText = game.p3.points;
  green.innerText = game.p2.points;
}

function checkCollision(p) {
  var sx, sy, sw, sh;
  // down
  if (p.direction[0] === 0 && p.direction[1] === 1 ) {
    sx = p.location[0]-1;
    sy = p.location[1]+1;
    sw = 1;
    sh = game.speed;
  }
  // up
  else if (p.direction[0] === 0 && p.direction[1] === -1) {
    sx = p.location[0]-1;
    sy = p.location[1]-game.speed - 1;
    sw = game.speed;
    sh = 1;
  }
  // right
  else if (p.direction[0] === 1 && p.direction[1] === 0) {
    sx = p.location[0]+1;
    sy = p.location[1]-1;
    sw = game.speed;
    sh = 1;
  }
  // left
  else if (p.direction[0] === -1 && p.direction[1] === 0) {
    sx = p.location[0]-game.speed-1;
    sy = p.location[1]-1;
    sw = game.speed;
    sh = 1;
  }
  var image = ctx.getImageData(sx, sy, sw, sh);
  if (image.data[3] > 0) {
    return false;
  }
  else return true;
}

function movePlayer(speed, p) {
  p.location[0] += p.direction[0] * speed;
  p.location[1] += p.direction[1] * speed;
  if (p.location[0] > board.w) {
    p.path.push([board.w, p.location[1]]);
    p.path.push([null]);
    p.location[0] -= board.w;
    p.path.push([0, p.location[1]]);
  }
  if (p.location[0] < 0) {
    p.path.push([0, p.location[1]]);
    p.path.push([null]);
    p.location[0] += board.w;
    p.path.push([board.w, p.location[1]]);
  }
  if (p.location[1] > board.h) {
    p.path.push([p.location[0], board.h]);
    p.path.push([null]);
    p.location[1] -= board.h;
    p.path.push([p.location[0], 0]);
  }
  if (p.location[1] < 0) {
    p.path.push([p.location[0], 0]);
    p.path.push([null]);
    p.location[1] += board.h;
    p.path.push([p.location[0], board.h]);
  }
}

function drawScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(game.p1);
  drawPlayer(game.p2);
  drawPlayer(game.p3);
  drawPath(game.p1);
  drawPath(game.p2);
  drawPath(game.p3);
};

function drawPlayer(p) {
  var x = p.location[0];
  var y = p.location[1]
  ctx.beginPath();
  ctx.strokeStyle = p.color;
  ctx.arc(x,y,3,0,2*Math.PI); //arc(x,y,r,startangle,endangle)
  ctx.stroke();
};

function drawPath(p) {
  if (p.location[0] === p.path[0,0] && p.location[1]=== p.path[0,1])
    return;
  ctx.beginPath();
  ctx.strokeStyle = p.color;
  ctx.moveTo(p.location[0], p.location[1]);
  for (let i=p.path.length-1; i>=0; i--) {
    if (p.path[i][0] === null) {
      i--;
      ctx.moveTo(p.path[i][0], p.path[i][1])
    }
    else {
      ctx.lineTo(p.path[i][0], p.path[i][1]);
    }
  }
  ctx.stroke(); 
};

function step(timestamp) {
  updateGame();
  if (game.on === true && game.pause === false) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

////// event handlers ///////
window.onkeydown = function(e) {
  let kp = e.keyCode || e.which;
		//console.log(kp)
		switch (kp) {
      case 13: //enter
        if (!game.on && !game.pause) {
          game.on = !game.on;
          window.requestAnimationFrame(step)
        }
        else if (!game.on && game.pause) {
          resetGame();
        }
        else if (game.on && !game.pause) {
          game.pause = true;
        }
        else if (game.on && game.pause) {
          game.pause = false;
          window.requestAnimationFrame(step)
        }
        break;
      case 87: // w (up)
        game.p1.direction = [0,-1];
        game.p1.path.push([game.p1.location[0],game.p1.location[1]]);
        break;
      case 83: // s (down)
        game.p1.direction = [0,1];
        game.p1.path.push([game.p1.location[0],game.p1.location[1]]);
        break;
      case 65: // a (left)
        game.p1.direction = [-1,0];
        game.p1.path.push([game.p1.location[0],game.p1.location[1]]);
        break;
      case 68: // d (right)
        game.p1.direction = [1,0];
        game.p1.path.push([game.p1.location[0],game.p1.location[1]]);
        break;
			case 38:	// up arrow
				game.p2.direction = [0,-1];
        game.p2.path.push([game.p2.location[0],game.p2.location[1]]);
        break;
      case 40:	// down arrow
        game.p2.direction = [0,1];
        game.p2.path.push([game.p2.location[0],game.p2.location[1]]);
        break;
			case 37: // left arrow
				game.p2.direction = [-1,0];
        game.p2.path.push([game.p2.location[0],game.p2.location[1]]);
        break;
			case 39:	// right arrow
        game.p2.direction = [1,0];
        game.p2.path.push([game.p2.location[0],game.p2.location[1]]);
        break;
      case 89:	// Y (up)
				game.p3.direction = [0,-1];
        game.p3.path.push([game.p3.location[0],game.p3.location[1]]);
        break;
      case 72:	// H (down)
        game.p3.direction = [0,1];
        game.p3.path.push([game.p3.location[0],game.p3.location[1]]);
        break;
			case 71: // G (left)
				game.p3.direction = [-1,0];
        game.p3.path.push([game.p3.location[0],game.p3.location[1]]);
        break;
			case 74:	// J (right)
        game.p3.direction = [1,0];
        game.p3.path.push([game.p3.location[0],game.p3.location[1]]);
        break;
			default:
    }
}