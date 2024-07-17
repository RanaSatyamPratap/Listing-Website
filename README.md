### WanderLust
WanderLust is a full-stack web application inspired by Airbnb. It allows users to browse, create, and manage vacation rental listings. The project uses Node.js, Express, MongoDB, and EJS for server-side rendering, and integrates various features such as user authentication, file uploads, and geolocation services.

### Table of Contents

Features
Tech Stack
Installation
Usage
Project Structure
Routes
Screenshots
Contributing
License
Acknowledgements

### Features
User authentication (login, signup, logout)
Create, edit, and delete listings
Upload images for listings using Multer and Cloudinary
Geolocation integration with Mapbox
Search listings by location
Categorize listings (e.g., beach, mountain, villa)
Responsive design with Bootstrap
Tech Stack
Frontend: EJS, Bootstrap, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: Passport.js
File Uploads: Multer, Cloudinary
Geolocation: Mapbox
Installation
To get a local copy up and running, follow these steps:

### Clone the repository:

sh
Copy code
git clone https://github.com/your-username/wanderlust.git
Navigate to the project directory:

sh
Copy code
cd wanderlust
Install dependencies:

sh
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

env
Copy code
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
Start the development server:

sh
Copy code
npm start

### Usage
Sign up for an account.
Log in with your credentials.
Create a new listing by providing details such as title, description, location, price, and category.
Browse and search listings by location or category.
Edit or delete your listings as needed.

### Project Structure

WanderLust/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── index.js
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── views/
│   ├── categories/
│   │   ├── beach.ejs
│   │   ├── castle.ejs
│   │   ├── iconic_cities.ejs
│   │   ├── island.ejs
│   │   ├── mountain.ejs
│   │   ├── religious.ejs
│   │   ├── room.ejs
│   │   ├── trending.ejs
│   │   └── villa.ejs
│   ├── listings/
│   ├── partials/
│   ├── reviews/
│   ├── users/
│   ├── error.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── boilerplate.ejs
├── public/
│   ├── css/
│   │   ├── style.css
│   ├── js/
│   │   ├── script.js
│   ├── images/
├── .env
├── app.js
├── package.json
└── README.md

### Routes
GET /: Home page
GET /listings: View all listings
GET /listings/new: Form to create a new listing
POST /listings: Create a new listing
GET /listings/:id: View a specific listing
GET /listings/:id/edit: Form to edit a listing
PUT /listings/:id: Update a listing
DELETE /listings/:id: Delete a listing
GET /login: Login page
POST /login: Authenticate user
GET /register: Registration page
POST /register: Register a new user
GET /logout: Logout user

### Screenshots
![Screenshot 2024-07-17 110339](https://github.com/user-attachments/assets/c87b69ee-5d5e-4fce-b45e-9d01222a28f3)
![Screenshot 2024-07-17 110407](https://github.com/user-attachments/assets/0218d3f9-f64c-4bd1-9e51-ad91dc1a7a52)
![Screenshot 2024-07-17 110455](https://github.com/user-attachments/assets/9c5cbc2d-e99e-41dd-a040-4409dde127c4)
![image](https://github.com/user-attachments/assets/752f8140-5f19-4ffa-844d-cc6e6c6e19e5)


### Contributing
Contributions are welcome! Please follow these steps:

### Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.
### License
Distributed under the MIT License. See LICENSE for more information.

### Acknowledgements
Node.js
Express.js
MongoDB
Bootstrap
Mapbox
Cloudinary
