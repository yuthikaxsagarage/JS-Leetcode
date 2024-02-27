
for(i = 1; i <= 100; i ++ ){
  
    if(i%3 === 0 && i%5 === 0){
        console.log('fb', i)
        continue
    }if(i%3 == 0 ){
        console.log('f');
        continue
    }if(i%5 == 0){
        console.log('b')
        continue
    }
    console.log(i)

}