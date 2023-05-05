class SportsTracker{
    constructor(server){
        this.server = server;
    }

    numberGenerator(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRun(userId){

        let run = this.numberGenerator(1,10);
        let pulse = this.numberGenerator(130,200);
        this.server.recordRun(userId, run);
        this.displayData(run, pulse);
    }

    displayData(run, pulse){
        console.log(`You have run ${run}km and your pulse was ${pulse}!`);
    }

}

module.exports = SportsTracker;