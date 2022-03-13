var img, y =0//bg_img;
var s1_home,database;
var navWindow = "welcome"
var ty = ["welcome","play","account","setting","shop","sp","mp","join","create","allHide"]

var opWindow = "welcome"
var op = ["welcome","play","account","setting","shop"]

var which_func_exp;                              //       //done
var el = ["feedback_h","wh_new","play_button","levels","sp_button","account","re-name","elements"]

var isEditClick = false;

var num = 0

var coins = 0, highScore = 0,score = 0;

var isProClick = false;
var gameV

var player,sp,mp,fp

var times = 0,timesExe = 0;

var SPplaying = false;
var MPplaying = false;
var Fplaying = false;
var isSPclicked = false;
var isMPclicked = false;

var playerSP,scoreSP;

var playerCharSP, playerCharSP_IMG,playerCharSP_IMG2,playerCharSP_IMG3,playerCharSP_IMG4

var obsAlien1_img
var obsAlien2_img

var obs1,obs2

var obsGroup1,obsGroup2

//var coin,coinGroup,coinImg
var icy,icyGroup,icyImg
var platform,platformImg,platformGroup
var loadingVal = 0

var rect1,rect2

var exlevelData = [{p_tn:0,l_tn:0,t_will_c:2}]
var obs_dif_data = [{dif_l:0,prob:0.8,c_obs_name:null},{}]
var coins_data = [{coin_name:null,p_n:0}]

var s = 0
var player_mp_1
var player_mp_2

var playerCharSP_IMG2

var playerMP

var mp

var Counting = true;
var fuelLeft = 24;

var which_l_play = 0
var which_l_play_pos = 0 

var lastPlatformCollided = 0

var isResting = false //here

var trans_img

var present_platform = `at_base`

var time_at_start

var time_at_play

var time_took

var time_took_s=0,time_took_m=0

var ex_fm,nx_f

var time_milli_start
var time_milli_play

var final_time

var barrier_1,barrier_2;

var obs_group,obs_group_small
var coin_group

var no_of_obs = 0;

var last_platform_landed_for_obs_det=0;

var f_s;
var f_v

var obs_img_pre
var obs_img_post
var fr_val

var name_p

var times_collided = 0;

var base

var came_from_play_lose = false

var dollar_coin_img

var img_data = [{selected:undefined,l_1:false,l_2:true,l_3:true,l_4:true}]

var outer_sp
var outer_sp_img

var bg_sound

var obs_img_l,obs_img_r

var error_sound,click_sound,jump_sound
var canStop = false

var barrier_3

var trophy,trophy_img



function preload(){
    img = loadImage("./assets/ea_ccexpress.jpeg")
    //bg_img = loadImage("Mountain.png")
    playerCharSP_IMG = loadImage("./assets/char-orange.png")
    playerCharSP_IMG2 = loadImage("./assets/char-blue.png")
    playerCharSP_IMG3 = loadImage("./assets/char-yellow.png")
    playerCharSP_IMG4 = loadImage("./assets/char-pink.png")

    obsAlien1_img = loadImage("./assets/pixlr-bg-result.png")
    obsAlien2_img = loadImage("./assets/alien-clipart-red-7.png")
    coinImg = loadImage("./assets/coin.png")
    icyImg = loadImage("./assets/icy.png")
    platformImg = loadImage("./assets/platform.png")
    trans_img = loadImage("./assets/transparent_img.png")
    obs_img_pre = loadImage("./assets/pre_obs.png");
    obs_img_post = loadImage("./assets/obs_img.png");
    dollar_coin_img = loadImage("./assets/dollar (1).png")
    outer_sp_img = loadImage("./assets/outer space.jpg")
    bg_sound = loadSound("./assets/bg_music.mp3")
    obs_img_l = loadImage("./assets/obs_img_left.png")
    obs_img_r = loadImage("./assets/obs_img_right.png")
    error_sound = loadSound("./assets/mixkit-click-error-1110.wav")
    click_sound = loadSound("./assets/mixkit-select-click-1109.wav")
    jump_sound = loadSound("./assets/mixkit-jumping-2043.wav")
    trophy_img = loadImage("./assets/trophy.png")
    
    
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    img_data[0].selected=playerCharSP_IMG
    database = firebase.database();
    s1_home = new NewNavigate("./assets/orange.png","./assets/char-orange.png","./assets/char-blue.png","./assets/char-yellow.png","./assets/char-pink.png");

    /*swal(
        {
          title: `Current Version: Beta`,
          closeOnClickOutside: true,
          imageUrl:
          "https://i.giphy.com/media/dLmEzHozhc9WbTkwPa/giphy.webp",
          imageSize: "350x350",
          confirmButtonText: "OK",
          button: "Next Update",
          button: true,
          allowOutsideClick: true
        }
    );*/

    

    

    player = new Player()
    sp = new SPGame()
    mp = new MPGame()
    

    //game = new Game();
    //game.getState();
    //background(bg_img);;

    //exlevelData.splice(1,0,{})
    var rtx = 2;
    window.rtx = rtx //

    //exlevelData.splice(exlevelData.length+1,0,{level:0,type:1})

    //sp.startSP();

    outer_sp = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(16*250))
    outer_sp.addImage(outer_sp_img)
    outer_sp.scale = windowWidth/3496


    barrier_1 = createSprite(windowWidth/2-380-(215/2),-800,1,4000)
    barrier_2 = createSprite(windowWidth/2+380+(215/2),-800,1,4000)
    barrier_3 = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(11*250)-50,1,1)
    barrier_1.addImage(trans_img)
    barrier_2.addImage(trans_img)
    barrier_3.addImage(trans_img)
    //barrier_1.debug = true
    barrier_1.setCollider("rectangle",0,0,1,4000)
    //barrier_2.debug = true
    barrier_2.setCollider("rectangle",0,0,1,4000)

    barrier_3.setCollider("rectangle",0,0,windowWidth,100)

    obs_group = new Group()
    obs_group_small = new Group()
    coin_group = new Group()

    bg_sound.play();
    bg_sound.loop();
    bg_sound.setVolume(0.04)

    click_sound.setVolume(0.09)
    error_sound.setVolume(0.09)

    jump_sound.setVolume(0.09)

    trophy = createSprite(windowWidth/2,(windowHeight-windowHeight/4-195)-(10*250)-160)
    trophy.addImage(trophy_img)
    trophy.scale = 0.3
    

    
   
      
}
function draw(){
    

    if(error_sound._playing == true){
        bg_sound.setVolume(0.008)
    }else{
        bg_sound.setVolume(0.04)
    }
    

    
    if(came_from_play_lose==true){
        
        if(exlevelData.length>1){
           sp.clear_up_sp() 
        }
        if(exlevelData.length==1){
            came_from_play_lose = false
            exlevelData[0].p_tn = 0
            exlevelData[0].l_tn = 0
            obs_dif_data[0].dif_l = 0
            obs_dif_data[0].prob = 0.8  // [{dif_l:0,prob:0.8,c_obs_name:null}]
            obs_dif_data[0].c_obs_name = null; 
            obs_dif_data[1] = {};
            timesExe=2
            score = 0
            exlevelData[0].t_will_c = 1;

            outer_sp.position.y = (windowHeight-windowHeight/4-195)-(16*250)
            canStop = false
        }
        
    }



    number()
    

    if((gameV!=null||gameV!=undefined)&&times==0){
       update(gameV+1)
       player.name = "player"+gameV //local saving
       player.index = gameV //local saving
       player.addPlayer(gameV) //saving in database
       times +=1; 
      // console.log(gameV,player);
       name_p = "Player " + gameV;
    }
    
    s1_home.display(name_p,isEditClick,coins,highScore,gameV,bg_sound);
    s1_home.toggleNav(isEditClick,obs_dif_data);


    if(obs_dif_data[0].dif_l==1){
        s1_home.easy_btn.class("btn_levels_1_select")
        if(which_func_exp==el[3]){
            s1_home.easy_btn.class("btn_levels_1_select_focus")
        }
    }else{
        s1_home.easy_btn.class("btn_levels_1")
        if(which_func_exp==el[3]){
            s1_home.easy_btn.class("btn_levels_1_focus")
        }
    }

    

    if(obs_dif_data[0].dif_l==2){
        s1_home.normal_btn.class("btn_levels_2_select")
        if(which_func_exp==el[3]){
            s1_home.normal_btn.class("btn_levels_2_select_focus")
        }
    }else{
        s1_home.normal_btn.class("btn_levels_2")
        if(which_func_exp==el[3]){
            s1_home.normal_btn.class("btn_levels_2_focus")
        }
    }

    if(obs_dif_data[0].dif_l==3){
        s1_home.hard_btn.class("btn_levels_3_select")
        if(which_func_exp==el[3]){
            s1_home.hard_btn.class("btn_levels_3_select_focus")
        }
    }else{
        s1_home.hard_btn.class("btn_levels_3")
        if(which_func_exp==el[3]){
            s1_home.hard_btn.class("btn_levels_3_focus")
        }
    }

    if(obs_dif_data[0].dif_l==4){
        s1_home.extremly_hard_btn.class("btn_levels_4_select")
        if(which_func_exp==el[3]){
            s1_home.extremly_hard_btn.class("btn_levels_4_select_focus")
        }
    }else{
        s1_home.extremly_hard_btn.class("btn_levels_4")
        if(which_func_exp==el[3]){
            s1_home.extremly_hard_btn.class("btn_levels_4_focus")
        }
    }

    
    
    

    //console.log(exlevelData)

    

    


    //console.log(SPplaying,MPplaying,Fplaying,isSPclicked,isMPclicked)

    /*if(isSPclicked == true&loadingVal<width/2-8){
       // console.log(loadingVal);
        loadingVal = loadingVal+5
        loadIcon()
        if(loadingVal ==width/2-8&&timesExe ==0){
            sp.startSP()
            timesExe = timesExe +1
            console.log("working")
            rect1.noFill()

        }
        
    }*/

    if(keyIsDown(UP_ARROW)){

        camera.position.y = camera.position.y - 1;
        y = y -1;
        
        //console.log("op")
        //platformGroup.removeSprites()
        
    }
    if(keyIsDown(DOWN_ARROW)&&(y<0)){

        camera.position.y = camera.position.y + 1;
        y = y +1;
        
        
    }
    
    



    if(isSPclicked == true){
        
        if(timesExe ==0){
            timesExe = timesExe +1;
            sp.startSP();
            //playerCharSP.debug = true
            playerCharSP.setCollider("rectangle",0,0,200,200)
            //playerCharSP.addImage(trans_img)
            time_at_start = hour()*3600+minute()*60+second();
            time_milli_start = millis();

            
            
        }
        if(timesExe==2&&exlevelData.length >2){
            timesExe=3
            console.log("here")
            time_at_start = hour()*3600+minute()*60+second();
            time_milli_start = millis();
            playerCharSP.addImage(img_data[0].selected,"player")

            

        }
        barrier_1.position.y = playerCharSP.position.y
        barrier_2.position.y = playerCharSP.position.y
        image(img,0, -height * 5, width, height * 6);
        
       // console.log("what val"+s)
       

       

        sp.addPlatforms(exlevelData,platformGroup,s,Math.round(random(1,4)),Counting)
        var isFalling = false;

        playerCharSP.collide(platformGroup,playerCharSP.velocity.y = 0)

        /*if(platformGroup.overlap(playerCharSP,canJump=true)){
            console.log("work")
        }else {
            //canJump=false
        }*/

        //right left

        if(platformGroup.overlap(playerCharSP)==true){
            lastPlatformCollided = which_l_play

            if(which_l_play==lastPlatformCollided&&(keyDown("space")||keyDown("w")||keyIsDown(UP_ARROW))&&fuelLeft>0&&isResting==false&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2){
                jump_sound.play()
            }
        }
        
        score = lastPlatformCollided  
        
        
        //console.log(score)
        
        
        if((keyDown("space")||keyDown("w")||keyIsDown(UP_ARROW))&&fuelLeft>0&&isResting==false&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2&&canStop==false){  //here i added: &&obs_dif_data[0].dif_l != 0
            /*for(;(keyDown("space")||keyDown("w")||keyIsDown(UP_ARROW))&&amount>=-8;){
                amount = amount-0.1
                playerCharSP.velocity.y = amount
                console.log(amount)  //amount
            }*/
            //playerCharSP.velocity.y = -8
            //if(isFalling==false){
                playerCharSP.velocity.y = -12
                if(fuelLeft>=1){
                    fuelLeft-=1
                }
            //}
            

            
            
        }else{


            if(obs_dif_data[0].dif_l != 0&&exlevelData.length >2&&canStop==false){
               playerCharSP.velocity.y = 8; 
            }
            
            
        }
        if(platformGroup.overlap(playerCharSP)==false&&playerCharSP.velocity.y==5&&obs_dif_data[0].dif_l != 0&&exlevelData.length >2){
            fuelLeft=0
        }
        //console.log(which_l_play,lastPlatformCollided)
        
           //here continue   13.5
       

         //here  (windowHeight-windowHeight/4-195)-(array[0].l_tn*250)

       // var f_s;
       // var f_v
        if((windowHeight-windowHeight/4-195)-(which_l_play*250)>playerCharSP.position.y){
            which_l_play+=1;                   //increase 
            f_s = frameCount;
            f_v = which_l_play;

        }else if(((windowHeight-windowHeight/4-195)-((which_l_play-1)*250))<playerCharSP.position.y){
            which_l_play-=1;
            f_s = frameCount;
            f_v = which_l_play;
        }//decrease

        
        if(whats_happen = `increase`){
            
        }


        if((keyIsDown(LEFT_ARROW)||keyDown("a"))&&obs_dif_data[0].dif_l != 0&&canStop==false){
            
            if(platformGroup.overlap(playerCharSP)==false){
                if(which_l_play>=lastPlatformCollided){
                    playerCharSP.position.x -= 7
                }else if(which_l_play<=lastPlatformCollided){
                    playerCharSP.position.x -= 0
                    //playerCharSP.velocity.y = 12
                }
                
            }else{
                playerCharSP.position.x -= 7
            }
        }
        if((keyIsDown(RIGHT_ARROW)||keyDown("d"))&&obs_dif_data[0].dif_l != 0&&canStop==false){
            if(platformGroup.overlap(playerCharSP)==false){
                if(which_l_play>=lastPlatformCollided){
                    playerCharSP.position.x += 7
                }else if(which_l_play<=lastPlatformCollided){
                    playerCharSP.position.x += 0
                    //playerCharSP.velocity.y = 12
                }
                
            }else{
                playerCharSP.position.x += 7
            }
        }
        

        which_l_play_pos=(windowHeight-windowHeight/4-195)-(which_l_play*250)

        //console.log("checking " + which_l_play_pos + " ? " + playerCharSP.position.y)
        //console.log(which_l_play)

        if(platformGroup.overlap(playerCharSP)==true&&which_l_play==0){
            if(playerCharSP.position.y>which_l_play_pos+13.5+49){
                if(fuelLeft<=23){
                    fuelLeft+=1
                    //console.log("work")
                }
            }
        }else if (platformGroup.overlap(playerCharSP)==true&&which_l_play!=0){
           /* if(playerCharSP.position.y>(windowHeight-windowHeight/4-195)-(which_l_play^7*250)){    //weird!!! for limit
                if(fuelLeft<=22){
                    fuelLeft+=1
                    console.log("work")
                }
            }*/
            if(playerCharSP.position.y>which_l_play_pos+13.5+49){ //if(playerCharSP.position.y>exlevelData[which_l_play].s1.position.y+27^which_l_play+75^which_l_play){
                if(fuelLeft<=23){
                    fuelLeft+=1             //con here
                    //console.log("work")
                }
            }    

        }

        if(fuelLeft==24){
            isResting = false;
        }else if(platformGroup.overlap(playerCharSP)==true){
            isResting = true;
        }

       //console.log(playerCharSP.position.y)
       // camera.position.y = playerCharSP.position.y-windowHeight/4

        if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==1){
            if(playerCharSP.position.x<windowWidth/2-272.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s2`;
            }else if(playerCharSP.position.x>windowWidth/2+272.5){
                present_platform = `s3`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==2){
            if(playerCharSP.position.x<windowWidth/2-82.5&&playerCharSP.position.x>windowWidth/2-297.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2+82.5&&playerCharSP.position.x<windowWidth/2+297.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==3){ //not done down
            if(playerCharSP.position.x<windowWidth/2-272.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }else if(which_l_play!=0&&exlevelData.length-1>=which_l_play&&exlevelData[which_l_play].type==4){
            if(playerCharSP.position.x>windowWidth/2-107.5&&playerCharSP.position.x<windowWidth/2+107.5){
                present_platform = `s1`;
            }else if(playerCharSP.position.x>windowWidth/2+272.5){
                present_platform = `s2`;
            }else{
                present_platform = `air`;
            }
        }
        if(f_s+30==frameCount){
          if(f_v==which_l_play){
              //last_platform_landed_for_obs_det = which_l_play
              last_platform_landed_for_obs_det = lastPlatformCollided
          }else{
              lastPlatformCollided = lastPlatformCollided;
          }
        }
        //console.log(last_platform_landed_for_obs_det,lastPlatformCollided)
        sp.addObstacles(exlevelData,obs_dif_data,obs_group,which_l_play,present_platform,lastPlatformCollided)
        sp.addCoins(coins_data,exlevelData,coin_group,which_l_play,lastPlatformCollided,obs_dif_data);
        
        
        


        
        
    
        
        
        camera.position.y = lerp(playerCharSP.position.y,camera.position.y,0.95)-9

        //playerCharSP.position.y = lerp(playerCharSP.position.y,mouseY,0.05)

        if(playerCharSP.overlap(trophy)){
            canStop = true
        }
        

        if(obs_dif_data[0].dif_l != 0&&exlevelData.length >2&&canStop==false){
            time_at_play = hour()*3600+minute()*60+second()
            
            time_took = time_at_play-time_at_start;
        
            //console.log(time_took)

            if(time_took_s<60){
                if(time_took_m!=0){
                    time_took_s = time_took-time_took_m*60;
                }else{
                    time_took_s = time_took;
                    //console.log(time_took_s)
                }
                
                
            }else if(time_took_s%60==0){
                time_took_m +=1;
                time_took_s = time_took-time_took_m*60+1^time_took_m
                //time_took = time_at_play-time_at_start
                //console.log("yoyo")
            }

            time_milli_play = (millis()-time_milli_start)%1000
            //console.log(Math.round(time_milli_play))
        }
        


        playerCharSP.collide(barrier_1)
        playerCharSP.collide(barrier_2)
        playerCharSP.collide(barrier_3)
        
        
        
        drawSprites()



        textFont("concert")
        textSize(40)
        fill(179,0,0)

        //console.log(time_took_m,time_took_s)
        if(Math.round(time_milli_play)<10){

            if(time_took_s<10){
                text(time_took_m+" : "+"0"+time_took_s+" : "+"00"+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }else{
                text(time_took_m+" : "+time_took_s+" : "+"00"+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }

        }else if(Math.round(time_milli_play)>=10&&Math.round(time_milli_play)<100){

            if(time_took_s<10){
                text(time_took_m+" : "+"0"+time_took_s+" : "+"0"+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }else{
                text(time_took_m+" : "+time_took_s+" : "+"0"+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }

        }else{

            if(time_took_s<10){
                text(time_took_m+" : "+"0"+time_took_s+" : "+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }else{
                text(time_took_m+" : "+time_took_s+" : "+Math.round(time_milli_play),windowWidth/2-100,camera.position.y-windowHeight/2+50)
            }

        }
        


        textFont("concert")
        textSize(25)
        fill(255,140,25)

        if(frameCount%60==0){
            nx_f = frameCount+60
            ex_fm = getFrameRate()
        }
        if(frameCount==nx_f){
            ex_fm = (ex_fm+getFrameRate())/2
        }

        text("Frame Rate: "+Math.round(ex_fm),25,camera.position.y-windowHeight/2+50)

        textFont("concert")
        textSize(40)
        fill(255,140,25)
        text("Score: "+score,25,camera.position.y-windowHeight/2+100)

        text("Coins: "+coins,25,camera.position.y-windowHeight/2+150)
    
        
        
    }

   
    
    if(score>highScore){
        highScore = score
    }

    
    




    //image(img,0, -height * 5, width, height * 6);
    

    
    

   
    

    //console.log(navWindow,opWindow,isEditClick)

    

}

function number() {
    var gameStateRef = database.ref("visits");
    gameStateRef.on("value", function(data) {
      gameV = data.val();
    });
}

function suggestion_add(sug) {
    database.ref("/suggestions/suggestion"+gameV).update({
        suggestion : sug
    })
}

function update(state) {
    database.ref("/").update({
      visits: state
    });
}

function clear_up(){
    if(exlevelData.length!=1){
        for(var io = 1;io<exlevelData.length;io++){
            if(exlevelData[io].type!=1){
                for(var iq = 1;iq<=2;iq++){
                    if(iq==1){
                        exlevelData[io].s1.remove();  
                    }else if(iq==2){
                        exlevelData[io].s2.remove(); 
                    }
                    
                }
            }else{
                for(var iq = 1;iq<=3;iq++){
                    if(iq==1){
                        exlevelData[io].s1.remove();  
                    }else if(iq==2){
                        exlevelData[io].s2.remove();
                    }else if(iq==3){
                        exlevelData[io].s3.remove();
                    }
                    
                }
            }
        }
        base.remove()
        playerCharSP.remove()

        if(obs_dif_data.length>=1){
            for(var po=1;po<obs_dif_data.length;po++){
                obs_dif_data[po].obs.remove()
            }
            
        }

    }
}

/*
function loadIcon(){
        push();
        //image(platformImg, width / 2 - 130, height /2, 20, 20);
        strokeWeight(8)
        stroke("black");
        fill("white");
        rect1 = rect(width / 4, height /2 , width/2, 65);

        strokeWeight(0)
        stroke("green");
        fill("green");
        rect2 = rect(width / 4+4, height /2+4, loadingVal, 58);
        pop();
}*/

function mute(){
    
}

function jumpToggle(){

}
