var forloop=[];

 for (let i=0;i<=25;i++){
  if(i===1){
  forloop=["I am 1 strange loop."];
  }
  else{
  forloop=[ ...forloop,("I am ${i} strange loops.")];
  }
}
