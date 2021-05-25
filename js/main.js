
class Player
{
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
        this.gamesPlayed = 0;
    }

    addGame() {
        this.gamesPlayed += 1;
    }

    addPoints(nrOfPoints) {
        this.points += nrOfPoints;
    }
}

pOne.addPoints (30);
const pOne = new Player("Henk","X");
console.log(pOne);
const pTwo = new Player("Bert","O");
console.log(pTwo); 