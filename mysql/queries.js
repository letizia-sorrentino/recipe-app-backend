module.exports = {
    addUser: (username, email, password) => {
        return `INSERT INTO users 
                    (username, email, password)
                         VALUES
                            ("${username}", "${email}", "${password}")`
    },
};