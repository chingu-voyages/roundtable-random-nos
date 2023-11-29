# roundtable-random-nos

# Overview

This repo contains the code which supports the Chingu Roundtable discusson
on Cryptographically Secure Pseudorandom Number Generator (CSPRNG). In
addition, it also contains supporting code to evaluate the CSPRNG against
the `Math.random()` pseudorandom number generator in Javascript.

# Technical Stack

![Javascript](https://img.shields.io/badge/logo-javascript-blue?logo=javascript)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


# Installation

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

# Project Structure

The branches used in this project are:

* `main` - Our production code
* `development` - Changes from feature branches which are ready for integration testing

Commit naming and feature branches should follow the [Conventional Commits specification](https://www.conventionalcommits.org/).

# Resources

- [Need a PRNG? Use a CSPRNG](https://sortingsearching.com/2023/11/25/random.html?utm_source=tldrnewsletter)
- [Javascript `Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [ChaCha20 Algorithm](https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant)

# Author

This chingu roundtable was created by [Jim Medlock](https://github.com/jdmedlock)
for the [Chingu Community](https://chingu.io)
