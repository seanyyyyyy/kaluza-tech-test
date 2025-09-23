import {Given, Then, When} from "@cucumber/cucumber";

import {APIResponse, expect, request} from "@playwright/test";

let country = '';
let name = '';
let response: APIResponse;

Given('a name {string}', (inputName: string) => {
    name = inputName;
});

Given('a name {string} and country code {string}', (inputName: string, inputCountry: string) => {
    name = inputName;
    country = inputCountry;
});

When('I request estimated age', async () => {
    console.log(`Requesting age for name: ${name}`);
    const context = await request.newContext();
    response = await context.get(`https://api.agify.io/?name=${name}`);
});

When('I request estimated age and country', async () => {
    console.log(`Requesting age for name: ${name} and country: ${country}`);
    const context = await request.newContext();
    response = await context.get(`https://api.agify.io/?name=${name}&country_id=${country}`);
});

Then('I should receive a success response', async () => {
    console.log(`API Response Status: ${response.status()}`);
    expect(response.ok()).toBeTruthy();
    const responseJson = await response.json();
    console.log('API Response JSON:', responseJson);
});

Then('I should receive an error response {int}', (responseCode: number) => {
    expect(response.status()).toEqual(responseCode);
    console.log(`API Response Status: ${response.status()}`);
});

Then('the response body should include the name', async () => {
    const responseJson = await response.json();
    expect(responseJson.name).toEqual(name);
})

Then('the response body should include a numeric age', async () => {
    const responseJson = await response.json();
    console.log('Age:', responseJson.age);
    expect(typeof responseJson.age === 'number' && Number.isFinite(responseJson.age)).toBeTruthy();
})

Then('the response body should include a null age', async () => {
    const responseJson = await response.json();
    console.log('Age:', responseJson.age);
    expect(responseJson.age).toBeNull();
})

Then('the response body should include a count value', async () => {
    const responseJson = await response.json();
    expect(typeof responseJson.count === 'number' && Number.isFinite(responseJson.count)).toBeTruthy();
})

Then('the response body should include a zero count value', async () => {
    const responseJson = await response.json();
    expect(responseJson.count).toEqual(0);
})

Then('the response body should include the country_id', async () => {
    const responseJson = await response.json();
    expect(responseJson.country_id).toEqual(country);
})
