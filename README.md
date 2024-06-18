# WanderLust

WanderLust is a full-stack web application inspired by Airbnb, designed to manage vacation rental listings.
The application is built using Node.js, Express.js, MongoDB, and EJS.
It allows users to create, view, and search for vacation rentals.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- User authentication and authorization
- Create, view, and delete listings
- Search for listings
- Filter listings by categories
- Display listings on a map
- Responsive design for mobile and desktop views

## Installation

### Prerequisites

- Node.js (v20.11.0 or higher)
- MongoDB

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   cd wanderlust

## folder Structure
wanderlust/
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── stylesheets/
│   │   └── main.css
│   └── scripts/
│       └── main.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   └── index.ejs
│   │   └── new.ejs
│   │   └── show.ejs
│   ├── partials/
│   │   └── flash.ejs
│   │   └── navbar.ejs
│   ├── users/
│   │   └── login.ejs
│   │   └── register.ejs
│   └── home.ejs
├── .env
├── app.js
├── package.json
└── README.md

