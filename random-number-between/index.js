let x = prompt("Duriin too oruulna uu?");
let y = prompt("Duriin neg too oruulna uu?"); 
if(x<y){
  console.log(Math.floor(Math.random()*y)+x);
}else if(x=y){
    console.log(Math.random()*y)+x;
}else if(x>y){
    console.log(Math.floor(Math.random()*x)+y);
}else{
    console.log("zuv utga oruulna uu?");
}