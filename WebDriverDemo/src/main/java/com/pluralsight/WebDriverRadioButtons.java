package com.pluralsight;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class WebDriverRadioButtons {
    public static void main(String args[]) throws MalformedURLException {
        WebDriver driver = new ChromeDriver();
        driver.get("C:\\Users\\vosandee\\IdeaProjects\\WebDriverDemo\\src\\main\\webapp\\radiobuttontest.html");
        List<WebElement> radioButtons = driver.findElements(By.name("color"));
        radioButtons.get(2).click();

        for (WebElement radioButton : radioButtons)
        {
            if (radioButton.isSelected())
            {
                System.out.println("The checked radioButton is " + radioButton.getAttribute("value"));
            }
        }

    }
}