const get_user = require("./user");
const update_user = require("./user");
const get_users = require("./user");
const get_user_by_name = require("./user");
jest.mock('./user');

describe("Github User Test", () => {

    let accessToken = "<read-from-config>";

    const mockUserObject = {
        login: "madhavimannam",
        location: "Pleasanton",
        url: "https://api.github.com/users/madhavimannam"
    };

    test('Check Get User', () => {

        get_user.mockImplementation(() => mockUserObject);

        expect(get_user(accessToken).login).toBe('madhavimannam');
        expect(get_user(accessToken).location).toBe('Pleasanton');
        expect(get_user(accessToken).url).toBe('https://api.github.com/users/madhavimannam');
    });

    test('Update User', () => {

        const updatedUserObject = {
            location: "San Jose"
        };

        update_user.mockImplementation(() => {});

        get_user.mockImplementation(() => updatedUserObject);

        expect(get_user(accessToken).location).toBe('San Jose');
    });

    test('Check Get Users', () => {

        const mockUserObjects = [ mockUserObject ];

        get_users.mockImplementation(() => mockUserObjects);

        expect(get_users(accessToken).length).toBe(1);
    });

    test('Check Get User - Invalid Token', () => {

        get_user.mockImplementation( () => {
            throw new Error('Invalid access token');
        });

        expect(get_user("invalid-token")).toThrow(Error)
    });

    test('Check Get User by Name - Invalid user', () => {

        get_user_by_name.mockImplementation( () => {
            throw new Error('Invalid user');
        });

        expect(get_user_by_name("invalid-user")).toThrow(Error)
    });

});
