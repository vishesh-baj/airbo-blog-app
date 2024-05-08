# React and Node.js Application

This is a sample blog application built with React for the frontend and Node.js for the backend.

## Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React and Node.js.

## Installation

1. Clone this repository:
2. install packages using npm i
3. copy .env file to server directory
4. type npm run dev to start client and server respectively

NOTE - Make sure you create .env file in server directory and copy the env variables I've provided you on mail. Without .en, application wont run.


NOTE - In case you are getting errors while installing node modules, try to delete package-lock.json and retry. In most cases it will work by resetting package versions as per your system configuration.


## Tech Stack 
1. React (v18)
2. Typescript (v5.2)
3. TailwindCSS
4. DaisyUI
5. React-icons
6. React-query
7. React-hot-toast
8. React-hook-form
9. Axios
10. React-Redux
11. Redux-Toolkit
12. NodeJs + Typescript
13. Express
14. MongoDB
15. Mongoose
16. Cors
17. JWT

### summary
This simple blog application is build with in demand cutting edge technologies. The front end is build with react and typescript for type safety. For styling the application I have used TailwindCSS with DaisyUI for stunning design out of the box with not a single line of css written during development. 
For data fetching I have used combination of axios and react-query to get best of both worlds (efficiency and reliability) for fast paced development. Form validation is a crucial par of any front end application, Good for us, I have used react-hook-form; A light weight typesafe, typescript compliant 
react library for validating forms in our application. For notification system, I used react-hot-toast, which is very handy and easy to configure react library to integrate complex notification systems in any react application. For managing global state
I used react-redux with its latest extension redux-toolkit that allows us to configure one way data flow between our application easily and in a developer friendly way (Yeah! no need of excess boilerplate). 

For backend I used Node with Express framework along with typescript for type safety in our application. For database I used NoSQL database MongoDB with its framework Mongoose that drastically aids in data manipulation during development. 
For authentication I used jsonwebtoken library to integrate token based authentication in our application. For cross origin resource sharing I used CORS middleware so that we can connect our frontend with backend without any hastle or digging deep in header 
configuration. 

Every route that requires protection is protected in both backend and frontend. In BE, I used a verifyToken middleware that checks the token passedin header from frontend during every request. For FE, I used protectedRoute wrapper on top of Route component
so that noone can access routes that they are not authorized to access. For example, If you are already logged in, You cannot access login or register routes. 

### extras 
1. As I am dedicated to develop robust, performant and good looking user interfaces, I've added a theme section through which you can customize you application as per your desire. With single click from Navbar you can toggle between 
various themes I've curated for the application. Furthermore, You can find plathora of more themes in constants directory in FE, just comment out which ever you like in your app, and It'll be persistant throughout your sessions as its 
configured with localstorage as well. 

2. I added authentication system in our application so that not only you, but anyone can use this application and curate it to their liking. All you need is to register and you are good to go. All the sensetive data is hashed multiple times 
before its saved to database, So you dont have to worry about security either.

3. Adding protected routes is one of the main highlights as far as security is concerned in our application. I've added protection in both BE and FE. 

4. Whole application is mobile responsive, hence it can be used both on mobile and pc for better user experience. 


