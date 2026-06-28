import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

import { loginData } from '../data/loginData';

test.describe('Login', () => {
    test('Login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        // Verify
        await expect(page).toHaveURL(/login/);
    });


    test('Login failed', async ({ page }) => {
        const loginPage = new LoginPage(page)

        await loginPage.goto()
        await loginPage.login(
            loginData.invalidEmail.email,
            loginData.invalidEmail.password,
        )

        await expect(page).toHaveURL(/login/)
    })
});