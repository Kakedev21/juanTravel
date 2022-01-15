 let prev = document.getElementById("prev")
    let next = document.getElementById("next")
    let thumbnail = document.getElementsByClassName("thumbnail")
    const hero = document.getElementById("hero")

    let backroundImg = new Array(
      "images/bg2.jpg",
      "images/bg1.jpg",
      "images/bg4.jpg"
    )
    let i = 0

    next.onclick = function(){
      if (i < 2) {
      hero.style.backgroundImage = 'url("' + backroundImg[i + 1] + '")'
        thumbnail[i+1].classList.add("active")
        thumbnail[i].classList.remove("active")
        i++
      }
    }
    prev.onclick = function () {
        if (i > 0) {
          hero.style.backgroundImage = 'url("' + backroundImg[i - 1] + '")'
           thumbnail[i - 1].classList.add("active")
          thumbnail[i].classList.remove("active")
          i--
        }
      }


const fullImgbox = document.getElementById("fullImgbox");
const fullImg = document.getElementById("fullImg");

  function openFullImg(pic){
    fullImgbox.style.display = "flex";
    fullImg.src = pic;
  }

  function closeFullImg(){
    fullImgbox.style.display = "none";
  }