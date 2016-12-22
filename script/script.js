function bulle() {
    var test="";
    test=document.getElementsByClassName("bubble");
    
    var nbbuble = test.length;
    
    
    for (i=0;i<nbbuble;i++){
        test[i].classList.toggle("bubblehide");
//        test[i].style = "animation: bublle "+(0.3 * i)+"s;";
       
        console.log(test[i]);
        
    }
}