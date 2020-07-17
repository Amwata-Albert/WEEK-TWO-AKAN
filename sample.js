function abc(){
    let a=10;
    let b=20;
    let c=30;

    if (a==10){
        if (b==20){
            if(c==30){
                console.log(a + " " +  b  + " " + c);
            }
            else{
                console.log("enter valid a");
            }
        }
        else{
            console.log("enter valid b");
        }
    }
    else{
        console.log("enter valid c");
    }
}
abc();