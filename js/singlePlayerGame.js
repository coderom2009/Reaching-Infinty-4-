class SPGame{
  constructor(){
    this.score= 0
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = 0;
  }

  startSP(){
    playerCharSP = createSprite(windowWidth/2,windowHeight-windowHeight/4-75,75,75)
    playerCharSP.addImage(img_data[0].selected,"player")
    playerCharSP.scale = 0.35
    platformGroup = new Group();        
  }

  addPlatforms(arr,so,rand,tCanGo){

    if(arr[0].t_will_c==which_l_play){
      if(obs_dif_data[0].dif_l!=4&&arr[0].t_will_c+1<=11){
        console.log("opopo")
        arr[0].t_will_c +=1 
      }else if(obs_dif_data[0].dif_l==4){
        console.log("opopo")
        arr[0].t_will_c +=1 
      }
    }

    if(arr[0].l_tn>arr[0].t_will_c){
      tCanGo = false
    }

    if(tCanGo==true&&obs_dif_data[0].dif_l != 0){

      if(so == rand){
        console.log("same no...");
      }else{
        switch(rand){
        case 1:console.log("Type 1"),so = 1;
        break;
    
        case 2:console.log("Type 2"),so = 2;
        break;
    
        case 3:console.log("Type 3"),so = 3;
        break;
    
        case 4:console.log("Type 4"),so = 4;
        break;
    
        default: break;
      }
      so=rand
      s=so
      this.creating_multi(arr,so);
      }
    }

  }


  creating_multi(array,val){

    var x,y
    var highestY_tn = 0

    if(array[0].l_tn==0){
      highestY_tn = windowHeight-windowHeight/4-195
    }else if(array[0].l_tn!=0){
      highestY_tn = (windowHeight-windowHeight/4-195)-(array[0].l_tn*250)
    }

    if(array[0].l_tn==0){
      base = createSprite(windowWidth/2,windowHeight-windowHeight/4+55,windowWidth,30)
      platformGroup.add(base)
      base.setCollider("rectangle",0,50,base.width,base.height+100)
    }

    if(val == 1){ //creation of 3 blocks

    console.log("3 blocks platform")
    array.splice(array.length,0,{level: array[0].l_tn+1,type: 1,s1:null,s2:null,s3:null})
    array[0].l_tn +=1

    for(var i=1; i<4 ; i++){

      if(i==1){

        x=windowWidth/2-380
        y=highestY_tn;

        array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s1 = createSprite(x,y,215,27)
        array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s1)
        console.log("block: 1",x,y)
            
      }else if(i==2){

        x=windowWidth/2
        y=highestY_tn;

        array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s2 = createSprite(x,y,215,27)
        array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s2)
        console.log("block: 2",x,y)

      }else if(i==3){

        x=windowWidth/2+380
        y=highestY_tn;

        array[array.length-1].s3 = "platform_L"+ array[0].l_tn +"_P"+i
        array[array.length-1].s3 = createSprite(x,y,215,27)
        array[array.length-1].s3.setCollider("rectangle",0,0,215,27)
        platformGroup.add(array[array.length-1].s3)
        console.log("block: 3",x,y)

            
      }
    }
        
      
    array[0].p_tn +=3

    }else if((val == 2||val == 3||val == 4)){//creation of 2 blocks

      console.log("2 blocks platform")
      array.splice(array.length,0,{level: array[0].l_tn+1,type: val,s1:null,s2:null})
      array[0].l_tn +=1


      for(var i=1; i<3 ; i++){

        if(i==1){

          if(val == 2){
            x=windowWidth/2-190
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }else if( val == 3){
            x=windowWidth/2-380
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }else if(val == 4){
            x=windowWidth/2
            y=highestY_tn;
            array[array.length-1].s1 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s1 = createSprite(x,y,215,27)
            array[array.length-1].s1.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s1)
            console.log("block: 1",x,y)
          }
              
        }else if(i==2){
          
          if(val == 2){
            x=windowWidth/2+190
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }else if( val == 3){
            x=windowWidth/2
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }else if(val == 4){
            x=windowWidth/2+380
            y=highestY_tn;
            array[array.length-1].s2 = "platform_L"+ array[0].l_tn +"_P"+i
            array[array.length-1].s2 = createSprite(x,y,215,27)
            array[array.length-1].s2.setCollider("rectangle",0,0,215,27)
            platformGroup.add(array[array.length-1].s2)
            console.log("block: 2",x,y)
          }
        }
      }
        
      array[0].p_tn +=2

    }else{
      console.log("Error occured !!!")
    }
  }
    
  addObstacles(array_platforms,array_obs_d,current_level,last_platform){
    if(current_level<array_platforms.length-1){ 
      if(array_obs_d[0].dif_l<=2&&array_obs_d[0].dif_l>=1){//pre-indication ** ** ** levels
        if(current_level==last_platform){//pre-indication ** ** **
          if(array_obs_d[0].dif_l==1){//easy level
            if(array_obs_d[0].c_obs_name !="obs"+current_level){
              array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
              array_obs_d[0].c_obs_name = "obs"+current_level;
            }
            if(obs_group.length>1){
              obs_group[0].remove()
            }
            
            var r = Math.round(random(1,3))
            if(array_platforms[current_level+1].type!=1){
              if(r==3){
                r=2
              }
            }
            
            var pos_obs_x;
            var pos_obs_y;
            if(r==1){
              pos_obs_x = array_platforms[current_level+1].s1.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
            }else if(r==2){
              pos_obs_x = array_platforms[current_level+1].s2.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
            }else if(r==3){
              pos_obs_x = array_platforms[current_level+1].s3.position.x+Math.round(random(-20,20));
              pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
            }
            
            if(array_obs_d[array_obs_d.length-1].made == false){
              array_obs_d[array_obs_d.length-1].platform = r;
              array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y)
              array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
              array_obs_d[array_obs_d.length-1].obs.scale = 1
              array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
              array_obs_d[array_obs_d.length-1].platform = r;
              obs_group.add(array_obs_d[array_obs_d.length-1].obs)
              array_obs_d[array_obs_d.length-1].made = true;
            }
            
            if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
              playerCharSP.collide(obs_group[0]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();        
              }

            }
          }else if(array_obs_d[0].dif_l==2){//normal level
            
            if(array_obs_d[0].c_obs_name !="obs"+current_level){
              array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
              array_obs_d[0].c_obs_name = "obs"+current_level;
            }
            if(obs_group.length>2){
              obs_group[0].remove()
            }
            
            var r = Math.round(random(1,3))
            if(array_platforms[current_level+1].type!=1){
              if(r==3){
                r=2
              }
            }
            
            var pos_obs_x;
            var pos_obs_y;
            var random_x_pos = Math.round(random(-57.5,57.5))
            if(random_x_pos>0){
              random_x_pos = Math.round(random(57.5,0))
            }else{
              random_x_pos = Math.round(random(-57.5,0))
            }
            if(r==1){
              pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
            }else if(r==2){
              pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
            }else if(r==3){
              pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
              pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
            }
            if(array_obs_d[array_obs_d.length-1].made == false){
              array_obs_d[array_obs_d.length-1].platform = r;
              array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y)
              array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
              array_obs_d[array_obs_d.length-1].obs.scale = 1
              array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle")
              array_obs_d[array_obs_d.length-1].platform = r;
              obs_group.add(array_obs_d[array_obs_d.length-1].obs)
              array_obs_d[array_obs_d.length-1].made = true;
            }
            if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
              playerCharSP.collide(obs_group[0]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();          
              }

            }
            
            if(obs_group.length<=2&&obs_group[1]!=null||obs_group[1]!=undefined){

              playerCharSP.collide(obs_group[1]); 
              if(playerCharSP.overlap(obs_group[0])){
                this.gameOver();           
              }

            }
          }
        }
      }else if(array_obs_d[0].dif_l>=3&&array_obs_d[0].dif_l<=4&&current_level==last_platform){//post-indication ** ** ** levels
        if(array_obs_d[0].dif_l==3){
          if(array_obs_d[0].c_obs_name !="obs"+current_level){
            array_obs_d.splice(1,1,{obs: "obs"+current_level,obs_small: "obs_small"+current_level,platform:0,made: false})
            array_obs_d[0].c_obs_name = "obs"+current_level;
          }
          if(obs_group.length>2){
            obs_group[0].remove()
          }
          if(obs_group_small.length>2){
            obs_group_small[0].remove()
          }
          
          var r = Math.round(random(1,3))
          if(array_platforms[current_level+1].type!=1){
            if(r==3){
              r=2; //local
            }
          }
          var pos_obs_x;
          var pos_obs_y;
          var random_x_pos = Math.round(random(-57.5,57.5))
          var pos_obs_x_s;
          var img_small_obs;
          var where_place = Math.round(random(1,4))
          if(exlevelData[current_level+1].type>2&&where_place==4){
            where_place = 3;
          }
          if(exlevelData[current_level+1].type%2 != 0){ //odd platform type: 1 or 3
            if(where_place%2!=0){ //add w_p is odd 1,3
              if(where_place==1){ //w_p is 1
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }else{ //wp is 3
                pos_obs_x_s = exlevelData[current_level+1].s2.position.x+107.5+10;
              }
              img_small_obs = obs_img_r;
            }else{ //subtract w_p is even 2,4
              if(where_place==2){ //w_p is 2
                pos_obs_x_s = exlevelData[current_level+1].s2.position.x-107.5-10;
              }else{ //wp is 4
                pos_obs_x_s = exlevelData[current_level+1].s3.position.x-107.5-10;
              }
              img_small_obs = obs_img_l;
            }
            
          }else{ //even platform type: 2 or 4
            if(where_place%2!=0){ //subtract w_p is odd 1,3
              if(where_place==1){ //w_p is 1
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x-107.5-10;
              }else{ //wp is 3
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x-107.5-10;
              }
              img_small_obs = obs_img_l;
            }else{ //add w_p is even 2,4
              if(where_place==2){ //w_p is 2
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }else{ //wp is 4
                pos_obs_x_s = exlevelData[current_level+1].s1.position.x+107.5+10;
              }
              img_small_obs = obs_img_r;
            }
          }
          if(random_x_pos>0){
            random_x_pos = Math.round(random(57.5,0))
          }else{
            random_x_pos = Math.round(random(-57.5,0))
          }
          if(obs_group[1]!=undefined){
            if(Math.round(random(1,0))%2==0){// if it will be 1
              //r = obs_group[1].
            }
          }
          if(r==1){
            pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
          }else if(r==2){
            pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
          }else if(r==3){
            pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
          }
          if(array_obs_d[array_obs_d.length-1].made == false){
            array_obs_d[array_obs_d.length-1].platform = r;
            array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y,85,74)
            array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle",0,0,87,76)
            array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
            array_obs_d[array_obs_d.length-1].platform = r;
            obs_group.add(array_obs_d[array_obs_d.length-1].obs)
            //small obs
            array_obs_d[array_obs_d.length-1].obs_small = createSprite(pos_obs_x_s,exlevelData[current_level+1].s1.position.y)
            array_obs_d[array_obs_d.length-1].obs_small.addImage(img_small_obs)
            obs_group_small.add(array_obs_d[array_obs_d.length-1].obs_small);
            array_obs_d[array_obs_d.length-1].made = true;
          }
          if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
            playerCharSP.collide(obs_group[0]); 
            if(playerCharSP.overlap(obs_group[0])||playerCharSP.overlap(obs_group_small)){
              this.gameOver();
            }
          }
          
          if(obs_group.length==2&&obs_group[1]!=null||obs_group[1]!=undefined){
            playerCharSP.collide(obs_group[1]); 
            if(playerCharSP.overlap(obs_group[1])||playerCharSP.overlap(obs_group_small)){
              this.gameOver();
            }
          }
          
        }else if(array_obs_d[0].dif_l==4){
          if(array_obs_d[0].c_obs_name !="obs"+current_level){
            array_obs_d.splice(1,1,{obs: "obs"+current_level,pointing_towrads:`not`,platform:0,made: false})
            array_obs_d[0].c_obs_name = "obs"+current_level;
          }
          if(obs_group.length>2){
            obs_group[0].remove()
          }
          
          var r = Math.round(random(1,3))
          if(array_platforms[current_level+1].type!=1){
            if(r==3){
              r=2; //local
            }
          }
          
          var pos_obs_x;
          var pos_obs_y;
          var random_x_pos = Math.round(random(-57.5,57.5))
          if(random_x_pos>0){
            random_x_pos = Math.round(random(57.5,0))
          }else{
            random_x_pos = Math.round(random(-57.5,0))
          }
          if(r==1){
            pos_obs_x = array_platforms[current_level+1].s1.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s1.position.y-50;
          }else if(r==2){
            pos_obs_x = array_platforms[current_level+1].s2.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s2.position.y-50;
          }else if(r==3){
            pos_obs_x = array_platforms[current_level+1].s3.position.x+random_x_pos;
            pos_obs_y = array_platforms[current_level+1].s3.position.y-50;
          }
          if(array_obs_d[array_obs_d.length-1].made == false){
            array_obs_d[array_obs_d.length-1].platform = r;
            array_obs_d[array_obs_d.length-1].obs = createSprite(pos_obs_x,pos_obs_y,85,74)
            array_obs_d[array_obs_d.length-1].obs.setCollider("rectangle",0,0,87,76)
            array_obs_d[array_obs_d.length-1].obs.addImage(obs_img_post)
            array_obs_d[array_obs_d.length-1].platform = r;
            obs_group.add(array_obs_d[array_obs_d.length-1].obs)
            array_obs_d[array_obs_d.length-1].made = true;
          }
          if(obs_group.length>=1&&obs_group[0]!=null||obs_group[0]!=undefined){
            playerCharSP.collide(obs_group[0]); 
            if(playerCharSP.overlap(obs_group[0])){
              this.gameOver();
            }
          }
          
          if(obs_group.length==2&&obs_group[1]!=null||obs_group[1]!=undefined){
            playerCharSP.collide(obs_group[1]); 
            if(playerCharSP.overlap(obs_group[1])){
              this.gameOver();
            }
          }
          if(which_l_play>=16&&which_l_play%3==0){
            outer_sp.position.y = (windowHeight-windowHeight/4-195)-(which_l_play*250)
          }
        }
      }
    }
  }

  addCoins(coins_data,array_platforms_c,coins_group_sp,current_level,last_platform,obs_data){  //current level is which_l/_play      //last_platform is last platform collided with
    if(current_level<array_platforms_c.length-1){ 
      if(current_level==last_platform){
        if(coins_data[0].coin_name !="coin"+current_level){
          coins_data.splice(1,1,{coin_s: "coin"+current_level,platform:0,made: false})
          coins_data[0].coin_name = "coin"+current_level;
        }
        if(coins_group_sp.length>2){
          coins_group_sp[0].remove()
        }
        var random_p,final_r,pos_obs_x,pos_obs_y;
        window.random_p = random_p; //making it global variable
        if(obs_data[0].dif_l==1){ //level: easy
          random_p = Math.round(random(1,5))
        }else if(obs_data[0].dif_l==2){ //level: normal
          random_p = Math.round(random(1,4))
        }else if(obs_data[0].dif_l==3){ //level: hard
          random_p = Math.round(random(1,3))
        }else if(obs_data[0].dif_l==4){ //level: infinty levels
          random_p = Math.round(random(1,Math.round(random(2,5))))
        }
        if(random_p==5||random_p==3){
          final_r = 1;
        }else if(random_p==4||random_p==2){
          final_r = 2;
        }else{
          final_r = 3;
        }
        if(array_platforms_c[current_level+1].type!=1){
          if(final_r==3){
            final_r = 2;
          }
        }
        //
        if(final_r==obs_data[obs_data.length-1].platform){
          switch(obs_data[obs_data.length-1].platform){
            case 1:final_r=2;
            break;
            case 2:final_r=1;
            break;
            case 3:final_r=1;
            break;
            default:final_r=2;
            break;
          }
        }
        if(final_r==1){
          pos_obs_x = array_platforms_c[current_level+1].s1.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s1.position.y-50;
        }else if(final_r==2){
          pos_obs_x = array_platforms_c[current_level+1].s2.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s2.position.y-50;
        }else if(final_r==3){
          pos_obs_x = array_platforms_c[current_level+1].s3.position.x+Math.round(random(-57.5,57.5));
          pos_obs_y = array_platforms_c[current_level+1].s3.position.y-50;
        }
        if(random_p==2&&coins_data[1].made == false){
          coins_data[coins_data.length-1].platform = final_r;
          coins_data[coins_data.length-1].coin_s = createSprite(pos_obs_x,pos_obs_y,85,74)
          coins_data[coins_data.length-1].coin_s.setCollider("rectangle",0,0,70,70)
          coins_data[coins_data.length-1].coin_s.addImage(dollar_coin_img)
          coins_data[coins_data.length-1].platform = final_r;
          coins_group_sp.add(coins_data[coins_data.length-1].coin_s)
          coins_data[coins_data.length-1].made = true;
        }
        if(coins_group_sp.length==1&&coins_group_sp[0]!=null||coins_group_sp[0]!=undefined){
          playerCharSP.overlap(coins_group_sp, function(collector, collected) {
            coins+=5;
            collected.remove();
          });
          
        }
        
      }
    }    
  }

  gameOver(){
    
    came_from_play_lose = true
    navWindow = ty[0];
    this.clear_up_sp();
    isSPclicked == false
    onLastScreen = "lose";
  }

  clear_up_sp(){
    if(exlevelData.length!=1){
      for(var io = 1;io<exlevelData.length;io++){
          if(exlevelData[io].type==2||exlevelData[io].type==3||exlevelData[io].type==4){
              for(var iq = 1;iq<=2;iq++){
                  if(iq==1){
                      exlevelData[io].s1.remove();  
                  }else if(iq==2){
                      exlevelData[io].s2.remove(); 
                      exlevelData.splice(io,1,)
                  }
              }
          }else if(exlevelData[io].type==1){
              for(var iq = 1;iq<=3;iq++){
                  if(iq==1){
                      exlevelData[io].s1.remove();  
                  }else if(iq==2){
                      exlevelData[io].s2.remove();
                  }else if(iq==3){
                      exlevelData[io].s3.remove();
                      exlevelData.splice(io,1,)
                  }
              }
          }
      }
      for(var ti = 0;ti<obs_group_small.length;ti++){
        obs_group_small[ti].remove()
      }
      base.remove()
      playerCharSP.position.x = windowWidth/2
      playerCharSP.position.y = windowHeight-windowHeight/4-75
      if(obs_dif_data.length>=1){
          for(var po=1;po<obs_dif_data.length;po++){
              obs_dif_data[po].obs.remove()
          }
      }
    }
  }
}