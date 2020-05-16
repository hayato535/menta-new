'use strict'


  
  document.querySelector('button').addEventListener('click',()=>{
    const fizz = document.getElementById('fizz');
    const buzz = document.getElementById('buzz');
    console.log(fizz.value);
    console.log(buzz.value);
    // console.log(Number.isInteger(1));
    // console.log(Number.isInteger(1.0));
    // console.log(Number.isInteger(Number(fizz.value)));
    // console.log(Number.isInteger(Number(buzz.value)));
    
    if(Number.isInteger(Number(fizz.value)) === false || Number.isInteger(Number(buzz.value)) === false || fizz.value ==='' || buzz.value === ''){
      document.body.innerHTML += '整数値を入力してください';
    }else{
        for(let i=1; i<100; i++){
          if(i%fizz.value === 0 && i%buzz.value === 0){
            document.body.innerHTML += `FizzBuzz${i}<br>`;
          }else if(i%fizz.value === 0){
            document.body.innerHTML += `Fizz${i}<br>`;
          }else if(i%buzz.value === 0){
            document.body.innerHTML += `Buzz${i}<br>`;
          }
        }
      }
  });

  // if(isNaN(fizz.value) || isNaN(buzz.value))


// document.querySelector('button').addEventListener('click',()=>{
//   const fizz = document.getElementById('fizz')
//   const buzz = document.getElementById('buzz')
//   console.log(fizz.value);
//   console.log(buzz.value);
// });







    // let i=1;
    
    //     while((fizz.value*i)<100 || (buzz.value*i)<100){
        
    //       if((fizz.value*i)<100){    
    //         document.body.innerHTML += `Fizz${fizz.value*i}<br>`;
            
    //         if((buzz.value*i)<100){
    //           document.body.innerHTML += `Buzz${buzz.value*i}<br>`;
    //         }
            
    //       }else if((fizz.value*i)>99){
    //         document.body.innerHTML += `Buzz${buzz.value*i}<br>`;
    //       } 
    //       i++;
    //     }
    
    //   const ul = document.createElement('ul');
    // 　const li = document.createElement('li');
    //   for(let i=1; i<100; i++){
    //   if((fizz.value*i)<100){
    //     console.log(`Fizz${fizz.value*i}`);
    //     // li.textContent +=`Fizz${fizz.value*i}<br>`;
    //     // ul.appendChild(li);
    //     document.body.innerHTML += `Fizz${fizz.value*i}<br>`;

    //     if((buzz.value*i)<100){
    //       console.log(`Buzz${buzz.value*i}`);
    //       // li.textContent += `Buzz${buzz.value*i}<br>`;
    //       // ul.appendChild(li);
    //       document.body.innerHTML += `Buzz${buzz.value*i}<br>`;
    //     }
    //   }
    // }