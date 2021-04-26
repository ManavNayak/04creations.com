var bg, brand, brandImg, logo, logoImg, home, about, service, store, sup, c, cImg, you;

var gameState = "HOME";

function preload(){

   bg = loadImage("bg.jpeg");
   brandImg = loadImage("brand.png");
   logoImg = loadImage("logo.jpg");
   cImg = loadImage("c.png");

}

function setup() {
createCanvas(windowWidth, windowHeight);

  brand = createSprite(windowWidth/2 , windowHeight/2 + 365 , 100, 100);
  brand.addAnimation("brand", brandImg);
  brand.scale = 9;

  logo = createSprite(windowWidth/2 - 2650 , windowHeight/2 - 1275, 100, 100);
  logo.addAnimation("logo", logoImg);
  logo.scale = 4.5;

  c = createSprite(windowWidth/2 - 2700 , windowHeight/2 + 1425, 100, 100);
  c.addAnimation("c", cImg);
  c.scale = 0.65;

  home = createButton("Home");
  home.position(windowWidth/2 - 2000 , windowHeight/2 - 1425);
  home.size(250,100)
  home.style("font-size","55px");
  home.style("background-color","#000000")
  home.style("color","#ffffff");

  about = createButton("About Us");
  about.position(windowWidth/2 - 1300 , windowHeight/2 - 1425);
  about.size(270,100)
  about.style("font-size","53px");
  about.style("background-color","#000000")
  about.style("color","#ffffff");

  am = createButton("Anthem");
  am.position(windowWidth/2 - 600 , windowHeight/2 - 1425);
  am.size(270,100)
  am.style("font-size","55px");
  am.style("background-color","#000000")
  am.style("color","#ffffff");
  
  service = createButton("Service");
  service.position(windowWidth/2 + 100 , windowHeight/2 - 1425);
  service.size(250,100)
  service.style("font-size","52px");
  service.style("background-color","#000000")
  service.style("color","#ffffff");

  store = createButton("Store");
  store.position(windowWidth/2 + 800 , windowHeight/2 - 1425);
  store.size(240,100)
  store.style("font-size","55px");
  store.style("background-color","#000000")
  store.style("color","#ffffff");

  sup = createButton("Support");
  sup.position(windowWidth/2 + 1500 , windowHeight/2 - 1425);
  sup.size(260,100)
  sup.style("font-size","53px");
  sup.style("background-color","#000000")
  sup.style("color","#ffffff");

  you = createButton("YouTube");
  you.position(windowWidth/2 + 2375 , windowHeight/2 + 1375);
  you.size(260,100)
  you.style("font-size","53px");
  you.style("background-color","#000000")
  you.style("color","#ffffff");

}

function draw() {
  background(bg);

  textSize(80);
  fill("white")
  stroke(15);
  text("Copyright 2021" , windowWidth/2 - 2600 , windowHeight/2 + 1450);
  text("Subscribe to our channel on" , windowWidth/2 + 1350 , windowHeight/2 + 1450);

   if(gameState === "HOME"){
     
      brand.visible = true;

   }

   you.mousePressed(()=>{

      window.open("https://www.youtube.com/channel/UCujaU8f2xCEJAY9F_tEGbcg?sub_confirmation=1")

    });

    home.mousePressed(()=>{

     gameState = "HOME";

    });

    about.mousePressed(()=>{

      gameState = "ABOUT";
      aboutScreen();
 
    });

    am.mousePressed(()=>{

      gameState = "AM";
      amScreen();
 
    });

    service.mousePressed(()=>{

      gameState = "SERVICE";
      serviceScreen();
 
    });

    store.mousePressed(()=>{

      gameState = "STORE";
      storeScreen();
 
    });

    sup.mousePressed(()=>{

      gameState = "SUP";
      supScreen();
 
    });

   console.log(gameState);
  
   drawSprites();
}

function aboutScreen(){

    if(gameState === "ABOUT"){

       brand.visible = false;
       
       textSize(100);
       fill("white")
       stroke(15);
       text("04 CREATIONS" , windowWidth/2 - 500, windowHeight/2 - 500);

    }

}

function amScreen(){

   if(gameState === "AM"){

      brand.visible = false;

   }

}

function serviceScreen(){

   if(gameState === "SERVICE"){

      brand.visible = false;

   }

}

function storeScreen(){

   if(gameState === "STORE"){

      brand.visible = false;

   }

}

function supScreen(){

   if(gameState === "SUP"){

      brand.visible = false;

   }

}
