# EECS1012_Project_Elements

Team Name:  kings_Of_Coding

Team Members: 

Samir Osmani     	   samir241@my.yorku.ca	Section B	Lab 04

Georgy Retinskiy	   drofel@my.yorku.ca		Section B	Lab 04

Yukun Xie		   robertx@my.yorku.ca	Section B 	Lab 04


Project Title: Element Wars

Project Description: Element wars is a similar game to rock paper and scissors but instead, it uses water, fire, and wind. Fire beats wind but loses to water Wind beats water loses to fire and Water beats fire loses to wind. Moreover, the structure is flexible and it's possible to add new elements, increasing the complexity and making the game more fun! When you visit the website 2 buttons, normal mode and impossible mode appear. In normal mode the user chooses one of the elements, then the server generates a number that corresponds to the element and sends it to the client. Then the client compares two inputs and decides the winner. In impossible mode, the computer chooses the element based on the user input so that it always wins. When you choose difficulty and the game starts, buttons of elements appear and you have to choose one. This game will go up to 5 rounds, after each round the winning table for the game is shown. There will also be a scoreboard displaying how many wins/losses there are in both game modes. At any time it’s possible to go to the main screen by pressing the home button.

Method 1: Function homeScreen()
When the program is opened it starts with this function and will have two different modes which will redirect the user.

Method 2: Function normalMode()
Will receive a random number from the function random normal and will take the user input to compare them, will also take either fire wind or water and display pictures of either one

Method 3: Function impossibleMode()
Will check what the user has inputted and make the user lose every time, will also take either fire wind, or water and display pictures of either one

Method 4: Function scoreBoard()
Displays the current scoreboard when the five rounds are over it will count as 1 win to whoever wins

Method 5: Function game()
will explain the rules of the game before playing 

Method 6: Function fire()
displays fire pictures when chosen will have up to 5 pictures for 5 rounds

Method 7: Function wind()
displays wind pictures when chosen will have up to 5 pictures for 5 rounds

Method 8: Function water()
displays water pictures when chosen will have up to 5 pictures for 5 rounds

Method 9: Function backToHomeScreen()
takes the user back to the home screen to change the game mode 

Method 10: Function exit()
exits completely and will say thanks for playing message after can not do anything else

Method 11: Function userInput()
checks what the user has chosen and will correspond to either fire wind or water

Method 12: Function randomNomal()
gives a random number between 1 and 3 which will correspond to either fire wind or water

Method 13: Function bestOfFive()
will have five rounds but will show the current score of the five rounds
