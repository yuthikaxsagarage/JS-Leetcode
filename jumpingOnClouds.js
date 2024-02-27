let c = [0 ,0, 0, 1, 0, 0]
let steps= [];
let step = 0;


for(let i = 0 ; i < c.length; i++ ){
    let x = c[i +1]
    let y = c[i +2]

if(step == i || i == 0){
    console.log(step)
  if(c[i] ==0){
      if(y == 0){
          step = step + 2
          steps.push(1)
      }
      if(y == 1){
        step = step + 1
        steps.push(1)
      }
      if(c.length-2 == step && x == 0){
        steps.push(1)
      }
  
  }
}
    
}
console.log(steps.length)
