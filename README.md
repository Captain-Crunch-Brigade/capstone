# Project Atelier | Hack Reactor Front-End Capstone

### Contents
* [Overview](#overview)
* [Team Members](#team-members)
* [Description](#description)
* [Set Up](#set-up)
* [Acknowledgments](#acknowledgements)
### Overview

This Hack Reactor front-end capstone project is a single-page shopping website simulation of an e-commerce website. Users will be able to interact with the UI and view products for sale. Feature highlights include adding user questions, viewing related product items, and accessing prdouct information such as product details and photos using a restful API.

Given a wireframe design, our group of three software engineering students had to develop a front-end project reflecting the design and following a list of features requirements.

---
### Team Members

*Hack Reactor Cohort - RFP2209*

Group Name - Captian Crunch Brigade

* Robert Garcia - Product Overview
* Kee Wook Lee - Related Items & Comparison
* James Flaws II - Questions & Answers

---
### Description

Our application allows the user to click through products and styles to add to their shopping carts. They can view related product items to the selected item in order to make comparisons and/or select the item to add it to the main viewer. In addition, users can see the current questions asked for the selected product as well as add their own questions & answers. Overall, there is a click tracker that logs the users’ click interactions into an API.

*Main Components*

![Product Overview](https://github.com/Captain-Crunch-Brigade/capstone/blob/main/screenshots/productOverview.png)

1) Product Overview
* The Overview module is top-most module on the Product Detail page.
* This component will guide the customer through selecting a specific style and size to add to their cart.

![Related Products](https://github.com/Captain-Crunch-Brigade/capstone/blob/main/screenshots/relatedProducts.png)

2) Related Items & Comparison
* The Related Items & Comparison module allows viewing and comparison of related item for the product selected.
* This component extends the ability to select, view, and add to cart other products that are related to a particular product item.

![Questions and Answers](https://github.com/Captain-Crunch-Brigade/capstone/blob/main/screenshots/questionsAnswers.png)

3) Questions & Answers
* The Questions & Answers module allows asking and answering of questions for the product selected.
* This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.

---
### Set Up

Our application uses React, Express, Axios, webpack, and babel. To set up and run the application we must first install the required npm packages and then run the npm commands to start webpack and the server. We would also need our own .env file for autorization access.

1) In the project's root directory install the required packages by running the following command in your terminal:
```
npm install
```
2) Run the following command to start the server:
```
npm run start
```
3) In a separate terminal, run webpack.
```
npm run dev-server
```

4) Rename the `.env.example` file to `.env` and use GitHub personal access token for API_Key.

5) Open the project in your web browser.
http://localhost:8080

---
### Acknowledgements

Robert: Thank you fellow teammates Kee and James. Awesome learning experience. And thanks to the entire HR team as well as my fellow classmates.

---

[Link to Original Repo](https://github.com/Captain-Crunch-Brigade/capstone)
