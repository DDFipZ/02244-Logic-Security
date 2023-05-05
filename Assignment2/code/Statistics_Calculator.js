const User = require('./User');
userA1 = new User('userA1', 'A');
userA2 = new User('userA2', 'A');
userB1 = new User('userB1', 'B');

var userArray = [userA1, userA2, userB1];

class StatisticsCalculator {

    // Users and their UUIDs
    
    constructor(){}
    recordRun(userId, run){
        switch(userId){
            case 'userA1':
                userA1.runs.push(run);
                break;
            case 'userA2':
                userA2.runs.push(run);
                break;
            case 'userB1':
                userB1.runs.push(run);
                break;
        }
    }

    seeRunnerStats(userId, otherUserId){
        let user;
        let otherUser;
        userArray.forEach(userElement => {
            if(userElement.userId == userId){
                user = userElement;
            }
            else if(userElement.userId == otherUserId){
                otherUser = userElement;
            }
        });

        if(user.teamId == otherUser.teamId){
            return otherUser.runs;
        } else {
            return 'This user either does not exist or you do not have access';
        }
    }

    displayTeamStats(userId, teamId){
        var user;
        var teamKm = 0;
        userArray.forEach(userElement => {
            if(userElement.userId == userId){
                user = userElement;
            }
            if(userElement.teamId == teamId) teamKm = userElement.runs.reduce((a, b) => a + b, teamKm);
        });

        if(user.teamId == teamId){
            userArray.forEach(userElement => {
                if(userElement.teamId == teamId){
                    console.log(`${userElement.userId} ran ${userElement.runs}`);
                }
            });
        }

        console.log(`Total Km run: ${teamKm}`);

    }
}

module.exports = StatisticsCalculator;