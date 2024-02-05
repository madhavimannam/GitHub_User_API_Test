
const user = {
    login: "madhavimannam",
    location: "Pleasanton",
    url: "https://api.github.com/users/madhavimannam"
};

// Get Authenticated User
function get_user(token) {

    // To implement by calling Github User API
    return user;
}

function update_user(token, userRecordToUpdate) {

    // To implement by calling Github User API
}

function get_users(token) {

    // To implement by calling Github User API

    const users = [ user ];
    return users;
}

function get_user_by_name(token, userName) {

    // To implement by calling Github User API
    return user;
}

module.exports = get_user;
