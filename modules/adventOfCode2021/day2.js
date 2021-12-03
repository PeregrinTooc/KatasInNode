"use strict"
function solve1(input) {
    const calculateSum = (n, s) => n + parseInt(s.split(" ")[1])
    const { downs, ups, forwards } = splitDirections(input)
    const depth = downs.reduce(calculateSum, 0) - ups.reduce(calculateSum, 0)
    const forwardPosition = forwards.reduce(calculateSum, 0)
    return depth * forwardPosition
}

function splitDirections(input) {
    const ups = input.filter(s => s.split(" ")[0] === 'up')
    const downs = input.filter(s => s.split(" ")[0] === 'down')
    const forwards = input.filter(s => s.split(" ")[0] === 'forward')
    return { downs, ups, forwards }
}

function solve2(input) {
    const calculatePosition = (position, speed) => {
        switch (speed.direction) {
            case "forward":
                position.position += speed.velocity;
                position.depth += speed.velocity * position.aim;
                break;
            case "up":
                position.aim -= speed.velocity
                break;
            case "down":
                position.aim += speed.velocity
                break;
        }
        return position
    }
    let position = { depth: 0, position: 0, aim: 0 };
    position = input.map(i => ({
        direction: i.split(" ")[0],
        velocity: parseInt(i.split(" ")[1])
    })).reduce(calculatePosition, position)

    return position.depth * position.position
}

module.exports = { solve1, solve2 }