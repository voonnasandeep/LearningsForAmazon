package com.pluralsight;

/**
 * Hello world!
 *
 */

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;

public class App
{
    public static void main( String[] args ) throws MalformedURLException, InterruptedException
    {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications");
        WebDriver driver = new ChromeDriver(options);
        driver.get("http://www.facebook.com");
        WebElement emailField =  driver.findElement(By.id("email"));
        emailField.sendKeys("voonnasandeep@gmail.com");
        WebElement passwordField = driver.findElement(By.id("pass"));
        passwordField.sendKeys("9966084563");
        driver.findElement(By.cssSelector("input[data-testid='royal_login_button']")).click();
        //Thread.sleep(2000);
        //WebElement userNavList = driver.findElement(By.id("userNavigationLabel"));
        //userNavList.click();
        //driver.findElement(By.cssSelector("a[data-gt*='menu_logout']")).click();
        //driver.findElement(By.xpath("//span[contains(text(),’Log Out’)]")).click();
        //driver.findElement(By.partialLinkText("Log out")).click();
        WebDriverWait wait = new WebDriverWait(driver, 5);

        WebElement accountSettings = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Account Settings")));
        accountSettings.click(); //this will click on setting link to open menu

        WebElement logOut = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("Log Out")));
        logOut.click();
        driver.quit();
    }
}