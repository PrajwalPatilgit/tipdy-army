var ca = document.getElementById("a");
var c = ca.getContext("2d");
var k = ca.getContext("2d");
var w = window.innerWidth;
var h = window.innerHeight;
var r1 = -(w / 9);
var r2 = -(w / 9);
var r3 = -(w / 9);
var b1 = h - (w / 9 * 2);
var b2 = h - (w / 9 * 2);
var b3 = h - (w / 9 * 2);
var out = h - ((w / 9 * 2) + (w / 9))
var db1=0;
var db2=0;
var db3=0;
var ex=1;
var won=0;
var tBombs=10;
var tankTop=h-(w/9*2);
var blt=new Image();
blt.src="bullet.png";
var tnk=new Image();
tnk.src="tank.png";
var exp=new Image();
ca.width = w;
ca.height = h;










function bombmaker(ni) {
  this.top = tankTop;
  this.draw = (no) => {

    if (no == 1) {

      k.drawImage(blt,w / 36 * 5, this.top, w / 18, w / 18);
    }
    else if (no == 3) {
      k.drawImage(blt,w / 36 * 29, this.top, w / 18, w / 18)
    }
    else {
      k.drawImage(blt,w / 36 * 17, this.top, w / 18, w / 18)
    }
  }

  this.up = () => {
    if (ni == 1 && this.top - (w / 9) < b1) {
      b1 = this.top - (w / 9);
    }
    else if (ni == 2 && this.top - (w / 9) < b2) {
      b1
      b2 = this.top - (w / 9);
    }
    else if (ni == 3 && this.top - (w / 9) < b3) {
      b3 = this.top - (w / 9);
    };
    if (ni == 1 && this.top - (w / 9) < r1) {
      let t21 = setTimeout(() => {
        b1 = h - (w / 9 * 2) - (w / 9);
      }, 1);
    }
    else if (ni == 2 && this.top - (w / 9) < r2) {
      let t22 = setTimeout(() => {
        b2 = h - (w / 9 * 2) - (w / 9);
      }, 1);
    }
    else if (ni == 3 && this.top - (w / 9) < r3) {
      let t23 = setTimeout(() => {
        b3 = h - (w / 9 * 2) - (w / 9);
      }, 1);
    }
    else {

      this.draw(ni);
      this.top -= 12;

      requestAnimationFrame(this.up)
    };
  }
}










function obstacle(power, path, no) {
  this.no=no;
  this.power = power;
  this.path = path;
  this.top = -(w / 9);
  if (this.power == 100) {
    var ob = new Image();
    ob.src = "dh.png";
  }
  else {
    var ob = new Image();
    ob.src = "ob"+this.power+".png";
  }
  this.draw = () => {
    if (this.path == 1) {

    
      c.drawImage(ob,w / 9, this.top, w / 9, w / 9);
    }
    else if (this.path == 2) {
      c.drawImage(ob,w / 9 * 4, this.top, w / 9, w / 9);
    }
    else {
      c.drawImage(ob,w / 9 * 7, this.top, w / 9, w / 9);
    }
  }
  this.up = () => {
    
    if (this.top >= out) {
      if(this.power!=100){
      alert("out1");
      location.reload();
    }
      else{
        if(this.path==1){
          r1 = -(w / 9);
        }
        else if (this.path == 2) {
          r2 = -(w / 9);
        }
        else if (this.path == 3) {
          r3 = -(w / 9);
        }
      }
    } 
  else {
      
    if (this.path == 1 && this.top > r1) {
        r1 = this.top;
      }
    else if (this.path == 2 && this.top > r2) {
        r2 = this.top;
      }
    else if (this.path == 3 && this.top > r3) {
        r3 = this.top;
      };
    if (this.power == 100) {
      if (this.path == 1 && this.top > b1) {
        alert("out2");
        location.reload();
      }
      else if (this.path == 2 && this.top > b2) {
        alert("out3");
        location.reload();
      }
      else if (this.path == 3 && this.top > b3) {
      alert("out4");
      location.reload();
      }
      else {
      
        this.top += 7;
        this.draw();
        requestAnimationFrame(this.up);
      }
      }
      else {
        if(this.power!=0){
      if (this.path == 1 && this.top > b1 &&db1==0) {
        db1++;
        let tt1=setTimeout(()=>{db1--;},2);
         this.power-=1;
      }
      else if (this.path == 2 && this.top > b2 &&db2==0) {
        db2++;
        let tt2 = setTimeout(() => { db2--; }, 2);
         this.power-=1;
      }
      else if (this.path == 3 && this.top > b3 &&db3==0) {
        db3++;
        let tt3 = setTimeout(() => { db3--; }, 2);
        this.power-=1;
      };
      

        this.top += 4;
        this.draw();
        requestAnimationFrame(this.up);
      }else{
        if(this.path==1){
          if(this.no==tBombs-1){
            won=1;
          }
          let t11 = setTimeout(() => {
            r1 = -(w / 9);
          }, 1);
        }
        else if (this.path == 2) {
          if (this.no == tBombs-1) {
            won=1;
          }
        let t12 = setTimeout(() => {
          r2 = -(w / 9);
        }, 1);
        }
        else{
          if (this.no == tBombs-1) {
            won=1;
          }
        let t13 = setTimeout(() => {
          r3 = -(w / 9);
        }, 1);
        }
      }}
    }

  }
}







  












var obstacleRange=[
  1,
  1,
  1,
  100,
  2,
  2,
  3]
var dis = 1500;
var ek = 1;
var or=1.99;
for (let i = 0; i < tBombs; i++) {
  for (let e = 0; e < ek; e++) {
    let ob = new obstacle(obstacleRange[Math.floor(Math.random()*or)], Math.floor(Math.random() * 2.99) + 1,i);
    let ta = setTimeout(() => { ob.up() }, i * dis)
  }
  if (i %20==0 && or<7) {
    
    or++;
  };/**
  if (i == 50) {
    ek++;
  };
  if (i == 25) {
    ek++;
  };**/
  if (i == 50) {
    dis =dis- 50;
  }
}





window.addEventListener("click", (event) => {
  if (event.x < w / 3) {
    let bomb = new bombmaker(1);
    bomb.up();
  }
  else if (event.x > w / 3 * 2) {
    let bomb = new bombmaker(3);
    bomb.up();
  }
  else {
    let bomb = new bombmaker(2);
    bomb.up();
  }
});




function clear() {
  k.clearRect(0, 0, (w / 3) - 1, h - (w / 9 * 2));
  k.clearRect((w / 3) + 1, 0, (w / 3) - 2, h - (w / 9 * 2));
  k.clearRect((w / 3 * 2) + 1, 0, (w / 3) - 1, h - (w / 9 * 2));
  c.beginPath();
  c.fillStyle="#446";
  c.rect(0-2,-1,w+2,h+2);
  c.fill();
  c.strokeStyle="#fff";
  for (let o=0; o<12;o+=2){
  c.moveTo(w / 3, h/11*o);
  c.lineTo(w / 3, h/11*(o+1));
  c.moveTo(w / 3 * 2, h/11*o);
  c.lineTo(w / 3 * 2, h/11*(o+1));
  c.moveTo(w / 3 * 2, h/11*o);
  c.lineTo(w / 3 * 2, h/11*(o+1));
  c.stroke();
    c.moveTo(5+(o*0.1), 0);
    c.lineTo(5+(o*0.1), h);
    c.moveTo(w-(5 + (o * 0.1)), 0);
    c.lineTo(w-(5 + (o * 0.1)), h);
    c.stroke();
  }
  if (tankTop != 0 && won != 0) {
    tankTop--;
  }
  c.drawImage(tnk, w / 18, tankTop, w / 9 * 2, w / 9 * 2);
  c.drawImage(tnk, w / 18 * 7, tankTop, w / 9 * 2, w / 9 * 2);
  c.drawImage(tnk, w / 18 * 13, tankTop, w / 9 * 2, w / 9 * 2);
  /**exp.src = "ex" + ex + ".png";
  c.drawImage(exp, 0, 0, 100, 100);
  ex++;**/
  requestAnimationFrame(clear);
}
clear();

