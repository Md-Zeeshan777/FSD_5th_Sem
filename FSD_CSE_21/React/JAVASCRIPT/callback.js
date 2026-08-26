function sum(a,b){
    return a+b;
}

function sumWithMsg(clbk,name){
    
    const fr= "HI " + name + " your score is: " + clbk;
    console.log(fr);
}

sumWithMsg(sum(2,5),"MR. Prince Tomer");