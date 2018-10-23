[![Build Status](https://travis-ci.org/oneEyedBunny/Trade-Tally-Client.svg?branch=master)](https://travis-ci.org/oneEyedBunny/Trade-Tally-Client)

# Trade Tally
A responsive web app that lets you record your service trades, so you know what your balance is (positive or negative) with any of your trade partners. See live demo [here](https://trade-tally-client.herokuapp.com/)

The backend server side code was build with Node.js and Mongo DB. The repo can be found [here](https://github.com/oneEyedBunny/Trade-Tally-Server)

## Motivation
Currently I'm a hairstylist. I trade services with a variety of people: Chiropractors, Massage Therapists, Aetheticians, etc. Problem is, we're all left manually recording trades if we want to know who's owed who a service since our client management systems aren't linked together. I wanted an easy way to record when either party has performed a service, what the value of that service is, and what my balance is so I can determine who's turn it is. Trade Tally lets you do this. With a few clicks it provides an easy way to enter trades, see a summary of where all your trades are at, and dig into the details of your trade history.

## Technology Used
- React
- Redux
- Enzyme
- Node/Express
- Continuous Integration & deployment with Travis CI
- HTML
- CSS

# Pending items
1. Edit button > need to either make it editable or add form and set items into component state onchange
1. Is there a way to make the fields in the history table editable
1. Add autocomplete to new trade form drop down (https://alligator.io/react/react-autocomplete/_)
1. Fix functions so they're arrow/ES6

1. CSS- fade on of red/blue squares
1. CSS- improve how-it-works section

1. Test cases for all
