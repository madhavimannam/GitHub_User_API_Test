
Assignment 2:

We want to simulate day-to-day activities while on the job. So let’s create some tests!!!

Create a Jest Testing Suite
https://jestjs.io/

Using a mock server for different Github APIs around the user object
In the test suite, build assumption tests on these users, their data, and their plan that they're on.
Build out green, error, and edge-case tests
https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28

Acceptance Criteria

The code is delivered via GitHub
There’s documentation on how to run the testing suite and get needed API keys
The testing suite can be run locally
All tests pass

Note: It's ok to submit a partial assignment with a write up on strategy, since this is quite a specific task. We care more about your attempt and getting thrown into the fire here.

______________________________________________________
 
Jest based API test for Github User API.

Mocked all the API responses.

 Covered test cases:
  - Get Authenticated User Info
  	Validate login name, location and url
  - Update user
  	Update and verify from get user
  - Verify list of users in the org
  - Check get user with invalid access token
  - Check get user with invalid user
  
______________________________________________________

How to Run:

Install node modules

npm test

I ran from IntelliJ IDE

