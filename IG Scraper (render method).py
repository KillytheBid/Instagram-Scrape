from requests_html import HTMLSession

#create the session
session = HTMLSession()

#define our URL
url = 'https://www.openpowerlifting.org/'

#use the session to get the data
r = session.get(url)

#Render the page, up the number on scrolldown to page down multiple times on a page
r.html.render(sleep=1, keep_page=True, scrolldown=1)

#take the rendered html and find the element that we are interested in
instagram = r.html.find('a.instagram')

#loop through those elements extracting the text and link
for item in instagram:
    instagram = {
        'name': item.text,
        'link': item.absolute_links
    }
        print(item)

