class Game {
    constructor() {
        this._rolls = []
    }
    roll(score) {
        this._rolls.push(score)
    }
    getScore() {
        let result = 0
        let currentRoll = 0
        for (let j = 0; j < 10; j++) {
            let frameScore
            ({ currentRoll, frameScore } = this._getFrameScoreFrom(currentRoll))
            result += frameScore
        }
        return result

    }

    _getFrameScoreFrom(currentRoll) {
        let frameScore
        if (this._frameIsStrike(currentRoll)) {
            frameScore = this._getStrikeScore(currentRoll)
            currentRoll++
        } else {
            frameScore = this._getFrameScore(currentRoll)
            currentRoll += 2
        }
        return { currentRoll, frameScore }
    }

    _getFrameScore(i) {
        let frameScore = this._rolls[i] + this._rolls[i + 1]
        if (this._isSpare(frameScore)) {
            frameScore = this._applySpareBonus(frameScore, i)
        }
        return frameScore
    }

    _applySpareBonus(frameScore, i) {
        frameScore += this._rolls[i + 2]
        return frameScore
    }

    _isSpare(frameScore) {
        return frameScore == 10
    }

    _getStrikeScore(i) {
        let frameScore = 10
        frameScore += this._rolls[i + 1]
        frameScore += this._rolls[i + 2]
        return frameScore
    }

    _frameIsStrike(i) {
        return this._rolls[i] == 10
    }
}


module.exports = Game