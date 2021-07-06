import calcCustomData from "./calcCustomData";

const variable1 = 'deceased';
const variable2 = 'infected';

const dataSlice = [{
    infected: 100,
    activeInfected: 560,
    deceased: 10,
    recovered: 34,
    quarantined: 78,
    tested: 2345,
    sourceUrl: "source",
    lastUpdatedAtSource: "date",
    readMe: "readMe"
},
{
    infected: 25,
    activeInfected: 560,
    deceased: 5,
    recovered: 34,
    quarantined: 78,
    tested: 2345,
    sourceUrl: "source",
    lastUpdatedAtSource: "date",
    readMe: "readMe"
}
];

describe("calcCustomData", () => {

    test('should provide a divided by b', () => {
        const actual = calcCustomData(dataSlice, variable1, variable2, 'divided by');
        const expected = [{
            infected: 100,
            activeInfected: 560,
            deceased: 10,
            recovered: 34,
            quarantined: 78,
            tested: 2345,
            sourceUrl: "source",
            lastUpdatedAtSource: "date",
            readMe: "readMe",
            custom: 0.1
        },
        {
            infected: 25,
            activeInfected: 560,
            deceased: 5,
            recovered: 34,
            quarantined: 78,
            tested: 2345,
            sourceUrl: "source",
            lastUpdatedAtSource: "date",
            readMe: "readMe",
            custom: 0.2
        }];

        expect(actual).toStrictEqual(expected);
    });

    test('should provide b subtracted from a', () => {
        const actual = calcCustomData(dataSlice, variable1, variable2, 'minus');
        const expected = [{
            infected: 100,
            activeInfected: 560,
            deceased: 10,
            recovered: 34,
            quarantined: 78,
            tested: 2345,
            sourceUrl: "source",
            lastUpdatedAtSource: "date",
            readMe: "readMe",
            custom: -90
        },
        {
            infected: 25,
            activeInfected: 560,
            deceased: 5,
            recovered: 34,
            quarantined: 78,
            tested: 2345,
            sourceUrl: "source",
            lastUpdatedAtSource: "date",
            readMe: "readMe",
            custom: -20
        }];

        expect(actual).toStrictEqual(expected);
    });
});