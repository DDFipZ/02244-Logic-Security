class Server {
    constructor(statisticsCalculator){
        this.statisticsCalculator = statisticsCalculator;
    }
    recordRun(userId, run){
        this.statisticsCalculator.recordRun(userId, run);
    }
}

module.exports = Server;