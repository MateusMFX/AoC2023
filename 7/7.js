const fs = require("fs");

const handRanks = {
	7: "FIVE_OF_A_KIND",
	6: "FOUR_OF_A_KIND",
	5: "FULL_HOUSE",
	4: "THREE_OF_A_KIND",
	3: "TWO_PAIRS",
	2: "ONE_PAIR",
	1: "HIGH_CARD",
};

const cardRanks = {
	A: 14,
	K: 13,
	Q: 12,
	J: 11,
	T: 10,
	9: 9,
	8: 8,
	7: 7,
	6: 6,
	5: 5,
	4: 4,
	3: 3,
	2: 2
};

const main = function (input) {
	const hands = [];
	for (const line of input.toString("UTF-8").split("\n")) {
		if (!line || !line.trim()) continue;
		const [cards, bid] = line.split(" ");
		const hand = {
			cards,
			bid,
			value: 1,
			cardValues: []
		};
		const cardCount = {};
		for (const char of hand.cards) {
			cardCount[char] = cardCount[char] + 1 || 1;
			hand.cardValues.push(cardRanks[char]);
		}
		
		for (const key in cardCount) {
			if (cardCount[key] === 5) {
				hand.value = 7;
				break;
			}
			if (cardCount[key] === 4) {
				hand.value = 6;
				break;
			}
			if (cardCount[key] === 3) {
				if (hand.value === 2) {
					hand.value = 5;
				} else {
					hand.value = 4;
				}
			}
			if (cardCount[key] === 2) {
				if (hand.value === 4) {
					hand.value = 5;
				} else if (hand.value === 2) {
					hand.value = 3;
				} else {
					hand.value = 2;
				}
			}
		}
		hands.push(hand);
	}
	hands.sort(function (a, b) {
		if (a.value < b.value) {
			return -1;
		}
		if (a.value === b.value) {
			for (let i = 0; i < 5; i++) {
				if (a.cardValues[i] < b.cardValues[i]) {
					return -1
				}
				if (a.cardValues[i] > b.cardValues[i]) {
					return 1;
				}
			}
		}
		if (a.value > b.value) {
			return 1;
		}
	});
	let sum = 0;
	for (let i = 0; i < hands.length; i++) {
		// console.log(123, handRanks[hands[i].value], hands[i].cardValues, hands[i].bid, (i + 1));
		sum += (i + 1) * hands[i].bid;
	}
	console.log("RESULT:", sum);
};

console.time("AAAAAA");
const input = fs.readFileSync("./input2.txt");
main(input);
console.timeEnd("AAAAAA");
