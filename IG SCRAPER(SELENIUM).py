from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time

##initialization
driver=webdriver.Firefox(executable_path="C:/Users/Will/AppData/Local/Programs/Python/Python39/Selenium/geckodriver.exe")
driver.get("https://www.openpowerlifting.org/")
time.sleep(3)

settled=set()


    ##Capture data into set
def capture():
    Page_HTML=driver.page_source
    bsoup=BeautifulSoup(Page_HTML,'html.parser')

    row=bsoup.findAll('a',{'class':'instagram'})
    for i in range(5):
        for i in row:
            settled.add(i['href'])
        driver.find_element_by_tag_name('body').send_keys(Keys.PAGE_DOWN)
capture()

print(settled)
print(len(settled))
