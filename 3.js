const input1 = [
	"467..114..",
	"...*......",
	"..35..633.",
	"......#...",
	"617*......",
	".....+.58.",
	"..592.....",
	"......755.",
	"...$.*....",
	".664.598..",
];

const input2 = [
"............409..........784...578...802......64..............................486.248..............177....................369...............",
".....-939..........524#...#....=.......*.........+......90.................................76..615..-..@.....961..........$.......*.........",
"............951*........................736...955..258....*.....253@.............210.10.....=...*.......776...*....&...............600..274.",
"152.78..........671.....936.......................*..........14...............................575.=.........214..519.....787.739........*...",
"...*....591......................514*155..........807...............516.............23...5#.......250.531...................*......-..71....",
".............................................254..........69&........*..............*....................*...............*........785.......",
"....5....../.42..908*166..242*825.....................19%............148..822......127..+...+...........971...........206.540.753...........",
"........111.........................%...............$..........635..........*..........222.286..823..........%................&...=630......",
"..821&.......815.............424$...303.322.311..156...........*....786.....91..620............*....319......406......187..............&865.",
"........................&975...............*.........649.40..417.......+.........../............39....................*...........%.........",
"...300............546...........................640...=...................................319............246....883.253...690...526......435",
".................*......#..............571..121*.........542..938.13...532*....726....795.........%........*.............*...........683*...",
"......173.568.624....190................*..........*542....................464..*..................519.144..652.65......926.................",
".......=....*..............................-...@................................592..658..78*537..........#...................303.200*......",
"..780.....716.......858..527.775.....587.314...374.......375....777.166.............................................677*394.....*.....512...",
"....&..............*...........-......*......*.....900...*.../../............287..255.......431...........104..440..........803..844........",
"...............%....875.............920...615.556......488.308....888........@.......$..522*..........511.*............/.....&..............",
"........688....778.............410.................+...............*..#322......234...........692....*.....583.240+....800.............&....",
".......*........................*......844-.........683....941..341...............*..........#......637.....................=768..983.80....",
".......312...........113.........858........427.685........................*211..336..........................502...........................",
"......................*......151........293.+.....*...454................63.............39........831+.........%......./...$................",
"..187........677......165....*......104..*.......145.@.........444..767...................*...975................659.352.844....*.160.......",
"......+.967.#..............116.........+..866...........=.......*......*404..............659.....*...............*............293...*.......",
"...801....*.....937............................/.........553..623....*........567....244......%...816....994.....510....173........547......",
"...........609...............................783.....848..........511.718.....*.............116.........*......................&.......65.46",
"102...................356..810......................*.....721..............244...$.....315...........&..605...22..........665.411..../......",
"..................956*.....*......523.............622........*.................322........*........703............888.......*.......714.....",
"...896.....580.............146.....&..861..............327...766..93.......534...........482..327.........494.....*.......978...............",
"....*.........*..-.....&.........................701.....-.........*...429....................%...$.........*..895..................../.....",
"..561..517..994.248.596......&...$.....196.701.....*............217...*....160........240..+....265..471..76............509..15........245..",
".........*...............615.801.837......*......661.181...707......613...-.......495......959..........*....#...........*....$.............",
".....-...107............@...................&................*.....................*....$............853.....808..249.160.......725......151",
"....549......137..........288@...759.$......961....#..........................788.....846......920................../.......774.............",
"........865...%...993...........#.....850...........636.104..204.192...387...%............382.....+..&.......436........682*.......532......",
"........................893*660...........................-.....*.........&......$........../.334....505.+....-..732*................*......",
"........./....976....*..........35....178.18*970.752...+..........................567..258.......*.......829...........+..358*..*464..189...",
".....676.319..........222......*.................*......559...604.......-.....687.....*..........16..........492......376...................",
"....*.............157.........909................266..........*.........971..+.....211..885...........$.......%.....@............#..........",
".284.....167.....*....83...........408....290...............538........................../....&.84*...885........575..........511..481......",
"............*770..844.=..599..........*......*457.....$861................779..240...$......897..........................520%......*........",
"...........................*..972.527.844.........................&........*..........26........957.................787.........759.........",
"...530#.396&.............670.*.....+.......*.....503*689....486#.558....522........................=..........629..%........................",
"..................96*........320..........972...............................$..776.....................755...*...................265*53..265",
"....48............................736...........*..........771..85..360..705......*501..793..................685........................*...",
".....*...@705.233....648#..........+.........780.....13...=......*....*.........................*..................898%....282........478...",
"..186.....................369............327.........=.........14...472..........942...*.....817.......611....66-..........&......236.......",
"..................308*......#.......226.....&..............573..................*....85.9.........801..*..........217*........237*..........",
".........*............728......847...#................+.......*......267.....634.................=......979...........14...............364..",
"....99.213.......=........468...............%446...647......%..822..../...........819................*.........469.........70.37.......*....",
".................143..762*....977.........................649..................../.....123....-...902.67..939..&.............*........793...",
".......982...=......................................414...................477.........=......266..........=.............622*....672*........",
"..........#.797...../608.......173...=.........................111...............219.....252....................438.726.....902.....25.=....",
"......-..................863..*......805.9.......107..............*........151.....*........*234...422....995....*.....*................866.",
"....670...........544.....*....311.......*....$.$............................-..943.......*........*......=.......167...695.................",
"..................../......508..........278..78.........459+...........................922.201....513.518....985............476%............",
"..556......905..341....683........732*..........437.753..........331*..342..374.475..@.................*....*.........591............+972...",
".../.........*...*........*...........................*.....833.......*...............566....*..........460..621.836..*.....................",
".............627..912......49.........289.....910...737.....*........645.....977..159.....707..104.644............-...872..........&....453.",
".......................................*...../...............287.........375*........-.........*....*..723+...256...........361....184.*....",
"...%..231.......187......8.....*569.138..................963.........184.........899........571...836..........*...*..........*.........349.",
"546...*............+....*....29...........885......20......./......................*.........................95.....660........470..........",
".....568..902........178.............313..*.........*...............706.....19....724....338..........880*......701........996......84.701..",
"....................................*.....253..535.893........+.............=..............*..............520...............&......-........",
"..............&..747............877..990................./.....45.........................604....&...................152......275.....%931..",
"......515....26....=..128........*..........%.....753...374...........522*835.........838.....344...222..........602....+....*..............",
".....................*.....975....12......717.966*.............734.............486...*.................*.....634*..........431..%........645",
"115.388......#......670...............................251..851....*.....666.....*..887.18..532......661..685.....................947....+...",
"...*..........977.........308...........279......63....*..........194..*.....886.........*.../.............*......543.419...................",
"....................355....*....489...............*.....496.............933......714....91.....558*669.....475.../....*..........501........",
"...737..807.................545...*..............873............763....................................864..........152............*........",
"......*..$...553......695..........623..319........................+..681./....@835..669...........530*.......................402.538.......",
"....334.....$.............................................186........*.....977.......*.....................82.....950.....985*...........751",
"...................222......847.........347..............&.........213............+..168..........820&.......@...*....211............150*...",
".....*520......................$.......*......630..............193.......597....266.........744..................950.....*...584............",
"..947.......................@.....903.....889*.......693......-.........*......................*365..........846........655...*.............",
"......*609.........425.478..597.....*..................#..=........=...............469......*............721....*267..........872...........",
"...997.......975..........*.........419........630.691...646......939.................*..865.933.805*676....*...............................",
".........102*....544..984.258.526.........*...=...........................@........473......................932......247...............955..",
".................*......=.......*........553....................517...600..344.....................742...............%....=...........+.....",
"....................351......970..........................280......*.....*........&.........782........................486..............&...",
"...........359...........604.......997...274....682.673....*..156.831.392.....@..228.814......*.........145.......835.............222.570...",
"..694...........+....157.%...848..*.....*.........$....*.246.+.............447.......*......259..@381......*54.....@............%.*.........",
".....*.......433....#..........*..594.184...........743............196.........967.987.......................................649...941.@....",
"......97......................386...............%........................839..............760.............151...&...344................871..",
".....................186..937.....*528.....263.179....#976....405...................+...............522........65...*...........*...........",
"......-893........+....*....*..........@.........................#.401.....72+....719.104.....731...*....31#......93..274+....41.348........",
"...........854.....855...879.........950.....342....771...............................*.......*....546......................................",
"........$......601...........526*943.........*....#..*..............124.&839..#......161....558...............140...........................",
".......131.................................665.266...732.....949......*.......31................@754...*...........932*................&....",
"...............169....889.....271*613........................*.....194...+............................107..............142....551*925.56....",
"........267.....%....*...................................281.750.......563...........848.477..655..........674..............................",
"............312....716.......................#.....802.....*.......281......../.........*......*...........*...708..........................",
".......594..*...............359....462*......405.....=...............&.........439.........759....*........987....*330......................",
"736....*.....580.....26.......*.........................467.........................456...*.....13.102.460..................693.....960.....",
"........227..........&...861...523.554..877.............=.....429................./........383...........*......$.......623....*.........651",
"....568........988......+..................%.....................*689.......@..691...39.........=.....123.......869...........1.........$...",
"....+.....892......581*.............876....................................603.........*......399......................927-.................",
".........*....-........611............*....+......443.=.....856.%559................679..592....................853.........925...34........",
"...26.303.....944...........726.....444.....961....*...433....*......*215...26...95.............82...........................*.....@./......",
"..........710......130..........13..............443../.....391....260......&.......*.....751....*...........................508.......555...",
".........*.....958*.....93..235*......................460........................491.......*.....324.........$409..972...2..................",
"....352..534...........*........./.........#.................580.........834................973......102.632......*.......*............48...",
".................&...820.206..890..66....683....................%...*493.....256...$....................*................434.....884..&.....",
".585/.........664........*...............................%...............512..*..914..188....*................941*...........282....@...+...",
"..........521.........168..../....94.139..............793...............*....827.....*....215..........24.............................787...",
"..790........*...............148...&.*.........................172.205..728...........153.......176......*963..649.....628......19..........",
"......883....806.....686..............226...763.......................#...........229.............*...........*....321..-....../.......60...",
".495....*....................................=..........21..357...839........*968...*............469........339....................../.*....",
"......457.495.........@.....-.....89.613..........214..*......*.....$.....958.......341...%.....................645...274..37......82..465..",
"...70.................932..83.787..*..$..........$.....218..787............................7..287...............*.......*....+..............",
"....*..104...559...92...........*.373....$.............................163...........304.........*...........667.....547..67................",
".851................*.....267.189.........312...434...$837.........344.#..............=......604.679.......................@................",
"....................883....-......258.896....................*.....-.......687..488............*...................615$.....................",
".746................................*...+.173*605.....609...812........721..=..*...........582..906......../...85.........940.409..928......",
".......................136......49.493............../....@..............*.....721....857...*.............62......-...465....*..=......*.....",
".................736.............*.........*.....968..........685..949.755............*.....37..*.............=....................*..53....",
"466..621....812=..*......203....151.....828.48............871*......*............/.....764.....384.........37..905.............&.314........",
".....*.............575....*...........8..........#244............708...........131.....................546..*........641....189.............",
"...801........554..........772.............989.......................................751...523...117......*..538........*..........*........",
".......82/........+..202........*749..........*../....402...140%......................+.....*.......#..202............93..604*..438.567..128",
".307............564..........353............442...153.*.......................516..5.......414................131.......................*...",
"...........765.........259.......148...632..................722..348&..115.........-.............195.$186.729.......19*................602..",
"...69.249....$......+.*......452..*.........288.........975....&......../.....865.................*.........*...744....423........756*......",
"...*...=..........882..801..../..455..........=............-.........16........*..957..841......912..581....887..-...........745......464...",
"....62.................................734......544..........898.....*.......548..=....*.............+.............516..632....*............",
"...............$..............977%......&...512*..............*.......473...............985.678..128.............+...*.....+..330...........",
"..942........181......831$................................430..399...........637*356..........*...../...........656...500.........135*403...",
"...*.........................501.6@..307....174*722..........*........................*281.663..............101.............................",
".997..53.......-.......................*....................67.324%.117........=...227......................./.............385.......198..26",
".......@..634.669...............743.....869..........233...............*......948..........................#....817.......&...........*.....",
".........%.........280..+.........-.66.............%...+......393.999..745..$.......$........472..940.......70.....*........$......+..615...",
"....................@..718..%464....*...........797..........*...............134.....38..560*........*..............388......307...49.......",
"..113.......274.800..............992.......373#......791.....775.873.................................227..849=.357..........................",
"....*..........*........75..........................*....775........*..179......................................*......77.........=293..987.",
"...501..............766*...............26*805......692......*.....917....#.........................+.....483.413..........810...........*...",
".......358.160..............555...798......................684.....................676..........229......*........+..815.................657",
"..........*....432.........-......*..............................550....795...816...$.................758........193....-.......222%.666....",
"......139...$.....#.894..........226.....826..........*248..850$..........#..*....@...........895*..8.....340.+...........922.........=.....",
"..892*....162.........*..................@.........249...........*............845..902...+................#....800..974....*................",
"....................86...337...............710....................143.....................179.....976.......................419.........468.",
];

const main1 = function (input) {
	const symbols = new Set();
	for (const line of input) {
		for (const char of line) {
			if (char === ".") continue;
			if (!isNaN(char)) continue;
			symbols.add(char);
		}
	}
	const partNumbers = [];
	for (let i = 0; i < input.length; i++) {
		const previousLine = input[i - 1] || [];
		const currentLine = input[i];
		const nextLine = input[i + 1] || [];
		const numbers = [];
		let number;
		const regex1 = /\d+/g;
		while ((number = regex1.exec(currentLine)) !== null) {
			numbers.push({number: number[0], index: number.index});
		}
		if (!numbers) continue;
		number: for (const numberObj of numbers) {
			const number = numberObj.number;
			const index = numberObj.index;
			const leftLimit = index - 1;
			const rightLimit = index + number.length;
			
			if (symbols.has(currentLine[leftLimit])) {
				partNumbers.push(number);
				continue;
			}
			if (symbols.has(currentLine[rightLimit])) {
				partNumbers.push(number);
				continue;
			}

			for (let j = leftLimit; j <= rightLimit; j++) {
				if (symbols.has(previousLine[j])) {
					partNumbers.push(number);
					continue number;
				}
				if (symbols.has(nextLine[j])) {
					partNumbers.push(number);
					continue number;
				}
			}
		}
	}
	console.log("RESULT:", partNumbers.reduce((accumulator, number) => accumulator + Number(number), 0));
};

const main2 = function (input) {
	const gears = [];
	for (let i = 0; i < input.length; i++) {
		const previousLine = input[i - 1] || [];
		const currentLine = input[i];
		const nextLine = input[i + 1] || [];
		
		const asterisks = [];
		let asteriskPosition;
		const regex1 = /\*/g;
		while ((asteriskPosition = regex1.exec(currentLine)) !== null) {
			asterisks.push({index: asteriskPosition.index});
		}

		for (const asterisk of asterisks) {
			const index = asterisk.index;
			const border = [index - 1, index, index + 1]
			
			const possiblePair = [];
			
			const previousLineNumbers = getNumbers(previousLine);
			for (const number of previousLineNumbers) {
				if (border.includes(number.index) || border.includes(number.index + number.number.length - 1)) {
					possiblePair.push(number);
				}
			}

			const currentLineNumbers = getNumbers(currentLine);
			for (const number of currentLineNumbers) {
				if (border.includes(number.index) || border.includes(number.index + number.number.length - 1)) {
					possiblePair.push(number);
				}
			}

			const nextLineNumbers = getNumbers(nextLine);
			for (const number of nextLineNumbers) {
				if (border.includes(number.index) || border.includes(number.index + number.number.length - 1)) {
					possiblePair.push(number);
				}
			}

			if (possiblePair.length === 2) {
				gears.push(possiblePair);
			}
			if (possiblePair.length > 2) {
				console.log("MORE THAN 3 NUMBERS TOUCHING AN ASTERISK");
				process.exit();
			}
		}
	}
	let sum = 0;
	for (const gear of gears) {
		let ratio = gear[0].number * gear[1].number;
		sum += ratio;
	}
	console.log("RESULT", sum);
};

const getNumbers = function (line) {
	const numbers = [];
	let number;
	const regex2 = /\d+/g;
	while ((number = regex2.exec(line)) !== null) {
		numbers.push({number: number[0], index: number.index});
	}
	return numbers;
};

main2(input2);