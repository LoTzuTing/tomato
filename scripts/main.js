window.onload = function(){
    var oBtnStart = document.getElementById('start');
    var oTextDuration = document.getElementById('duration');
    var oTextBreak = document.getElementById('break');
    var oBtnSetDuration = document.getElementById('setDuration');
    var oBtnSetBreak = document.getElementById('setBreak');
    var oCountDownArea = document.getElementById('countDownArea');
    var defaultDuration = 25*60*1000;
    var defaultBreak = 5*60*1000;
    var timer = null;
    var now = 0;
 
    //you can set the duration manually
    oBtnSetDuration.onclick = function(){
        clearInterval(timer);
        defaultDuration = parseInt(oTextDuration.value)*60*1000;
        defaultBreak = parseInt(oTextBreak.value)*60*1000;
        oCountDownArea.innerHTML = "time: "+beautyTime(defaultDuration)+" <br> break time: "+beautyTime(defaultBreak);
    }
    
 
    oBtnStart.onclick = function(){
        clearInterval(timer);
        now = Date.now();
        oCountDownArea.innerHTML = "time: "+beautyTime(defaultDuration)+" <br> break time: "+beautyTime(defaultBreak);
        timer = setInterval(function(){
            var newNow = Date.now();
            var timeDelay = defaultDuration - (newNow - now);
            var btimeDelay = defaultDuration + defaultBreak - (newNow - now);
            if(timeDelay <= 0){

                
                if(btimeDelay <= 0){
                    clearInterval(timer);
                    oCountDownArea.innerHTML = 0;
                    
                    return;
                }
            }
            if(timeDelay >= 0){

                oCountDownArea.innerHTML = "time: "+beautyTime(timeDelay)+" <br> break time: "+beautyTime(defaultBreak);
                
            }else{

                oCountDownArea.innerHTML = "time: "+beautyTime(0)+" <br> break time: "+beautyTime(btimeDelay);
            }
            
        },500);
    }
 
    function beautyTime(time){
        var hour = parseInt(time/3600000);
        var min = parseInt((time%3600000)/60000);
        var sec = parseInt((time%60000)/1000);
        return hour+":"+min+":"+sec;
    }
 
}

// function change_pic(){
//     var button = document.getElementById("button");
//     var start = document.getElementById("start");
//     button.onclick = function(){
//         if(start.getAttribute("src",2) == "images/tomato.jpg"){
//             start.setAttribute("src","images/tomato2.jpg");
//         }else{
//             start.setAttribute("src","images/tomato.jpg");
//         }
//     }
// }
change_pic();
