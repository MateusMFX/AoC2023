const fs = require("fs");

const extractData = function (text) {
	const rawData = text.trim().split("\n");
	rawData.shift();
	const processedData = [];
	for (const line of rawData) {
		const parts = line.split(" ");
		processedData.push(parts.map(a => Number(a)));
	}
	return processedData;
};

const reverseMap = function (value, map) {
	let result;
	for (const line of map) {
		const destinationRangeStart = line[0];
		const sourceRangeStart = line[1];
		const rangeLength = line[2];
		const number = value;
		if (number >= destinationRangeStart && number < destinationRangeStart + rangeLength) {
			const diff = number - destinationRangeStart;
			result = sourceRangeStart + diff;
			break;
		}
	}
	return result;
};

const seedExists = function (seed, seeds) {
	for (let i = 0; i < seeds.length; i += 2) {
		let seedRangeStart = Number(seeds[i]);
		let rangeLength = Number(seeds[i + 1]);
		if (seed > seedRangeStart && seed < seedRangeStart + rangeLength) {
			return true;
		}
	}
	return false;
}

const main = function (input) {
	const groups = input.toString("UTF-8").split("\n\n");
	const seeds = groups[0].split("seeds: ")[1].split(" ").map(a => Number(a));
	const seedToSoil = extractData(groups[1]);
	const soilToFertilizer = extractData(groups[2]);
	const fertilizerToWater = extractData(groups[3]);
	const waterToLight = extractData(groups[4]);
	const lightToTemperature = extractData(groups[5]);
	const temperatureToHumidity = extractData(groups[6]);
	const humidityToLocation = extractData(groups[7]);
	let lowestLocation = 0;
	while (true) {
		let humidity = reverseMap(lowestLocation, humidityToLocation) || lowestLocation;
		let temperature = reverseMap(humidity, temperatureToHumidity) || humidity;
		let light = reverseMap(temperature, lightToTemperature) || temperature;
		let water = reverseMap(light, waterToLight) || light;
		let fertilizer = reverseMap(water, fertilizerToWater) || water;
		let soil = reverseMap(fertilizer, soilToFertilizer) || fertilizer;
		let seed = reverseMap(soil, seedToSoil) || soil;
		let exists = seedExists(seed, seeds);
		if (exists) {
			break;
		}
		lowestLocation += 1;
	}
	console.log("RESULT:", lowestLocation);
};

const input1 = fs.readFileSync("./input2.txt");
main(input1);
