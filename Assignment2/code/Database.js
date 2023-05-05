const User = require('./User');
userA1 = new User('userA1', 'A');
userA2 = new User('userA2', 'A');
userB1 = new User('userB1', 'B');

class Database {

    // Users and their UUIDs
    
    constructor(){}
    recordRun(userId, run){
        switch(userId){
            case 'userA1':
                userA1.runs.push(run);
                console.log(userA1.runs);
                break;
            case 'userA2':
                userA2.runs.push(run);
                break;
            case 'userB1':
                userB1.runs.push(run);
                break;
        }
    }
}

module.exports = Database;