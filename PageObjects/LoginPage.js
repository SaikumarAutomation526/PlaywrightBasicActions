exports.LoginPage= class LoginPage{
 constructor(page){
    this.page=page;
    this.loginLink="#login2"
    this.userName='#loginusername';
    this.password="#loginpassword";
    this.loginBtn="//button[text()='Log in']";
 }
 async goToPage(){
    await this.page.goto("https://www.demoblaze.com/");
 }

  async login(username,password){
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userName).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginBtn).click();
  }
}