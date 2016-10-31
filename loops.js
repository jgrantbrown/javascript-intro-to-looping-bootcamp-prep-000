var forloop=[];

 for (let i=0;i<=25;i++){
  if(i===1){
  forloop=[`I am ${i} strange loop.`];
  }
  else{
  forloop=[ ...forloop,(`I am ${i} strange loops.`)];
  }
}
