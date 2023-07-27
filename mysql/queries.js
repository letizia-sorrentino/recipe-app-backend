module.exports = {
    addUser: (username, email, password) => {
        return `INSERT INTO users 
                    (username, email, password)
                         VALUES
                            ("${username}", "${email}", "${password}")`
    },

    checkUserCreds: (username, email, sha256Password) => {

        return `SELECT id FROM users
                 WHERE username LIKE "${username}" 
                    AND email LIKE "${email}" 
                    AND password LIKE "${sha256Password}"`
    },





};