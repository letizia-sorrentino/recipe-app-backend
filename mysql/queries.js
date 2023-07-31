module.exports = {
    addUser: (username, email, password) => {
        return `INSERT INTO users 
                    (username, email, password)
                         VALUES
                            ("${username}", "${email}", "${password}");`;
    },

    checkUserCreds: (username, email, sha256Password) => {
        return `SELECT id FROM users
                 WHERE username LIKE "${username}" 
                    AND email LIKE "${email}" 
                    AND password LIKE "${sha256Password}";`;
    },

    addToken: (userId, token) => {
        return `INSERT INTO tokens
                (user_id, token)
                VALUES ("${userId}", "${token}");`;
    },

    getIdByToken: (token) => {
        return `SELECT user_id FROM tokens
                WHERE token LIKE "${token}";`;
    },


    addRecipe: (title, image, imageType, userId) => {
        return `INSERT INTO favouriteRecipes 
                    (title, image, imageType, user_id)
                         VALUES
                            ("${title}", 
                            "${image}", 
                            "${imageType}", 
                            "${userId}");`;
    },

    deleteRecipe: (id, userId) => {
        return `DELETE FROM favouriteRecipes
        WHERE id LIKE ${id} AND user_id LIKE ${userId};
        `;
    }


};