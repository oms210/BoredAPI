/**
 * @jest-environment jsdom
 */
const {
    create_activity_row,
    add_header_row,
    get_activity,
} = require('./src/Bored');

//Mock DOM
global.document.createElement = jest.fn().mockImplementation((tagName) => ({
    tagName,
    innerText: '',
    appendChild: jest.fn(),
}));

global.document.querySelector = jest.fn().mockImplementation((selector) => {
    if (selector === '#activities-table-body') {
        return {
            innerHTML: '',
            appendChild: jest.fn(),
        };
    } else if (selector === '#total-suggestions') {
        return {
            value: '3',
        };
    }
});

global.document.getElementById = jest.fn().mockImplementation((id) => ({
    id,
    style: {
        display: '',
    },
    innerHTML: '',
}));

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                activity: 'Test activity',
                type: 'Test type',
                participants: 5,
                price: 0,
            }),
    })
);

describe('create_activity_row', () => {
    test('should create a new table row with activity data', () => {
        const activitiesTableBody = global.document.createElement('tbody');
        const activityData = {
            activity: 'Test activity',
            type: 'Test type',
            participants: 5,
            price: 0,
        };
        const index = 1;

        create_activity_row(activitiesTableBody, activityData, index);

        expect(activitiesTableBody.appendChild).toHaveBeenCalledTimes(1);
        expect(global.document.createElement).toHaveBeenCalledTimes(5);
    });
});

describe('add_header_row', () => {
    test('should add a new table header row', () => {
        const activitiesTableBody = global.document.createElement('tbody');

        add_header_row(activitiesTableBody);

        expect(activitiesTableBody.appendChild).toHaveBeenCalledTimes(1);
        expect(global.document.createElement).toHaveBeenCalledTimes(5);
    });
});

describe('get_activity', () => {
    test('should make API requests and update progress bar', async () => {
        const bar = {
            set: jest.fn(),
            animate: jest.fn(),
        };

        await get_activity(bar);

        expect(global.fetch).toHaveBeenCalledTimes(3);
        expect(bar.set).toHaveBeenCalledTimes(4);
        expect(bar.animate).toHaveBeenCalledTimes(1);
        expect(global.document.getElementById).toHaveBeenCalledTimes(2); 
    });
});
