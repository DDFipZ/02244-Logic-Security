const readline = require('readline');
const SportsTracker = require("./Sport_Tracker");
const User = require('./User');
const StatisticsCalculator = require('./Database');
const Server = require('./Server');


const statisticsCalculator = new StatisticsCalculator();
const server = new Server(statisticsCalculator);
const sportsTracker = new SportsTracker(server);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userInput;

async function getInput() {
  return new Promise(resolve => {
    rl.question('Please enter some text, or type "exit" to quit: ', input => {
      console.log(`You entered: ${input}`);
      resolve(input);
    });
  });
}

(async function() {
  while (userInput !== 'exit') {
    userInput = await getInput();
    const inputArray = userInput.split(' ');
    switch (inputArray[0]) {
        case 'RecordRun':
          sportsTracker.generateRun(inputArray[1]);
          break;
        case 'SeeStats':
          var myUserId = inputArray[1];
          var friendUserId = inputArray[2];
        

    }
  }
  rl.close();
})();
