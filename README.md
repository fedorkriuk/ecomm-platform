<<<<<<< HEAD
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
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


## In The Directory
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

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.


## Acknowledgments

- The MERN stack community for excellent documentation and resources
- Stripe for their robust payment processing API
- All supporters of this project
>>>>>>> origin/main
