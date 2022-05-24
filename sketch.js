var pizzaMan, leftVeh, rightVeh, pizza, npc, bg, houseBg,  frontWalk, backWalk
var bound1, bound2, bound3, bound4,pizzaPlace, houseBlock1, houseBlock2,houseBlock3
var houses = []
var npcs = []
var houseNum, touchedHouse
var gameState = "start"
var oc = true
var fcc = 1 
var t = true
var dMissed = false
cTouch = false
var money = 10
var move = true
var bounds, cars
var vCar1, vCar2, vCar3


function preload(){
    bg = loadImage ("assets/map.png")
    frontWalk = loadAnimation("assets/front walk1.png","assets/front walk2.png","assets/front walk3.png","assets/front walk4.png")
    backWalk = loadAnimation("assets/back walk1.png","assets/back walk2.png","assets/back walk3.png","assets/back walk4.png")
    leftWalk = loadAnimation("assets/left walk1.png","assets/left walk2.png","assets/left walk3.png","assets/left walk4.png")
    rightWalk = loadAnimation("assets/right walk1.png","assets/right walk2.png","assets/right walk3.png","assets/right walk4.png")
}
function setup(){
    createCanvas (1400, 700)

    bound1 = createSprite(680,110,1200,2)
    bound1.shapeColor="blue"
    //bound1.visible = false

    bound2 = createSprite(83,300,2,380)
    bound2.shapeColor="blue"
    //bound2.visible = false

    bound3 = createSprite(1270,350,2,500)
    bound3.shapeColor="blue"
    //bound3.visible = false

    bound4 = createSprite(836,600,866,2)
    bound4.shapeColor="blue"
    //bound4.visible = false

    
    bound5 = createSprite(404,646,2,90)
    bound5.shapeColor="blue"
    bound5.visible = false
    
    bound6 = createSprite(355,688,100,2)
    bound6.shapeColor="blue"
    bound6.visible = false

    houseBlock1 = createSprite(315,302,266,223)
    houseBlock1.shapeColor="blue"
    houseBlock1.visible = false

    houseBlock2 = createSprite(707,350,293,320)
    houseBlock2.shapeColor="blue"
    houseBlock2.visible = false

    houseBlock3 = createSprite(1071,350,250,319)
    houseBlock3.shapeColor="blue"
    houseBlock3.visible = false

    pizzaPlace = createSprite(154,579,300,199)
    pizzaPlace.shapeColor="blue"
    pizzaPlace.visible = false

    bounds = new Group()

    cars = new Group()

    bounds.add(bound1)
    bounds.add(bound2)
    bounds.add(bound3)
    bounds.add(bound4)
    bounds.add(bound5)
    bounds.add(bound6)
    bounds.add(pizzaPlace)

    vCar1= createSprite(120,Math.round(random(130,450)),10,20)
    vCar1.shapeColor = "blue"
    vCar1.velocityY = Math.round(random(3,7));

    cars.add(vCar1)

    vCar2= createSprite(500,Math.round(random(130,580)),10,20)
    vCar2.shapeColor = "blue"
    vCar2.velocityY = Math.round(random(3,7));

    cars.add(vCar2)

    vCar3= createSprite(900,Math.round(random(130,580)),10,20)
    vCar3.shapeColor = "blue"
    vCar3.velocityY = Math.round(random(3,7));

    cars.add(vCar3)
    
    

    


    for (var h = 0; h < 6; h++){
        house1 = createSprite(60, 400 - h*62, 60, 20)
        houses.push (house1)
        npc1 = createSprite (house1.x,house1.y,30,30)
        npc1.shapeColor = "green"
        npc1.visible = false
        npcs.push (npc1)
    }

    for (var h = 0; h < 15; h++){
        house2 = createSprite(120 + h*82, 80, 20, 70)
        houses.push (house2)
        npc2 = createSprite (house2.x,house2.y,30,30)
        npc2.shapeColor = "green"
        npc2.visible = false
        npcs.push (npc2)

    }

    for (var h = 0; h < 8; h++){
        house3 = createSprite(1290, 540 - h*62, 60, 20)
        houses.push (house3)
        npc3 = createSprite (house3.x,house3.y,30,30)
        npc3.shapeColor = "green"
        npc3.visible = false
        npcs.push (npc3)
    }

    for (var h = 0; h < 11; h++){
        house4 = createSprite(442 + h*82, 620, 20, 70)
        houses.push (house4)
        npc4 = createSprite (house4.x,house4.y,30,30)
        npc4.shapeColor = "green"
        npc4.visible = false
        npcs.push (npc4)
    }

    for (var h = 0; h < 2; h++){
        house5 = createSprite(205, 320- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
    }

    for (var h = 0; h < 2; h++){
        house6 = createSprite(425, 320- h*62, 70, 20)
        houses.push (house6)
        npc6 = createSprite (house6.x,house6.y,30,30)
        npc6.shapeColor = "green"
        npc6.visible = false
        npcs.push (npc6)
    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(230 + h*85, 200, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
    }

    for (var h = 0; h < 3; h++){
        house8 = createSprite(230 + h*85, 390, 20, 70)
        houses.push (house8)
        npc8 = createSprite (house8.x,house8.y,30,30)
        npc8.shapeColor = "green"
        npc8.visible = false
        npcs.push (npc8)
    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(585, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(830, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
    }
    
    for (var h = 0; h < 3; h++){
        house7 = createSprite(623 + h*85, 192, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(615 + h*85, 480, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
    }
    
    for (var h = 0; h < 4; h++){
        house5 = createSprite(965, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
    }

    for (var h = 0; h < 4; h++){
        house5 = createSprite(1175, 440- h*62, 70, 20)
        houses.push (house5)
        npc5 = createSprite (house5.x,house5.y,30,30)
        npc5.shapeColor = "green"
        npc5.visible = false
        npcs.push (npc5)
    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(985 + h*85, 192, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
    }

    for (var h = 0; h < 3; h++){
        house7 = createSprite(985 + h*85, 480, 20, 70)
        houses.push (house7)
        npc7 = createSprite (house7.x,house7.y,30,30)
        npc7.shapeColor = "green"
        npc7.visible = false
        npcs.push (npc7)
    }

    //console.log(houses.length)

    //text("First order"+10,300,300)

    pizzaMan = createSprite(370,650,30,30)
    pizzaMan.scale = 0.20
    pizzaMan.addAnimation("front", frontWalk)
    pizzaMan.addAnimation("back", backWalk)
    pizzaMan.addAnimation("left", leftWalk)
    pizzaMan.addAnimation("right", rightWalk)

    pizzaMan.debug = true
    pizzaMan.setCollider("rectangle",0,0,120,220)

    console.log(bounds)
   
}
function draw(){
   
    background(bg)


    houses.visible = false
    drawSprites()

    pizzaMan.bounceOff(pizzaPlace)
    pizzaMan.bounceOff(bound5)
    pizzaMan.bounceOff(bound6)

    pizzaMan.bounceOff(houseBlock1)
    pizzaMan.bounceOff(houseBlock2)
    pizzaMan.bounceOff(houseBlock3)

    for(i=0;i<houses.length;i++){
        fill("white")
        text(i,houses[i].position.x,houses[i].position.y)

    }

    if(keyDown(UP_ARROW)&&move == true){
        pizzaMan.y = pizzaMan.y-2
        pizzaMan.changeAnimation("back")
    }

    if(keyDown(DOWN_ARROW)&&move == true){
        pizzaMan.y = pizzaMan.y+2
        pizzaMan.changeAnimation("front")
    }

    if(keyDown(LEFT_ARROW)&&move == true){
        pizzaMan.x = pizzaMan.x-2
        pizzaMan.changeAnimation("left")

    }

    if(keyDown(RIGHT_ARROW)&&move == true){
        pizzaMan.x = pizzaMan.x+2
        pizzaMan.changeAnimation("right")

    }

    text("Money: "+money,10,20)

    if(gameState == "start" && oc == true){
        houseNum = Math.round(random(0,80))
        oc = false 
        gameState = "play"
        
        
    }

    if(oc == false ){
        text("You have a new order from:",100,600)
        text("House "+ houseNum,100, 620)
        //console.log("test")
        //console.log(frameCount)

        startTimer()
        
        

    }

    if(gameState == "play"){
        touchedHouse = order()
        //console.log(houseNum, touchedHouse)   
        if(houseNum == touchedHouse){
            fill("blue")
            text("Yay",700,350)
            money = money + 10
            fcc = 0
            pizzaMan.x = 370 
            pizzaMan.y = 650
            gameState = "start"
            oc = true

        }

        if(fcc == 900){
            fill("red")
            text("Time up!",100,500)
            stopTimer()
            dMissed = true
        }

        if (dMissed == true||(hTouch == true &&houseNum !== touchedHouse)||cTouch == true){
            money = money - 20
            fcc = 0
            dMissed = false
            t = true
            gameState = "start"
            oc = true
            cTouch = false
            pizzaMan.x = 370 
            pizzaMan.y = 650
        }

        if (pizzaMan.isTouching(cars)){
            cTouch = true
        }

        if(money<0){
            text("Game Over",700,350)
            gameState = "gameOver"
        }
    }

    if (gameState == "gameOver"){
        stopTimer()
        move = false
        vCar1.velocityY = 0
        vCar2.velocityY = 0
        vCar3.velocityY = 0

    }

    //console.log(cars)
    //console.log(bounds)
    if (vCar1.isTouching(bounds)){
        vCar1.velocityY = vCar1.velocityY*-1
    }

    if (vCar2.isTouching(bounds)){
        vCar2.velocityY = vCar2.velocityY*-1
    }

    if (vCar3.isTouching(bounds)){
        vCar3.velocityY = vCar3.velocityY*-1
    }

}

function order(){

    for(i=0;i<houses.length;i++){
        //console.log(houses[i].position.x)
        if(pizzaMan.isTouching(houses[i])){
            //console.log(i,houses[i].position)
            npcs[i].visible = true
            hTouch = true
            return i
            
            
        }

        if(!pizzaMan.isTouching(houses[i])){
            npcs[i].visible = false
            hTouch = false
        }


    }
    
}

function startTimer(){
    if (t==true){
        fcc = fcc+1
        //console.log(fcc)
    }
    
}

function stopTimer(){
    t = false
    
}



