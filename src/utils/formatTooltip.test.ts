import formatTooltip from './formatTooltip';

describe('dateFormatter', () => {
    test('returns formatted date to utc string', () => {
        const actual = formatTooltip("2021-07-02T09:03:00.000Z");
        const expected = '2021-Jul-02';

        expect(actual).toStrictEqual(expected);
    });

    test('returns original to invalid date', () => {
        const actual = formatTooltip("Date is invalid");
        const expected = 'Date is invalid';

        expect(actual).toStrictEqual(expected);
    });
});