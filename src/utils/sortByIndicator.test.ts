import sortByIndicator from './sortByIndicator';
import { Data } from '../components/Chart/Chart';

const mockData = [{
    infected: 100,
    activeInfected: 560,
    deceased: 10,
    recovered: 34,
    quarantined: 78,
    tested: 2345,
    sourceUrl: "source",
    lastUpdatedAtApify: "date",
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
    lastUpdatedAtApify: "date",
    readMe: "readMe"
}];

describe('sortByIndicator', () => {
    test('the values increase', () => {
        const actual = sortByIndicator(mockData, 'infected');
        const expected = [
            {
                infected: 25,
                activeInfected: 560,
                deceased: 5,
                recovered: 34,
                quarantined: 78,
                tested: 2345,
                sourceUrl: "source",
                lastUpdatedAtApify: "date",
                readMe: "readMe"
            },
            {
            infected: 100,
            activeInfected: 560,
            deceased: 10,
            recovered: 34,
            quarantined: 78,
            tested: 2345,
            sourceUrl: "source",
            lastUpdatedAtApify: "date",
            readMe: "readMe"
        }];

        expect(actual).toStrictEqual(expected);
    });

    test("returns empty array if there are no data", () => {
        const actual:Data[]|undefined = sortByIndicator([], 'deceased');
        const expected:Data[] = [];

        expect(actual).toStrictEqual(expected);
    });
});