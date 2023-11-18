Feature: Login to sisko

    User
    The user 

Scenario: The user login with a valid email and password.
Given User open login page
When The user provides a correct email and password, and then presses the login button.
Then The user will be directed to the store management page.

Scenario: The user logs in with a valid email and an invalid password.
Given User open login page
When The user provides a correct email and incorrect password and then presses the login button.
Then Users will receive a notification that The email must be a valid email address.

Scenario: The user logs in with a invalid email and an valid password.
Given User open login page
When The user provides a incorrect email and correct password and then presses the login button.
Then Users will receive a notification that The email must be a valid email address.

Scenario: The user logs in with a invalid email and an invalid password.
Given User open login page
When The user provides a incorrect email and password and then presses the login button.
Then Users will receive a notification that The email must be a valid email address.

Scenario: The user has forgotten their password and is attempting to reset it using a valid email address.
Given User open forgot password page
When The user provides a correct email and then presses the Send Reminder button.
Then Users will receive a notification that The Password reminder sent!

Scenario: The user has forgotten their password and is attempting to reset it using a invalid email address.
Given User open forgot password page
When The user provides a incorrect email and then presses the Send Reminder button.
Then Users will receive a notification that We cant find a user with that e-mail address!