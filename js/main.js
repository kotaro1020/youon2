'use strict';

{
  const btn =document.getElementById('btn1');

  btn1.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'ちゃ';
    } else if (n < 0.67){
      btn.textContent = 'ちゅ';
    } else {
      btn.textContent = 'ちょ';
    }
  });
}

{
  const btn =document.getElementById('btn6');

  btn6.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'しゃ';
    } else if (n < 0.67){
      btn.textContent = 'しゅ';
    } else {
      btn.textContent = 'しょ';
    }
  });
}

{
  const btn =document.getElementById('btn10');

  btn10.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'じゃ';
    } else if (n < 0.67){
      btn.textContent = 'じゅ';
    } else {
      btn.textContent = 'じょ';
    }
  });
}

{
  const btn =document.getElementById('btn10');

  btn10.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'じゃ';
    } else if (n < 0.67){
      btn.textContent = 'じゅ';
    } else {
      btn.textContent = 'じょ';
    }
  });
}

{
const btn =document.getElementById('btn13');

btn13.addEventListener('click',()=>{
  const n = Math.random();
  if (n < 0.33) {
    btn.textContent = 'しゃ';
  } else if (n < 0.67){
    btn.textContent = 'しゅ';
  } else {
    btn.textContent = 'しょ';
  }
});
}


{
  const btn =document.getElementById('btn19');
  
  btn19.addEventListener('click',()=>{
    const n = Math.random();
    if (n < 0.33) {
      btn.textContent = 'にゃ';
    } else if (n < 0.67){
      btn.textContent = 'にゅ';
    } else {
      btn.textContent = 'にょ';
    }
  });
  }


  {
    const btn =document.getElementById('btn23');
    
    btn23.addEventListener('click',()=>{
      const n = Math.random();
      if (n < 0.33) {
        btn.textContent = 'ちゃ';
      } else if (n < 0.67){
        btn.textContent = 'ちゅ';
      } else {
        btn.textContent = 'ちょ';
      }
    });
    }

    {
      const btn =document.getElementById('btn26');
      
      btn26.addEventListener('click',()=>{
        const n = Math.random();
        if (n < 0.33) {
          btn.textContent = 'じゃ';
        } else if (n < 0.67){
          btn.textContent = 'じゅ';
        } else {
          btn.textContent = 'じょ';
        }
      });
      }

      {
        const btn =document.getElementById('btn30');
        
        btn30.addEventListener('click',()=>{
          const n = Math.random();
          if (n < 0.33) {
            btn.textContent = 'ぎゃ';
          } else if (n < 0.67){
            btn.textContent = 'ぎゅ';
          } else {
            btn.textContent = 'ぎょ';
          }
        });
        }

        {
          const btn =document.getElementById('btn33');
          
          btn33.addEventListener('click',()=>{
            const n = Math.random();
            if (n < 0.33) {
              btn.textContent = 'しゃ';
            } else if (n < 0.67){
              btn.textContent = 'しゅ';
            } else {
              btn.textContent = 'しょ';
            }
          });
          }

          {
            const btn =document.getElementById('btn34');
            
            btn34.addEventListener('click',()=>{
              const n = Math.random();
              if (n < 0.33) {
                btn.textContent = 'ちゃ';
              } else if (n < 0.67){
                btn.textContent = 'ちゅ';
              } else {
                btn.textContent = 'ちょ';
              }
            });
            }

            {
              const btn =document.getElementById('btn38');
              
              btn38.addEventListener('click',()=>{
                const n = Math.random();
                if (n < 0.33) {
                  btn.textContent = 'しゃ';
                } else if (n < 0.67){
                  btn.textContent = 'しゅ';
                } else {
                  btn.textContent = 'しょ';
                }
              });
              }

              {
                const btn =document.getElementById('btn43');
                
                btn43.addEventListener('click',()=>{
                  const n = Math.random();
                  if (n < 0.33) {
                    btn.textContent = 'ちゃ';
                  } else if (n < 0.67){
                    btn.textContent = 'ちゅ';
                  } else {
                    btn.textContent = 'ちょ';
                  }
                });
                }

let fish = document.getElementById('fish');
document.body.addEventListener('keydown',
    event => {
        if (event.key === 'o' && event.ctrlKey) {
          fish.style.display = 'block'
        }
    });
