module.exports = {
    addUser: (email, password) => {
        return `INSERT INTO users 
                    (email, password)
                         VALUES
                            ("${email}", "${password}");`;
    },

    checkUserCreds: () => {
        return `SELECT id FROM users
                 WHERE email = ?
                AND password = ?;`;
    },

    addToken: (userId, token) => {
        return `INSERT INTO tokens
                (user_id, token)
                VALUES (${userId}, "${token}");`;
    },

    deleteToken: (token) => {
        return `DELETE FROM tokens
                WHERE token LIKE "${token}";`;
    },

    getIdByToken: (token) => {
        return `SELECT user_id FROM tokens
                WHERE token LIKE "${token}";`;
    },


    addRecipe: (recipeId, userId) => {
        return `INSERT INTO favouriteRecipes 
                    (recipe_id, user_id)
                         VALUES
                            (${recipeId}, 
                            ${userId});`;
    },

    deleteRecipe: (id, userId) => {
        return `DELETE FROM favouriteRecipes
        WHERE recipe_id = ${id} AND user_id = ${userId};
        `;
    },

    getFavouriteRecipes: (userId) => {
        return `SELECT  id, recipe_id AS recipeId FROM favouriteRecipes
        WHERE user_id LIKE ${userId};
        `;
    },

    deleteAllRecipes: (userId) => {
        return `DELETE FROM favouriteRecipes
        WHERE user_id LIKE ${userId};
        `;
    },

    deleteUser: (userId) => {
        return `DELETE FROM users
        WHERE id LIKE ${userId};
        `;
    },

    deleteUserTokens: (userId) => {
        return `DELETE FROM tokens
        WHERE user_id LIKE ${userId};
        `;
    }

};