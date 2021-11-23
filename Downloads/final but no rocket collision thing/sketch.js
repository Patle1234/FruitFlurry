
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
const Render = Matter.Render;
const Runner= Matter.Runner;
const Bounds=Matter.Bounds;
const Events=Matter.Events;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Common = Matter.Common;
const Composite = Matter.Composite;



var engine;
var mouseConstraint;
var currentCamBody;

//variables for bouncyball
var ground;
var ramps=[];
var ramp;
var bouncyBall;
var startingBall;
var blocksWidth = 10;
var blocksHeight = 80;
var blocksSpacing = 80;
var rest = 1.14; 

//variables for catapult
var catapultBall;
var carSS2;
var catapultRamp;
var platform, catapultPlatform;
var catapult, catapultSpacer, catapultSpacer2;
var catapultConstraint, bucketConstraint;
var projectile;
var bucket, bucketPlatform;
var plinkoBall, plinkoBall2, plinkoBall3, plinkoBall4;

//variables for plinko
var plinkoRamp;
var plinkoWall, plinkoWall2, plinkoWallAngle, plinkoWallAngle2;
var spinnyStuff, spinnyStuff2, spinnyStuff3;
var plinkoConstraint, plinkoConstraint2, plinkoConstraint3;
var plinkoSquares = [];

//variables for part after plinko before car
let balls = [];
let platforms = [];
let rectangle1, rectanagle2;
let circleY, platformY;


//variables for car to pendulum and dominoes
let boxB;
let ground1, ground2, ground3,ground4;
let ballA, ballB;
var car, car2;
var p1;
let allObjectsArray = [];
let dominoesArray = [];
let numDominoes = 20;
let groundPD;
let forceApplied = false;
let pend;
let pendConstraint;
let constraint1;
let poly1;
let constraint2;
let poly2;
let constraint3;
let rect3;
let ball3;
let constraint4;
let polyA4;
let polyB4;
var dencityer=1;
var restitutioner = 1;
var carBR1, carBR2, carBR3;
var stopper;


//variables for pulley part
let groundP;

let ball1P, ball2P;

let rampP, ramp2P, pulleyP, pulley2P;
let constraintP, constraint2P;

let rampYP = 520;
let weightP = 0.01;
//variables for second set domino
let portal1;
let portal2;
let rampPor;
//vars for anti
let rampAnti
let wall1Anti
let wall2Anti
let wall3Anti
let wall4Anti
let wall5Anti
let buttonAnti
let groundAnti
let ground2Anti
let ground3Anti
let startWind
let ballsAnti = []



//gap ramp vars
let groundGR;
let bridgeGR;
let ballGR;
let rampGR;
let wallGR;
let ramp1GR;
let wall1GR;
let ramp2GR;
let ball1GR;
let wall2GR;
let wall3GR;
let ramp3GR;
let ramp4GR; 
let wall4GR;
let wall5GR;
let ramp5GR;



//magnet vars

var magnet, magnetHandle;
var magnetActivate = false;





//slingshot vars


var currentCamBodySS;
var ballSS;
var blocksWidthSS = 10;
var blocksHeightSS = 80;
var blocksSpacingSS = 80;

var carSS;
progX=13900
progY=5230
var groundSS;
var rampsSS=[];
var rampSS;
var currentCamBody;
var restSS = 1.14; 

var pastBall;




//end
var forcePower=.01;
var ifClicked=false
var rocket;
var endCard
var ifFirework = false;
var cycler = 0;








function setup() {
  //this is where you create canvas
  canvas = createCanvas(0, 0);


  
  // create an engine
    engine = Engine.create();
            // create a renderer
        render = Render.create({
          element: document.body,
          engine: engine,
          options: { 
                      width: 1600, 
                      height: 900,
                      wireframes: false,
                
                      
                    
                  
                  }
      });
      Render.run(render);

      for (var xVal = -10000; xVal<20000; xVal+=1280){
        for (var yVal = -10000; yVal<20000; yVal+=700){
          var gridBackground = Bodies.rectangle(xVal, yVal, 1, 1, {
            isStatic: true,
            isSensor: true,
            render: {
                sprite: {
                    texture: './background.jpg',
                    xScale: 1,
                    yScale: 1
                }
            }
        });
        World.add(engine.world, gridBackground);
    
        }
      }

  

      // for (var xVal = -3000; xVal<20000; xVal+=2560){
      //   for (var yVal = -3000; yVal<20000; yVal+=1400){
      //     var gridBackground = Bodies.rectangle(xVal, yVal, 1, 1, {
      //       isStatic: true,
      //       isSensor: true,
      //       render: {
      //           sprite: {
      //               texture: './background.jpg',
      //               xScale: 2,
      //               yScale: 2
      //           }
      //       }
      //   });
      //   World.add(engine.world, gridBackground);
    
      //   }
      // }



  //first ramp
  ramp1 = Bodies.rectangle(140, -200, 400, 30, {
    isStatic: true,
    angle: Math.PI * 0.15
  })
  World.add(engine.world, ramp1);

  //second ramp 
  ramp2 = Bodies.rectangle(415, 50, 500, 30, {
    isStatic: true,
    angle: Math.PI * 0.85
  })
  World.add(engine.world, ramp2);

  //third ramp
  ramp3 = Bodies.rectangle(190, 400, 600, 30, {
    isStatic: true,
    angle:  Math.PI * 0.25
  })
  World.add(engine.world, ramp3);


  block1 = Bodies.rectangle(510, 610, 145, 30, {
    isStatic: true,
  })
  World.add(engine.world, block1);


  tramp1 = Bodies.rectangle(700, 700, 155, 30, {
    isStatic: true,

    angle:  Math.PI * 0.12
  })
  World.add(engine.world, tramp1);

  tramp2 = Bodies.rectangle(950, 820, 145, 30, {
    angle:  Math.PI * 0.05,
    isStatic: true,
  })
  World.add(engine.world, tramp2);

  platform = Bodies.rectangle(1150, 900, 450, 30, {
    isStatic: true,
  })
  World.add(engine.world, platform);

  // safetyRect = Bodies.rectangle(1300, 740, 250, 30, {
  //   isStatic: true,
  //   angle:Math.PI*.1
  // })
  // World.add(engine.world, safetyRect);


  startingBall = Bodies.circle(0, -300, 55);
  World.add(engine.world, startingBall);

  currentCamBody=startingBall//setting big ball as camera focus

  bouncyBall = Bodies.circle(490, 580, 30,{ restitution: rest, mass: 5});




  //set catapult variables

  catapultRamp = Bodies.rectangle(1410,1024,200,30, {isStatic: true, angle: Math.PI*0.4})
  World.add(engine.world, [catapultRamp])

  catapultPlatform = Bodies.rectangle(1410, 2000, 100, 25, {isStatic: true})
  World.add(engine.world, [catapultPlatform])



  catapult = Bodies.rectangle(1460, 1550, 400, 10, {
  });
  catapultConstraint = Constraint.create({
    pointA: {x: 1460, y: 1550},
    bodyB: catapult,
    stiffness: .004,
    length: 0
  });
  World.add(engine.world, [catapult, catapultConstraint]);

  catapultSpacer = Bodies.rectangle(1460, 1600, 10, 75, {isStatic: true });


  catapultSpacer2 = Bodies.rectangle(1420, 1625, 10, 40, {isStatic: true});

  World.add(engine.world, [catapultSpacer, catapultSpacer2]);

  bucket = Bodies.rectangle(2085,1730,400,15)
  World.add(engine.world, [bucket])

  bucketConstraint = Constraint.create({
    pointA:{x: 2085, y: 1730},
    bodyB: bucket,
    stiffness:0.1,
  });
 World.add(engine.world, [bucketConstraint])

 bucketPlatform = Bodies.rectangle(2085, 1820, 30, 150, {isStatic: true });
 World.add(engine.world, [bucketPlatform])

 catapultBall = Bodies.circle(1371, 800, 40, {mass: 42}); // make big one more 'heavy'
  World.add(engine.world, [catapultBall])

  projectile = Bodies.rectangle(1320, 1550, 25, 25, {
    density:.0001
  });
 
  

  plinkoBall = Bodies.circle(2035, 1690, 20)
  // World.add(engine.world, [plinkoBall])

  plinkoBall2 = Bodies.circle(1965, 1690, 20)
  // World.add(engine.world, [plinkoBall2])

  plinkoBall3 = Bodies.circle(2135, 1690, 20)
  // World.add(engine.world, [plinkoBall3])

  plinkoBall4 = Bodies.circle(2205.1595, 1690, 20)
  // World.add(engine.world, [plinkoBall4])



  //set plinko variables

 plinkoRamp = Bodies.rectangle(2400, 2000, 650, 30, {
  isStatic: true,
  angle: Math.PI * 0.15
  })
  World.add(engine.world, plinkoRamp);

  plinkoWall = Bodies.rectangle(2500, 2700, 20, 600, {isStatic: true});
  World.add(engine.world, [plinkoWall]);

  plinkoWall2 = Bodies.rectangle(3300, 2700, 20, 600, {isStatic: true});
  World.add(engine.world, [plinkoWall2]);

  plinkoWallAngle = Bodies.rectangle(2630, 3130, 400, 20, {isStatic: true, angle: 0.785398});
  plinkoWallAngle2 = Bodies.rectangle(3170, 3130, 400, 20, {isStatic: true, angle: -0.785398});

  World.add(engine.world, [plinkoWallAngle]);
  World.add(engine.world, [plinkoWallAngle2]);

  spinnyStuff = Bodies.rectangle(2700, 2650, 200, 10);
 

  plinkoConstraint = Constraint.create({
    pointA: {x: 2700, y: 2650},
    bodyB: spinnyStuff,
    stiffness: 1,
    length: 0
  });



  World.add(engine.world, [spinnyStuff, plinkoConstraint]);

  spinnyStuff2 = Bodies.rectangle(3100, 2650, 200, 10);
  plinkoConstraint2 = Constraint.create({
    pointA: {x: 3100, y: 2650},
    bodyB: spinnyStuff2,
    length: 0
  });

  World.add(engine.world, [spinnyStuff2, plinkoConstraint2]);

  spinnyStuff3 = Bodies.rectangle(2900, 2450, 200, 10);
  plinkoConstraint3 = Constraint.create({
    pointA: {x: 2900, y: 2450},
    bodyB: spinnyStuff3,
    length: 0
  });

  World.add(engine.world, [spinnyStuff3, plinkoConstraint3]);

  for (let index = 0; index < 3; index++) {
    var rectangle = Bodies.rectangle(2700 + index*200, 3050, 50, 50, {
        isStatic: true,
        angle: 0.785398
    
    });

    plinkoSquares.push(rectangle);
}

for (let index = 0; index < 10; index++) {
  var circle = Bodies.circle(2500 + index*80, 2750, 10, {
      isStatic: true,

  });
  plinkoSquares.push(circle);
}

for (let index = 0; index < 10; index++) {
  var circle = Bodies.circle(2500 + index*80, 2850, 10, {
      isStatic: true,

  });
  plinkoSquares.push(circle);
}

for (let index = 0; index < 10; index++) {
  var circle = Bodies.circle(2500 + index*80, 2950, 10, {
      isStatic: true,

  });
  plinkoSquares.push(circle);
}


World.add(engine.world, plinkoSquares);






  

//part after plinko before car variables
rectangle1 = Bodies.rectangle(3200, 3600, 1200, 20, {
  isStatic: true,
  density:.0001,
  angle:Math.PI*.12

});


rectangle3  = Bodies.rectangle(3800, 4380, 20, 3000, {
  isStatic: true,
  density:.0001,
});


World.add(engine.world, [rectangle1, rectangle3]);


circleY = 2700;
platformY = 11500;
  
for (let i = 0; i < 20; i++) {
  let p = Bodies.rectangle(3780, platformY, 50, 16, {
   
    isStatic: true,
    density:.0001,
    angle:Math.PI*.2
  });

  platformY+=250;

  platforms.push(p)
  World.add(engine.world, [platforms[i]])

}


// for (let i = 0; i < 10; i++) {
//   let ballsball = Bodies.circle(3120, circleY, 25)
//   circleY-=300;
//   balls.push(ballsball)
//   World.add(engine.world, [balls[i]])
  
// }




//car to pendulum to dominoes stuff

for (let index = 0; index < numDominoes; index++) {
  var rectangle = Bodies.rectangle(4700 + index*50, 3930, 15, 135, {
    frictionAir: 0.005,
    density:.001

  });

  allObjectsArray.push(rectangle);
  dominoesArray.push(rectangle);
}




groundPD = Bodies.rectangle(5350, 4000, 1400, 10, {
  isStatic: true, 
  // angle: Math.PI * 0.06
});

allObjectsArray.push(groundPD);

World.add(engine.world, allObjectsArray);


ballA = Bodies.circle(5750, 3950, 30,{
  density:.0002,
  friction:.1,
  frictionAir:0
});

car = Composites.car(3900, 3480, 120, 20, 30, {
  isStatic:true
});

ground2 = Bodies.rectangle(4150, 3700, 800, 20, {
  isStatic: true, 
  angle: Math.PI * 0.2,
  staticfriction: 0
  // friction: .01
});

World.add(engine.world, [ground2, ballA]);

poly1 = Bodies.circle(4550, 3900, 30,{
  restitution: 0,
  frictionAir: 0,
  friction:0,
  density: .001
});

constraint1 = Constraint.create({
  pointA: { x: 4550, y: 3400 },
  bodyB: poly1,
  
});
World.add(engine.world, [poly1, constraint1]);

carBR1 =  Bodies.rectangle(3880, 3350, 150, 20, {
  isStatic: true, 
 
  staticfriction: 0
  // friction: .01
});

carBR2 =  Bodies.rectangle(3945, 3300, 20, 100, {
  isStatic: true, 
 
  staticfriction: 0
  // friction: .01
});

carBR3 =  Bodies.rectangle(3810, 3300, 20, 100, {
  isStatic: true, 
 
  staticfriction: 0
  // friction: .01
});

stopper  = Bodies.rectangle(4000, 3540, 20, 100, {
  isStatic: true, 
  angle: Math.PI * 0.2,
  staticfriction: 0
  // friction: .01
});

World.add(engine.world, [carBR1, carBR2, carBR3, stopper, car])







//pulley stuff

pulleyP = Bodies.rectangle(6300, 4100, 400, 20);
  constraintP = Constraint.create({
    pointA: {x: 6300, y: 4100},
    bodyB: pulleyP,
    stiffness: 1,
    length: 0
  });
  World.add(engine.world, [pulleyP, constraintP]);


  pulley2P = Bodies.rectangle(6650, 4050, 500, 20);
  constraint2P = Constraint.create({
    pointA: {x: 6650, y: 4050},
    bodyB: pulley2P,
    stiffness: 1,
    length: 0
  });
  World.add(engine.world, [pulley2P, constraint2P]);


  // rampP = Bodies.rectangle(-100, 20, 300, 20, {isStatic: true, angle: Math.PI * 0.11});
  // World.add(engine.world, [rampP]);


  // ball1P = Bodies.circle(-100, -200, 25);
  // World.add(engine.world, [ball1P]);

  ball2P = Bodies.circle(6650, 4000, 20);
  World.add(engine.world, [ball2P]);

  // groundP = Bodies.rectangle(400, 590, 810, 25, {isStatic: true});
  // World.add(engine.world, [groundP]);


//portal SECTIOn

rampPor = Bodies.rectangle(7230,4350, 840,20, {isStatic: true, angle: Math.PI*0.2});
World.add(engine.world, [rampPor]);

portal1 = Bodies.circle(7550, 4530, 50, {
  isStatic: true,
  render: {
    sprite: {
      texture: 'portal.jpeg',
      xScale: 0.3,
      yScale: 0.3
    }
  }
});
World.add(engine.world, portal1);

portal2 = Bodies.circle(8300, 3800, 50, {
  isStatic: true,
  render: {
    sprite: {
      texture: 'portal2.jpeg',
      xScale: 0.5,
      yScale: 0.5
    }
  }
});
World.add(engine.world, portal2)

//antigravity section

groundAnti = Bodies.rectangle(10000, 6100, 1300, 20, {isStatic: true})
World.add(engine.world, [groundAnti])

  rampAnti = Bodies.rectangle(8600, 5900, 1300, 20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [rampAnti])

  buttonAnti = Bodies.rectangle(9350, 6100, 300, 20, {isStatic: true})
  World.add(engine.world, [buttonAnti])

  wall2Anti = Bodies.rectangle(9500, 5590, 20, 1000, {isStatic: true})
  World.add(engine.world, [wall2Anti])

  wall1Anti = Bodies.rectanglebutton = Bodies.rectangle(10650, 5750, 20, 700, {isStatic: true})
  World.add(engine.world, [wall1Anti])
  
  wall3Anti = Bodies.rectanglebutton = Bodies.rectangle(10400, 4640, 2000, 20, {isStatic: true, angle: Math.PI * 0.85})
  World.add(engine.world, [wall3Anti])

  // wall4Anti = Bodies.rectanglebutton = Bodies.rectangle(1020, 45, 600, 20, {isStatic: true})
  // World.add(engine.world, [wall4Anti])

  // wall5Anti = Bodies.rectanglebutton = Bodies.rectangle(1310, 150, 20, 225, {isStatic: true})
  // World.add(engine.world, [wall5Anti])

  ground2Anti = Bodies.rectangle(11770, 4190, 1000, 20, {isStatic: true})
  World.add(engine.world, [ground2Anti])

  ground3Anti = Bodies.rectangle(12270, 4280, 20, 200, {isStatic: true})
  World.add(engine.world, [ground3Anti])

  for (let i = 0; i < 30; i++) {
    let ballsball = Bodies.circle(10000, 5800, 30)
    ballsAnti.push(ballsball)
    World.add(engine.world, [ballsAnti[i]])

  }





  //gap ramp

  rampGR = Bodies.rectangle(11380, 5650,1500,20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [rampGR])
 
  // wallGR = Bodies.rectangle(12230,6220,20,100, {isStatic: true})
  // World.add(engine.world, [wallGR])

   wallGR = Bodies.rectangle(12100,5930,20,100, {isStatic: true})
  World.add(engine.world, [wallGR])
 
  ramp1GR = Bodies.rectangle(12140,5990,100,20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [ramp1GR])
 
  wall1GR = Bodies.rectangle(12190,5960,20,110, {isStatic: true})
  World.add(engine.world, [wall1GR])
 
  ramp2GR = Bodies.rectangle(12315, 5960, 300, 20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [ramp2GR])

  // groundGR = Bodies.rectangle(12270, height, 1600, 100, {isStatic: true});
  // World.add(engine.world, [groundGR]);
 
  wall2GR = Bodies.rectangle(12470,6050,20,100, {isStatic: true  })
  World.add(engine.world, [wall2GR])
 
  ramp3GR = Bodies.rectangle(12510,6110,100,20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [ramp3GR])
 
  wall3GR = Bodies.rectangle(12560,6085,20,100, {isStatic: true  })
  World.add(engine.world, [wall3GR])
 
  ramp4GR = Bodies.rectangle(12695,6085,300,20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [ramp4GR])
 
  wall4GR = Bodies.rectangle(12845, 6180,20,100, {isStatic: true})
  World.add(engine.world, [wall4GR])
  
  wall5GR = Bodies.rectangle(12940, 6210, 20,100, {isStatic: true})
  World.add(engine.world, [wall5GR])
 
  ramp5GR = Bodies.rectangle(12900,6230,100,20, {isStatic: true, angle: Math.PI * 0.1})
  World.add(engine.world, [ramp5GR])
 









//magnet

// magnet = Bodies.rectangle(11750, 5000, 700, 50, {
//   isStatic: true
// });

// World.add(engine.world, [magnet])


// magnetHandle = Bodies.rectangle(11750, 4775, 50, 400, {
//   isStatic: true
// });

// World.add(engine.world, [magnetHandle])

















//slingshot


var mouse = Mouse.create(render.canvas),
mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});

World.add(engine.world, mouseConstraint);




      carSS=Bodies.circle(progX, progY,40)

      World.add(engine.world,carSS)


      var anchor={ x: progX, y: progY };

      var elastic =Matter.Constraint.create({ 
        pointA: anchor, 
        bodyB: carSS, 

        stiffness: 0.05
    });
    World.add(engine.world,elastic)

          ramp1 = Bodies.rectangle(13710, 5500, 900, 30, {
        isStatic: true,
        angle: Math.PI * 0.75
      })
        World.add(engine.world, ramp1)
       


        stopperSS = Bodies.rectangle(13820, 5340, 70, 30, {
          isStatic: true,
          angle: Math.PI * 0.25//x-50
        })
          World.add(engine.world, stopperSS)

          stopperSS2 = Bodies.rectangle(13990, 5170, 70, 30, {
            isStatic: true,
            angle: Math.PI * 0.25//x-50
          })
            World.add(engine.world, stopperSS2)

  ramp2 = Bodies.rectangle(16805, 5500, 900, 30, {
    isStatic: true,
    angle: Math.PI * 0.05//x-70
  })
    World.add(engine.world, ramp2)




    var firing=false;
    Events.on(mouseConstraint, 'enddrag', function(e) {
      if(e.body===carSS){
        firing=true
        console.log("in the drag ")
        
      }

  });


  
  Matter.Events.on(engine,'afterUpdate', function() {
    if (firing && Math.abs(carSS.position.x-progX) < 20 && Math.abs(carSS.position.y-progY) < 20) {
       // collisonWithButton(carSS )
  

      //pastBall=carSS;
      currentCamBody=carSS
      carSS2=Bodies.circle(progX, progY,40)
        Matter.World.add(engine.world, carSS2);
        elastic.bodyB = carSS2;
        firing = false;
        console.log("in the fire ")
      //  World.add(engine.world, buttonPresser)


    }


  });










  //end

  rocket =Bodies.circle(16000, 5230, 46, {
    render: {
      sprite: {
        texture: './rocket.png',
        xScale: .2,
        yScale: .2
      }
    }
    // ,
    // isStatic:true
  });

  

  platform =Bodies.rectangle(15900, 5240, 400,30,{
    isStatic: true,
    render: { 
      fillStyle: "gray" 
    }
  }
  );
World.add(engine.world,platform)


button =Bodies.rectangle(15890, 5200, 100,30,{
  isStatic: true,
  render: { 
    fillStyle: "red" 
  }
}
);
World.add(engine.world,button)

endCard =Bodies.circle(15190, 2200, 46, {
  render: {
    sprite: {
      texture: './endCard.jpeg',
      xScale: 1,
      yScale: 1
    }
  }
  ,isStatic:true
});

  render.mouse = mouse;

  Engine.run(engine);

  

  // camera
  Events.on(engine, 'beforeTick', function() {
    Render.lookAt(render, currentCamBody, {
      x: 1000,
      y: 1000
    });
 }.bind(this));


 
}







var rerun = false;
//prevents camera from switching twice in case of accidental secondary collision; use in all collision ifs
var col1, col2, col3, col4, col5, col6, col7, col8, col9, col10 = false
var stopperBool = false;
var collisionNum = 0;
var gCol0, gCol1, gCol2, gCol3 = false;

var boo =false;

var boo4 = false;

var boo2 = false;


var boojoe = false;



function draw(){

currentCamBody = ramp1

if (!boojoe){
  engine.world.gravity.y = -1;
  boojoe = true;
}
// if (!boo2){
//   engine.world.gravity.y = -1;
//   boo2   = true;
// }

  for (let i = 0; i < 30; i++){
    startWind = false;
   if(ballsAnti[i].position.y < 5700){
     startWind = true;
   }
  }
   if (startWind){
     for (let i = 0; i < 30; i++){
      Body.applyForce( ballsAnti[i], {x: ballsAnti[i].position.x, y: ballsAnti[i].position.y}, {x: 0.0005, y: 0});

     }
   }

  if (startingBall.position.y>400 && !rerun){
      World.add(engine.world, bouncyBall)
      rerun = true;
  }
  Events.on(engine, 'collisionStart', function(event) {

    if((Matter.SAT.collides(bouncyBall, startingBall).collided) && !col1){
      currentCamBody=bouncyBall//switching camera focus
      col1 = true;

    }
    if((Matter.SAT.collides(bouncyBall, catapultBall).collided) && !col2){
      currentCamBody=catapultBall//switching camera focus

      World.add(engine.world, [projectile])
      col2 = true;
      World.add(engine.world, [plinkoBall, plinkoBall2, plinkoBall3, plinkoBall4])                                 
    }
    
    if((Matter.SAT.collides(catapultBall, catapult).collided) && !col3){
      currentCamBody=plinkoBall//switching camera focus
      col3 = true;
      
    }

    if((Matter.SAT.collides(plinkoBall4, plinkoRamp).collided) && !col4){
      currentCamBody=plinkoBall//switching camera focus
      col4 = true;
      World.remove(engine.world, projectile)
    }
    
    if (Matter.SAT.collides(carSS, button).collided) {
      console.log("colliding!")
      World.remove(engine.world,button)
      World.remove(engine.world,carSS)
      
      ifClicked=true
    }

    if((Matter.SAT.collides(poly1, allObjectsArray[0]).collided) && !col6){
      currentCamBody=ballA//switching camera focus
      col6 = true;
    }
    if((Matter.SAT.collides(allObjectsArray[19], ballA).collided) && !col7){
      currentCamBody=ballA//switching camera focus
      col7 = true;
    }
    if((Matter.SAT.collides(ballA, pulleyP).collided) && !col8){
      currentCamBody=pulleyP//switching camera focus
      col8= true;
      World.remove(engine.world, [plinkoBall, plinkoBall2, plinkoBall3, plinkoBall4])
    
    }
    if((Matter.SAT.collides(pulley2P, rampPor).collided) && !col9){
      currentCamBody=ball2P//switching camera focus
      col9= true;
    }
    if((Matter.SAT.collides(ball2P, portal1).collided) && !col10){
      currentCamBody=ball2P//switching camera focus
      col10= true;
    }


    
  if (Matter.SAT.collides(portal1, ball2P).collided && !boo4) {
    Matter.Body.set(ball2P, "position", { x: portal2.position.x + 80, y: portal2.position.y });
    boo4 = true;
  }

  if((Matter.SAT.collides(ball2P, buttonAnti).collided) && !boo){
    color =  "#13FE66"
    rise = true;
    engine.world.gravity.y = -1
    World.remove(engine.world, ball2P)
    removed = true;
    currentCamBody = wall3Anti;
    boo = true

  }

 





  ballsAnti.forEach(element => {


    if (!gCol0){
      if((Matter.SAT.collides(element, ground3Anti).collided)){
        // currentCamBody=ground3Anti//switching camera focus
        gCol0 = true;
    
     
        engine.world.gravity.y = 1;
        World.add(engine.world,rocket)
        currentCamBody = rampGR

        // ballsAnti.forEach(ele => { World.add(engine.world, ele)});

      }
    
    }



    if (!gCol1){
      if((Matter.SAT.collides(element, ramp1GR).collided)){
        currentCamBody=ramp1GR//switching camera focus
        gCol1 = true;
      }
  
    }

    if (!gCol2){
      if((Matter.SAT.collides(element, ramp3GR).collided)){
        currentCamBody=ramp1GR//switching camera focus
        gCol2 = true;
      }
  
    }

    if (!gCol3){
      if((Matter.SAT.collides(element, ramp5GR).collided)){
        currentCamBody=ramp1GR//switching camera focus
        gCol3 = true;
        color =  "#13FE66"
        magnetActivate = true;
        console.log("C1")
        
      }
  
    }



    if(magnetActivate){

      Body.applyForce(element, {x: element.position.x , y: element.position.y} , { x: 1, y: -1 });
      
    }


  });


  });

  if (gCol1 && gCol2 && gCol3){
       console.log("UNLOCKED")
       World.remove(engine.world, stopperSS2)
  
       

     }

//  if (gCol1 && gCol2 && gCol3){
//    console.log("WORKS")
//  }
  
  
    //  console.log(plinkoBall.position.y);
    //  console.log(plinkoBall2.position.y);
    //  console.log(plinkoBall3.position.y);
    //  console.log(plinkoBall4.position.y);
  if ((plinkoBall.position.x>3800 && plinkoBall2.position.x>3800 && plinkoBall3.position.x>3800 && plinkoBall4.position.x>3800 && plinkoBall.position.y>3250 && plinkoBall2.position.y>3250 && plinkoBall3.position.y>3250 && plinkoBall4.position.y>3250) && !stopperBool){
        // World.add(engine.world, car);
      World.remove(engine.world, stopper);
      currentCamBody=car.bodies//switching camera focus
    stopperBool = true;
  }

  //stopperBool

  // console.log(plinkoBall.position.y)
  // console.log(plinkoBall2.position.y)
  // console.log(plinkoBall3.position.y)
  // console.log(plinkoBall4.position.y)
 

 
  
  background(170);
  renderVertices(ramp1)
  renderVertices(ramp2)
  renderVertices(ramp3)
  renderVertices(block1)
  renderVertices(tramp1)
  renderVertices(tramp2)
  renderVertices(startingBall)
  renderVertices(bouncyBall)
  renderVertices(platform);
  renderVertices(catapultBall);
  renderVertices(catapultRamp);
  renderVertices(catapultPlatform);
  renderVertices(catapultSpacer);
  renderVertices(catapultSpacer2);
  renderVertices(catapult);
    renderVertices(ball2P)
  
  
  
  // renderVertices(catapultConstraint);
  renderVertices(projectile);





  renderVertices(rectangle1)
  renderVertices(rectangle3)

//  balls.forEach(element => {
//     renderVertices(element);
// });

platforms.forEach(element => {

  // if (element.position.y>30 && element.position.y<1000){
    renderVertices(element);
  // }
    Body.translate(element, {
      x: 0,
      y: -4
    });

    if (element.position.y<2800){
      World.remove(engine.world, element)
    }


});

renderVertices(ballA)
  renderVertices(ground2)
  renderVertices(groundPD)
  renderVertices(poly1)











  renderVertices(pulleyP);
  renderVertices(pulley2P);
  // renderVertices(rampP);
  // renderVertices(ball1P);  
  renderVertices(ball2P);




  cGap=0
  rGap=0
  col=4
  row=4

  const bodyOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 0.8,
    render: { fillStyle: "gray" }
  }

  const fireworkBlueOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 2,
    render: { fillStyle: "blue" }
  }


  const fireworkRedOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 2,
    render: { fillStyle: "red" }
  }
 const fireworkGreenOptions = {
  frictionAir: 0,
  friction: 0.0001,
  restitution: 2,
  render: { fillStyle: "green" }
}
  const fireworkWhiteOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 2,
    render: { fillStyle: "white" }
  }
  const fireworkPurpleOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 2,
    render: { fillStyle: "purple" }
  }
  const fireworkYellowOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 2,
    render: { fillStyle: "yellow" }
  }
  





  // var collision2 = Matter.SAT.collides(rocket, endCard);

  
  // if (collision2.collided || rocket.position.y<endCard.position.y) {
    // console.log("ROCKET" + rocket.position.y)
    // console.log("ENDCARD" + endCard.position.y)

    if (rocket.position.y<endCard.position.y) {
      console.log("runningIF")
    World.remove(engine.world,    Matter.Composite.allBodies(engine.world))
    World.remove(engine.world,    rocket)

    World.add(engine.world,endCard)
    currentCamBody=endCard
    ifClicked=false
    forcePower=.25
// console.log(engine.timing.timestamp%4000)

    if (engine.timing.timestamp% 4000 < 20){//TODO (change interval (20) based on computer lag (use console.log(engine.timing.timestamp%4000 to test)))
      ifFirework=true
      console.log("shit1")
    }

    //red and blue fireworks
    if (engine.timing.timestamp% 4000 < 50 && ifFirework){
      console.log("shit2")
      //red and blue fireworks
      if(cycler==0){
        console.log("shit3")
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkBlueOptions )));
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkRedOptions )));
        explosion(engine)
      }else if(cycler==1){

        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkPurpleOptions )));
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkYellowOptions )));
        explosion(engine)
      }else if(cycler==2){

        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkWhiteOptions )));
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkGreenOptions )));
        explosion(engine)
      }else if(cycler==3){
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkYellowOptions )));
        World.add(engine.world,Matter.Composites.stack(endCard.position.x-25, endCard.position.y-150, col,row, rGap, cGap, (x, y) =>Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), fireworkRedOptions )));
        explosion(engine)
        cycler=0 
      }
      cycler++;
      ifFirework=false
    }
  }



  
  if(ifClicked) {
    World.add(
        engine.world,
        Matter.Composites.stack(rocket.position.x-12, rocket.position.y+20, col,row, rGap, cGap, (x, y) =>
          Matter.Bodies.circle(x, y, Matter.Common.random(5, 2), bodyOptions)
        ));
        Matter.Body.setVelocity(rocket,{x:0, y:rocket.velocity.y-.8})
        explosion(engine)
    }


}



function explosion(engine) {
  const bodies = Matter.Composite.allBodies(engine.world);
  for (let i = 0; i < bodies.length; ++i) {
    const body = bodies[i];

    if (!body.isStatic && body.position.y >= 5500) {
      const forceMagnitude = forcePower * body.mass;//.025

      Matter.Body.applyForce(body, body.position, {
        x:
          (forceMagnitude + Matter.Common.random() * forceMagnitude) *
          Matter.Common.choose([1, -1]),
        y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
      });
    }
  }
}








function renderVertices(body){
  var verts = body.vertices;
  beginShape();
  fill(127);
  for (var i = 0; i < verts.length; i++) {
    vertex(verts[i].x, verts[i].y);
  }
  endShape();
}

function collisonWithButton(x){
  console.log("going in heres")

}