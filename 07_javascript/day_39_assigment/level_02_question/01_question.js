function runTwice(fn){
  fn();
  fn();
}

runTwice(function(){
    console.log("Hello");
    
})