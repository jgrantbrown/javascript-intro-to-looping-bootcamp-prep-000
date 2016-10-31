/*var forLoop=[];

 for (let i=0;i<=25;i++){
  if(i===1){
  forLoop=[`I am ${i} strange loop.`];
  }
  else{
  forLoop=[ ...forLoop,(`I am ${i} strange loops.`)];
  }
}*/

function forLoop([]){
  for (let i=0;i<=25;i++){
   if(i===1){
   forLoop=[`I am ${i} strange loop.`];
   }
   else{
   forLoop=[ ...forLoop,(`I am ${i} strange loops.`)];
   }
}
