Feature: Test fitur "calculate ibm"

Scenario: The user performs a BMI calculation that is underweight
Given The user opens the home page of fitbybeat.com
Then the user input underweight data and User clicks the calculate button
Then Users get underweight notifications

Scenario: The user performs a BMI calculation that is healthy
Given The user opens the home page of fitbybeat.com
Then the user input healthy data and User clicks the calculate button
Then Users get healthy notifications

Scenario: The user performs a BMI calculation that is overweight
Given The user opens the home page of fitbybeat.com
Then the user input overweight data and User clicks the calculate button
Then Users get overweight notifications

Scenario: The user performs a BMI calculation that is obeses
Given The user opens the home page of fitbybeat.com
Then the user input obeses data and User clicks the calculate button
Then Users get obeses notifications