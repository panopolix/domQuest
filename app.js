let cashLabel = document.getElementById('cashTotal');

let smallQuestButton = document.getElementById('smallQuest');
let longQuestButton = document.getElementById('longQuest');
let bossFightButton = document.getElementById('bossFight');


smallQuestButton.addEventListener('click', takeSmallQuest);
longQuestButton.addEventListener('click', takeLongQuest);
bossFightButton.addEventListener('click', takeBossFight);

//TODO: alter the behavior of the takeSmallQuest, takeLongQuest, and takeBossFight functions so that they randomly add a value within their defined ranges to your total cash!
function takeSmallQuest(){
  alert('you took on the small quest!')
}

function takeLongQuest(){
  alert('you took on the long quest!')
}

function takeBossFight(){
  alert('you took on the boss fight!')
}
//HINT: All visible elements on HTML web page will be represented as strings when they are accessed using javascript
//HINT: To get the text value of the cash that's currently on the page, access it's inner text using cashLabel.innerText
//HINT: To set the text value of the cash that's currently on the page, try using cashLabel.innerText = '(some other value)'
