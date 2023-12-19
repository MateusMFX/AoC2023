const fs = require("fs");
const input1 = fs.readFileSync("./input2.txt");

const extractData = function (text) {
	const rawData = text.trim().split("\n");
	rawData.shift();
	const processedData = [];
	for (const line of rawData) {
		processedData.push(line.split(" "));
	}
	return processedData;
};

const mapValues = function (results, map) {
	for (const line of map) {
		const destinationRangeStart = Number(line[0]);
		const sourceRangeStart = Number(line[1]);
		const rangeLength = Number(line[2]);
		for (const key in results) {
			const number = Number(key);
			if (number >= sourceRangeStart && number < sourceRangeStart + rangeLength) {
				const diff = number - sourceRangeStart;
				results[number] = destinationRangeStart + diff;
			}
		}
	}
	const newResults = {};
	for (const key in results) {
		newResults[results[key]] = results[key];
	}
	return newResults;
};

const main = function (input) {
	const groups = input.toString("UTF-8").split("\n\n");
	const seeds = groups[0].split("seeds: ")[1].split(" ");
	const seedToSoil = extractData(groups[1]);
	const soilToFertilizer = extractData(groups[2]);
	const fertilizerToWater = extractData(groups[3]);
	const waterToLight = extractData(groups[4]);
	const lightToTemperature = extractData(groups[5]);
	const temperatureToHumidity = extractData(groups[6]);
	const humidityToLocation = extractData(groups[7]);

	const seedMap = {};
	for (const seed of seeds) {
		seedMap[seed] = seed;
	}

	let results = mapValues(seedMap, seedToSoil);
	results = mapValues(results, soilToFertilizer);
	results = mapValues(results, fertilizerToWater);
	results = mapValues(results, waterToLight);
	results = mapValues(results, lightToTemperature);
	results = mapValues(results, temperatureToHumidity);
	results = mapValues(results, humidityToLocation);
	console.log("RESULT", results);
};

const mapValue2 = function (value, map) {
	let result;
	for (const line of map) {
		const destinationRangeStart = Number(line[0]);
		const sourceRangeStart = Number(line[1]);
		const rangeLength = Number(line[2]);
		const number = Number(value);
		if (number >= sourceRangeStart && number < sourceRangeStart + rangeLength) {
			const diff = number - sourceRangeStart;
			result = destinationRangeStart + diff;
			break;
		}
	}
	if (!result) {
		result = value;
	}
	return result;
};

const main2 = function (input) {
	const groups = input.toString("UTF-8").split("\n\n");
	const seeds = groups[0].split("seeds: ")[1].split(" ");
	const seedToSoil = extractData(groups[1]);
	const soilToFertilizer = extractData(groups[2]);
	const fertilizerToWater = extractData(groups[3]);
	const waterToLight = extractData(groups[4]);
	const lightToTemperature = extractData(groups[5]);
	const temperatureToHumidity = extractData(groups[6]);
	const humidityToLocation = extractData(groups[7]);
	
	let lowestLocation = Infinity;
	for (let i = 0; i < seeds.length; i += 2) {
		let seed1 = Number(seeds[i]);
		let seed2 = Number(seeds[i + 1]);
		for (let j = seed1; j < seed1 + seed2; j++) {
			let results = mapValue2(j, seedToSoil);
			results = mapValue2(results, soilToFertilizer);
			results = mapValue2(results, fertilizerToWater);
			results = mapValue2(results, waterToLight);
			results = mapValue2(results, lightToTemperature);
			results = mapValue2(results, temperatureToHumidity);
			results = mapValue2(results, humidityToLocation);
			if (results < lowestLocation) {
				lowestLocation = results;
			}
		}
	}
	console.log("RESULT:", lowestLocation);
};

main2(input1)
