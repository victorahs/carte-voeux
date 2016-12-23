function bulle() {
    var test="";
    test=document.getElementsByClassName("bubble");
    
    var nbbuble = test.length;
    
    
    for (i=0;i<nbbuble;i++){
        //test[i].classList.toggle("bubble-hide");
        test[i].style = "animation: bublle "+(0.1 * i)+"s; animation-fill-mode: forwards;";
        
        
        console.log(test[i]);
        
    }
}

function bulleG(){
    var testG="";
    test=document.getElementsByClassName("bubbleG");
    
    var nbbubleG = testG.length;
     for (i=nbbubleG ;i>0;i--){
        //test[i].classList.toggle("bubble-hide");
        testG[i].style = "animation: bublleCoupe "+(0.1 * i)+"s; animation-fill-mode: forwards;";
        
        
        console.log(testG[i]);
        
    }
}

    

function appel(){
    bulle();
    bulleG();
}
    
