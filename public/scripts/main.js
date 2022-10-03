
// scrolling button
let button = document.querySelector("body > div.container > div.row.justify-content-center.mt-5 > ul > div > div:nth-child(3)")
let button2 = document.querySelector("body > div.container > div.row.justify-content-center.mt-5 > ul > div > div:nth-child(1)")

// for (i in button){
//   button[i].addEventListener('mouseover', () =>{
// scrolll();
//   })
// }



function changeDef(event){
  console.log(event.target)
}

function scrolll() {
    
      var left = document.querySelector(".scroll-images");
      return left.scrollBy(-350, 0)
  }

function scrollr(event) {
 

      var right = document.querySelector(".scroll-images");
      return right.scrollBy(350, 0)
  }


  