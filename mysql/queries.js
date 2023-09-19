module.exports = {
    addUser: () => {
        return `INSERT INTO users 
                    (email, password)
                         VALUES
                            (?, ?);`;
    },

    checkUserCreds: () => {
        return `SELECT id FROM users
                 WHERE email = ?
                AND password = ?;`;
    },

    addToken: () => {
        return `INSERT INTO tokens
                (user_id, token)
                VALUES (?, ?);`;
    },

    deleteToken: () => {
        return `DELETE FROM tokens
                WHERE token = ?;`;
    },

    getIdByToken: () => {
        return `SELECT user_id FROM tokens
                WHERE token = ?;`;
    },


    addRecipe: () => {
        return `INSERT INTO favouriteRecipes 
                    (recipe_id, user_id)
                         VALUES
                            (?, ?);`;
    },

    deleteRecipe: () => {
        return `DELETE FROM favouriteRecipes
        WHERE recipe_id = ? AND user_id = ?;
        `;
    },

    getFavouriteRecipes: () => {
        return `SELECT  id, recipe_id AS recipeId FROM favouriteRecipes
        WHERE user_id = ?;
        `;
    },

    deleteAllRecipes: () => {
        return `DELETE FROM favouriteRecipes
        WHERE user_id = ?;
        `;
    },

    deleteUser: () => {
        return `DELETE FROM users
        WHERE id = ?;
        `;
    },

    deleteUserTokens: () => {
        return `DELETE FROM tokens
        WHERE user_id = ?;
        `;
    }

};