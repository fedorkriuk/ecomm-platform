# MERN E-Commerce Platform


## Description

This project is a full-stack e-commerce platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Stripe integration for payment processing. It provides a robust and scalable solution for online retail businesses, offering features like product browsing, cart management, user authentication, and secure checkout.


## Features

- User authentication and authorization
- Product catalog with search and filter functionality
- Shopping cart management
- Secure checkout process with Stripe integration
- User profile and order history
- Admin panel for product and order management
- Responsive design for mobile and desktop


## Technologies Used

- Frontend:
  - React.js
  - Redux for state management
  - React Router for navigation
  - Axios for API requests
  - Material-UI or Bootstrap for styling

- Backend:
  - Node.js
  - Express.js
  - MongoDB with Mongoose ODM
  - JSON Web Tokens (JWT) for authentication

- Payment Processing:
  - Stripe API

- Deployment:
  - Heroku (backend)
  - Netlify or Vercel (frontend)


## Installation

1. Clone the repository:
git clone https://github.com/fedorkriuk/ecomm-platform.git

2. Navigate to the project directory:
cd ecomm-platform

3. Install dependencies for both backend and frontend:
cd backend && npm install
cd ../frontend && npm install

4. Set up environment variables:
Create `.env` files in both `backend` and `frontend` directories with necessary variables (database URL, JWT secret, Stripe keys, etc.)

5. Start the development servers:
In the backend directory
npm run dev


## In the directory
npm run dev


## Usage

After starting both servers, open your browser and navigate to `http://localhost:3000` to view the application.

To test the payment functionality, use Stripe's test card numbers:
- Card number: 4242 4242 4242 4242
- Expiry date: Any future date
- CVC: Any 3 digits


## API Documentation

The backend provides the following API endpoints:

- `/api/products`: CRUD operations for products
- `/api/users`: User registration and authentication
- `/api/orders`: Order creation and management
- `/api/payment`: Stripe payment processing

For detailed API documentation, refer to the `API.md` file.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## License

This project is open source and available under the [MIT License](LICENSE).


## Acknowledgments

- The MERN stack community for excellent documentation and resources
- Stripe for their robust payment processing API
- All supporters of this project
