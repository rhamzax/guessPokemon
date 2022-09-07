let regionRange = [1,898]
const filterBtns = document.querySelectorAll('.filter-btn');

const skipBtn = document.querySelector('.skip');
skipBtn.addEventListener('click', function(){
  randomPokemon = randomNum(regionRange[0], regionRange[1])
  ApiRequest(randomPokemon)
  placefocus();
  textbox.value = "";
  lives--;
  Wrong.textContent = lives;
  if(lives  < 1){
    resetGame();
  }
});

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(){
  resetGame();
  placefocus();
})

function resetGame(){
  scoreUser = 0;
  Score.textContent = scoreUser;
  ApiRequest(randomNum(regionRange[0], regionRange[1]));
  textbox.value = "";
  lives=5;
  Wrong.textContent = lives;
}

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      const regionPicked = e.currentTarget.dataset.id;
      activeButton(btn)
      regionBound.forEach(function(region){
          if(regionPicked === region.title){
              regionRange[0] = region.start
              regionRange[1] = region.end
              resetGame();
          }
      });
    });
  });

function activeButton(btn){
  filterBtns.forEach(function(button){
    if (button != btn){
      if(button.classList.contains("btn-active")){
        button.classList.remove("btn-active")
      }
    }
  })
  btn.classList.toggle("btn-active");
}