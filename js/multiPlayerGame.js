class MPGame{
    constructor(){
        this.score = 0
        this.positionX = 0
        this.positionY= 0
        this.name = null
        this.index= 0

    }

    startMP(){
        playerMP = new Player()
        player_mp_1 = createSprite(windowWidth/2-85,windowHeight-windowHeight/4,75,75)
        player_mp_1.addImage(playerCharSP_IMG)
        player_mp_1.scale = 0.35

        player_mp_2 = createSprite(windowWidth/2+85,windowHeight-windowHeight/4,75,75)
        player_mp_2.addImage(playerCharSP_IMG2)
        player_mp_2.scale = 0.35

        obsGroup1 = new Group();
        this.addSprites(obsGroup1,15,obsAlien1_img,0.5);
       obsGroup2 = new Group();
        this.addSprites(obsGroup2,10,obsAlien2_img,0.7);
        coinGroup = new Group();
        this.addSprites(coinGroup,25,coinImg,0.9);
        icyGroup = new Group();
        this.addSprites(icyGroup,6,icyImg,0.8);
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++){
          var x, y;
    
          //C41 //SA
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
    }


    addPlatforms(arr,spriteG,so,rand){
      
      
        var canExe = true
        
        if(frameCount%100 == 0&&canExe==true){
          //var rand = Math.round(random(1,4))
          
          if(so == rand){
            console.log("same no...");
          }else{
            switch(rand){
              case 1:console.log("1"),so = 1;
              break;
      
              case 2:console.log("2"),so = 2;
              break;
      
              case 3:console.log("3"),so = 3;
              break;
      
              case 4:console.log("4"),so = 4;
              break;
      
              default: break;
            }
            so=rand
            s=so
            //console.log(platformsCreated,levelsCreated)
            //start
            
            //arr.splice(arr.length,0,{t:2});
            this.creating_multi(arr,so,canExe,spriteG);
            
  
  
          }
          
          
          //console.log(canExe)
        }
         
          //done : checking val and printing in consaoel
          //next: making var d_2,d_3,x,y. Splicing the array and making spro=ites
        
        
        
  
      }
  
  
      creating_multi(array,val,canGo,sG){
  
        var platformsCreated = array[0].p_tn;
        var levelsCreated = array[0].l_tn;
        var timesCanExe = true
        var var_1 ,var_2 ,var_3
        var var_input
        var x,y
        var highestY_tn = 0
        var w
        window.w =w;
  
        if(array[0].l_tn==0){
          highestY_tn = windowHeight-windowHeight/4+55
          //console.log(highestY_tn)
        }else if(array[0].l_tn!=0){
          highestY_tn = (windowHeight-windowHeight/4+55)-(array[0].l_tn*250)
        }
  
  
        if(val == 1&&timesCanExe==true){ //creation of 3 blocks
          //var_1 = "opvar"
          //var_1 = createSprite(100,100,110,110)
          for(var i=1; i<4 ; i++){
            console.log(i)
            if(i==1){
              x=windowWidth/2-380
              y=highestY_tn;                                       //done
              w = createSprite(x,y,215,27)
              console.log(x,y)
            }else if(i==2){
              x=windowWidth/2
              y=highestY_tn;
              w = createSprite(x,y,215,27)
              console.log(x,y)
            }else if(i==3){
              x=windowWidth/2+380
              y=highestY_tn;
              w = createSprite(x,y,215,27)
              console.log(x,y)
            }
          }
          console.log("3 block")
          array.splice(array.length,0,{level: array[0].l_tn+1,type: 1})
          array[0].l_tn +=1
  
        }else if((val == 2||val == 3||val == 4)&&timesCanExe==true){//creation of 2 blocks
  
  
          for(var i=1; i<3 ; i++){
  
            console.log(i)
  
            if(i==1){
  
              if(val == 2){
                x=windowWidth/2-380
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }else if( val == 3){
                x=windowWidth/2
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }else if(val == 4){
                x=windowWidth/2-190
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }
              
            }else if(i==2){
  
              if(val == 2){
                x=windowWidth/2
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }else if( val == 3){
                x=windowWidth/2+380
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }else if(val == 4){
                x=windowWidth/2+190
                y=highestY_tn;
                w = createSprite(x,y,215,27)
                console.log(x,y)
              }
              
            }
          }
          console.log("2 block")
          array.splice(array.length,0,{level: array[0].l_tn+1,type: 1})
          array[0].l_tn +=1
          
  
        }else{
          console.log("Erroe occured !!!")
        }
      }
}