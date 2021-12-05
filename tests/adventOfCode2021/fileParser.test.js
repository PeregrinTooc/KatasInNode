"use strict"
const parser = require("../../modules/adventOfCode2021/fileParser")
const path = require("path")


test("should parse a file", () => {
    const testFile = path.resolve("./tests/adventOfCode2021/integerTestFile.txt")

    expect(parser.parseToStringArray(testFile)).toEqual(["1", " 2", "3"])
    expect(parser.parseToIntegerArray(testFile)).toEqual([1, 2, 3])
})