# roundtable-random-nos

## Overview

This repo contains the code which supports the Chingu Roundtable discusson
on Cryptographically Secure Pseudorandom Number Generator (CSPRNG). In
addition, it also contains supporting code to evaluate the CSPRNG against
the `Math.random()` pseudorandom number generator in Javascript.

## Methodology

The article, [Need a PRNG? Use a CSPRNG](https://sortingsearching.com/2023/11/25/random.html?utm_source=tldrnewsletter),
describes the advantages of using CSPRNG for random number generation. But,
although a lot of work has been put into this topic by Academics (aka people
way smarter than myself) there were several questions that occurred to me:

1. Does a CSPRNG algorithm generate numbers that are more random than 
Javascripts `Math.random()` function?
2. How can the randomness of a CSPRNG over other random number generators be
evaluated?
3. Is there a type of chart that would show the "randomness" of each solution?
4. Are there an performance penalties for using a CSPRNG over a traditional
PRNG?
5. How would I write an app to do this?
6. Are there any special issues that complicate the implementation?

## Technical Stack

![Javascript](https://img.shields.io/badge/logo-javascript-blue?logo=javascript)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Static Badge](https://img.shields.io/badge/axios-blue)

## Installation

To install the project, run the following command:

```bash
git clone https://github.com/chingu-voyages/roundtable-random-nos.git
cd roundtable-random-nos
npm install
```

Once the project is installed, you can run the following command to start the server:

```bash
npm run dev
```

## Project Structure

The branches used in this project are:

* `main` - Our production code
* `development` - Changes from feature branches which are ready for integration testing

Commit naming and feature branches should follow the [Conventional Commits specification](https://www.conventionalcommits.org/).

## Resources

- [Need a PRNG? Use a CSPRNG](https://sortingsearching.com/2023/11/25/random.html?utm_source=tldrnewsletter)
- [Javascript `Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [ChaCha20 Algorithm](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant)
- [How to get the standard deviation of an array of numbers using JavaScript?](https://www.geeksforgeeks.org/how-to-get-the-standard-deviation-of-an-array-of-numbers-using-javascript/)
- [[V8 Deep Dives] Random Thoughts on Math.random()](https://apechkurov.medium.com/v8-deep-dives-random-thoughts-on-math-random-fb155075e9e5)

## Author

This chingu roundtable was created by [Jim Medlock](https://github.com/jdmedlock)
for the [Chingu Community](https://chingu.io)
