# Purpose
- Make unit test that can be run in browser but not node
> Cause some function will use Web API, I want to make sure it will work on real browser env but not jsDom.

- Our code base will combine all ts into one js file, I want to make it easy to write unit-test code.
> But throught this kind of natation ( Test.a.b.c.TargetClass.targetMethod ), I can access specific target class as well.
> So I think this is not so important now, but I still think this can save some time.

# Framework
Mocha + chai + sinonjs ( not added yet )

# Develop process
- write source code with ts and structure code with namespace but won't be compiled as one js file

- transfer ts to one single file with tsc with the same file structure as src folder.

- build code for testing and use browserSync to run unit test in browser.
> Which can't pass the result of testing to CI right now ...

- after pass unit test, use grunt-strip-code to replace the code wrote for testing
> the code that between comment /*FK1*/ and /*FK2*/ , which expose some private properties to public, will be removed.
