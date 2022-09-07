const errorBox = document.querySelector(".error");
const textbox = document.querySelector('.search');

function ApiRequest(randomPokemon){
    let urlGen = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
    const pokeimg = document.querySelector(".main-img")
    
    fetch(urlGen)
      .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        pokeName = data.species.name
        pokeName = pokeName.replace("-", " ")
        errorBox.textContent = ""
        // document.querySelector(".name").textContent = data.name
        document.querySelector(".main-img").src = data.sprites.front_default
      })
      .catch(error => console.log(error))
}

function placefocus()
{
  document.querySelector('.search').focus();
}

const Score = document.querySelector("#value");
const Wrong = document.querySelector("#lives")
let pokeName;
let userGuess;
let scoreUser = 0;
let lives = 5;
let active = true;

function search(e){
  var keycode;
  if (window.event)
        keycode = window.event.keyCode;
    else if (e)
        keycode = e.which;
  
  if(active == true){
    if(keycode == 13){
      userGuess = e.value
      userGuess = userGuess.toLowerCase();
      
      if(userGuess == pokeName){
        scoreUser++;
        Score.textContent = scoreUser
        active =false;
        errorBox.textContent = "Correct";
        errorBox.classList.add("correct-colour")
        textbox.classList.add("show-correct")
        setTimeout(Correct, 750);    
      }
      else{
        errorBox.textContent = "Incorrect Guess"
        errorBox.classList.add("incorrect-colour")
        textbox.classList.add("show-incorrect")
        setTimeout(Incorrect, 2000);
        lives --;
        Wrong.textContent = lives;
      }
    }
  }
  if(lives  < 1){
    resetGame();
  }
}



  function Correct(){
    
    errorBox.textContent = "";
    textbox.value = "";
    active=true;
    errorBox.classList.remove("correct-colour")
    textbox.classList.remove("show-correct")
    ApiRequest(randomNum(regionRange[0], regionRange[1]))
  }
  function Incorrect(){
    errorBox.textContent = "";
    errorBox.classList.remove("incorrect-colour")
    textbox.classList.remove("show-incorrect")

  }

