/*var forLoop=[];

 for (let i=0;i<=25;i++){
  if(i===1){
  forLoop=[`I am ${i} strange loop.`];
  }
  else{
  forLoop=[ ...forLoop,(`I am ${i} strange loops.`)];
  }
}*/
var array=[];
function forLoop(array){
  for (let i=0;i<=25;i++){
   if(i===1){
   return array=[`I am ${i} strange loop.`];
   }
   else{
   return array=[ ...array,(`I am ${i} strange loops.`)];
   }
}
