const Bg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
    document.body.style.backgroundColor = "#" + randomColor;
    hexcode.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", Bg);
  Bg();
  
  