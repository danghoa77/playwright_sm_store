import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(private page: Page) {
        this.email = page.getByRole("textbox", {
            name: "Email",
        });
        this.password = page.getByRole("textbox", {
            name: "Password",
        });
        this.loginButton = page.getByRole("button", {
            name: "Login",
        });
    }


    async goto() {
        await this.page.goto("/login");
    }

    async login(email: string, password: string) {

        await this.email.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}