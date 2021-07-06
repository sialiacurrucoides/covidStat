import formatAxisDate from './formatAxisDate';

describe('dateFormatter', () => {
    test('returns formatted date to utc string', () => {
        const actual = formatAxisDate("2021-07-02T09:03:00.000Z");
        const expected = 'Jul/02';

        expect(actual).toStrictEqual(expected);
    });

    test('returns original to invalid date', () => {
        const actual = formatAxisDate("Date is invalid");
        const expected = 'ND';

        expect(actual).toStrictEqual(expected);
    });
});