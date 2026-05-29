const { test,expect} = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const BookStorePage = require('../Pages/BookStorePage');
import Data from "../TestData/LoginData.json"

test('DemoQA Book Store - POM Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  const BookName = 'Learning JavaScript Design Patterns';

  // Navigate & Login
  await loginPage.goto();
  await loginPage.login(Data.Username,Data.Password);
  await loginPage.validateLogin(Data.Username);

  // Book Store actions
  await bookStorePage.openBookStore();
  await bookStorePage.searchBook(BookName);
  await bookStorePage.validateBook(BookName);
  await bookStorePage.writeBookDetailsToFile(BookName);

  // Logout
  await loginPage.logout();
});
