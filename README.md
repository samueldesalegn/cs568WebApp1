# MIU-CS568-2023-09-Workshop01
# Workshop 1: ES6 & Components & Props & List & Style
## Assume that you have a system to manage books. Each book has properties: title, author, price, ISBN, id
## Create a React application from a scratch
## Please use CSS to style and position your app
## Please implement the following features
1. App Component: The app contains the BookList, SectionList, and the button to show these components exclusively. Assume that the list of books is initialized in the file App.js.
2. BookList: It receives all books as props and displays the list of Books
3. SectionList: It contains the sorted books from the above list. A group of books with the same price will be colored differently from the previous group, and each group will have a header, which is the price of this group.
4. Book: It displays the information of a book.
5. Footer: It shows your copyright. Please place it at the bottom of the page.
6. (Compro) Timer: This page has a button to show or hide a Timer. You will see three components when you show the Timer: Second, Minute, and Button Start. By clicking the Start button, the Timer increases the Second every second from 0 - 59. When the Second reaches 59, the Second will start again from 0, and the Minute will increase by 1. While the Timer is working, the button Start changes to Stop. If users click Stop, the Timer will reset the Second and the Minute to 0 and stop.
* Second: Display the counting seconds.
* Minute: Show the counting minutes.
* Button: The button's text can be either Start or Stop, depending on the status of the Timer.
