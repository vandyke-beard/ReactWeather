function addPromise(a , b) {
  return new Promise(function (resolve , reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject("A & B need to be numbers");
    }
  })
}


addPromise(2,3).then(function(sum){
  console.log('promise success! ' , sum);
},function(err){
  console.log('promoise error! ' , err);
});


addPromise('BEARD', 2 ).then(function(sum){
  console.log('promise success! ' , sum);
},function(err){
  console.log('promoise error! ' , err);
});
