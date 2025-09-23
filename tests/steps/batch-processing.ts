import {Given, Then, When} from "@cucumber/cucumber";
import {APIResponse, expect, request} from "@playwright/test";

let names: string[];
let response: APIResponse;
let params: string;

Given('a batch of 10 names', () => {
    names = [
        'andrew',
        'john',
        'jane',
        'bob',
        'mary',
        'david',
        'james',
        'robert',
        'sarah',
        'emily'
    ]

    params = names.map(name => `name[]=${name}`).join('&');
});

When('I request estimate multiple ages', async () => {
    console.log('Requesting age for multiple names:', names);
    const context = await request.newContext();
    response = await context.get(`https://api.agify.io/?${params}`);
})

Then('I should receive a batch success response', async () => {
    console.log(`API Response Status: ${response.status()}`);
    expect(response.ok()).toBeTruthy();
    const responseJson = await response.json();
    console.log('API Response JSON:', responseJson);
});

Then('the response body should include the names', async () => {
    const responseJson = await response.json();
    expect(Array.isArray(responseJson)).toBe(true);
    expect(responseJson.length).toEqual(10);
    names.forEach(name => {
        expect(responseJson).toContain(name);
    })
});

Then('the response body should include numeric ages', async () => {
    const responseJson = await response.json();
    for (const item of responseJson) {
        expect(typeof item.age === 'number' && Number.isFinite(item.age)).toBeTruthy();
    }
});

Then('the response body should include non-zero count values', async () => {
    const responseJson = await response.json();
    for (const item of responseJson) {
        if (item.count === 0) {
            throw new Error('Non-zero count found: ' + item.count + ' for name: ' + item.name);
        }
    }
});
