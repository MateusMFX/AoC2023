const fs = require("fs");

const formula = function (X, Y) {
	return (X * 1) * (Y - X);
};

const main = function (input) {
	const lines = input.toString("UTF-8").split("\n");
	const times = lines[0].match(/\d+/g);
	const distance = lines[1].match(/\d+/g);
	const races = [];
	for (let i = 0; i < times.length; i++) {
		const race = {duration: times[i], record: distance[i], wins: 0};
		for (let j = 0; j < race.duration; j++) {
			if (formula(j, race.duration) > race.record) {
				race.wins += 1;
			}
		}
		races.push(race);
	}
	let product = 1;
	for (const race of races) {
		product *= race.wins;
	}
	console.log("RESULT:", product);
};

const main2 = function (input) {
	const lines = input.toString("UTF-8").split("\n");
	const times = [Number(lines[0].match(/\d+/g).join(""))];
	const distance = [Number(lines[1].match(/\d+/g).join(""))];
	const races = [];
	for (let i = 0; i < times.length; i++) {
		const race = {duration: times[i], record: distance[i], wins: 0};
		for (let j = 0; j < race.duration; j++) {
			if (formula(j, race.duration) > race.record) {
				race.wins += 1;
			}
		}
		races.push(race);
	}
	let product = 1;
	for (const race of races) {
		product *= race.wins;
	}
	console.log("RESULT:", product);
};

console.time("AAAAAA");
const input = fs.readFileSync("./input2.txt");
main2(input);
console.timeEnd("AAAAAA");
