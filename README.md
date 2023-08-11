## Recipe App Backend

Created using Node.js and Express.js, this project serves as the backend of the [Love Food App](https://lovefoodapp.co.uk/).

Love Food enables users to store recipes sourced from the Spoonacular API. More information about the front end is available in the [project repository](https://github.com/letizia-sorrentino/recipe-app-project).

## Overview
The backend incorporates two key routes:

1. **Account**: Responsible for tasks such as account creation, deletion, login, and logout.
2. **Favorites**: Allows users to manage their preferred recipes by enabling saving, storage, and deletion of their favoured recipes.

A SQL database is used to store data. It contains three interconnected tables that are used for:

- Usernames and passwords
- Authentication tokens
- Recipe IDs

For extra security, passwords undergo hashing prior to storage within the database.

Finally, the backend has been deployed on a web hosting service to ensure seamless accessibility and performance.
