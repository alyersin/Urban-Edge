# UrbanEdge - [https://urban-edge-rho.vercel.app/](https://urban-edge-rho.vercel.app/)

<img src="./public/screenshot.jpg" alt="Screenshot of UrbanEdge" width="500"/>

UrbanEdge is a web-based shopping platform developed with Next.js and integrated with MongoDB. It allows users to browse products, save items to favorites, explore categories, and enjoy a personalized shopping experience.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Future Development](#future-development)

## About the Project

UrbanEdge is designed to provide users with a seamless shopping experience by offering a responsive platform for browsing products, managing favorites, and exploring various categories.

- Dynamic Product Data: Product information is dynamically loaded from MongoDB through API routes.
- Personalized Experience: Users can customize their shopping preferences and save favorite items.
- Favorites: Users can add items to their favorites for quick access and tracking.

## Features

- **Browse Products**: Explore a wide range of products across multiple categories.
- **Add to Favorites**: Save products to a favorites list for quick access.
- **Customization**: Adjust product preferences and categories for a personalized experience.
- **Authentication**: User registration and login are supported via NextAuth and MongoDB for a secure experience.
- **Responsive Design**: Optimized for mobile and desktop, ensuring a seamless user experience on any device.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alyersin/UrbanEdge.git
   cd UrbanEdge
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:

   - Create a `.env.local` file at the project root.
   - Add your MongoDB URI and NextAuth secret:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/urban-edge?retryWrites=true&w=majority
   NEXTAUTH_SECRET=your_secret

   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

## Usage

1. Start the application with `npm run dev`.
2. Go to `http://localhost:3000` to access the app locally.
3. Browse products, add them to favorites, and customize your shopping preferences.
4. Register or log in to save preferences and access your favorite items.

## Technologies Used

- **Next.js**: For the React framework and server-side rendering.
- **MongoDB (via Mongoose)**: For data storage and retrieval.
- **Chakra UI**: For styled, responsive UI components.
- **NextAuth**: For handling authentication with email and password.
- **Adobe Illustrator**: Used for creating custom visuals and graphics used throughout the app.

## Future Development

Some potential future features include:

- **Enhanced Authentication**: Add OAuth providers (e.g., Google, Facebook) for easier login.
- **Detailed Analytics**: Track user preferences and popular products based on user interactions.
- **Product Recommendations**: Suggest similar or popular products based on user favorites.
- **Social Sharing**: Allow users to share their favorite products with friends.
- **In-App Messaging**: Enable real-time chat or messaging for users exploring similar products.
