# js-automation-suite
A base project for any of your End to End automation needs. It uses [GhostJS]() as web driver running either [PhantomJS]() (headless) or [SlimerJS]() (windowed or headless) browsers, [Mocha]() for test definition and [Chai]() to add more expressive condition checking and assertions.

## Installation and Setup

1. Install [NVM]() and use it to install the latest stable Node 6 with `nvm install v6`
2. Clone or download this repository in your environment.
3. Open a console and locate the directory where you have this project's code.
4. Install all dependencies using: `npm install`
5. To run the project, you can use one of the following commands:
   a. `npm run test` : Runs all tests on both PhantomJS and SlimerJS browsers.
   b. `npm run test:phantom` : Runs all tests on PhantomJS.
   c. `npm run test:slimerjs` : Runs all tests on SlimerJS.
