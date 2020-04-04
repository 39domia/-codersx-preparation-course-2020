/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, 
 * trả về promise, promise này resolve sau khi đã đếm xong
 */

function countDown(x) {
    return new Promise(function(resolve, reject){
        setInterval(function(){
            console.log(x);
            --x
            if(x === 0){
                clearInterval(this);
                resolve();
            }
        }, 1000)
    })
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);



/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */


/* function countDown(x) {
    setInterval(function() {
      console.log(x);
      --x; 
      if(x === 0 ){
        
        console.log('Happy new year');
      }
    }, 1000)
  } 
  
  countDown(5); */