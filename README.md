# eCommerce


# Project Description
This tool is the back end of an application that allows a user to make API calls to a server. 

# Usage Information
Once the server is started, make sure the database and seed files were loaded. 

# Installation Instructions
Start the server. Make API calls to http://localhost:4001/api/products, http://localhost:4001/api/tags, http://localhost:4001/api/categories

# Questions
If you have any questions, please do not hesitate to reach out at alicia.krolak4@gmail.com or on LinkedIn at Alicia Krolak.
You can find me on GitHub as aliciajk. 

# Screenshots
![image](https://user-images.githubusercontent.com/78323646/120585892-8ed06c00-c400-11eb-94b4-e4918edf4dc0.png)


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

