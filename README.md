# Unit Test
Mocha + chai + sinonjs ( not added yet )

# Develop process
- write source code with ts and structure code with namespace.

- transfer ts to one single file with tsc.

- build code for testing and use browserSync to run unit test in browser.
> Which can't pass the result of testing to CI right now ...

- after pass unit test, use grunt-string-replace to replace the code wrote for testing
> the code that between comment //FK1 and //FK2 , which expose some private properties to public, will be removed.
