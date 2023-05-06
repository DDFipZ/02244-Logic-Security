const readline = require('readline');
const SportsTracker = require("./Sport_Tracker");
const StatisticsCalculator = require('./Statistics_Calculator');
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
      resolve(input);
    });
  });
}

(async function() {
  while (userInput !== 'exit') {
    userInput = await getInput();
    const inputArray = userInput.split(' ');
    switch (inputArray[0]) {
        case 'R':
          sportsTracker.generateRun(inputArray[1]);
          break;
        case 'SeeStats':
          var myUserId = inputArray[1];
          var friendUserId = inputArray[2];
          statisticsCalculator.seeRunnerStats(myUserId, friendUserId);
          break;
        case 'DTS':
          var myUserId = inputArray[1];
          var teamId = inputArray[2];
          statisticsCalculator.displayTeamStats(myUserId, teamId);
          break;
    }
  }
  rl.close();
})();
