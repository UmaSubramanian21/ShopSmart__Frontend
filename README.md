# ShopSmart

*ShopSmart* is a full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Firebase Authentication. It provides a responsive and intuitive shopping experience for users, including secure login, browsing products, adding to cart, and completing purchases.

---

## Features

### User Authentication
- Sign up, log in, and log out using *Firebase Authentication*
- Only authenticated users can place orders and view order history

### Product Management
- Admin CRUD operations: Create, Read, Update, Delete products
- Products include name, description, price, images, stock, and category
- Category-based navigation (e.g., electronics, clothing, accessories)

### Shopping Cart
- Add/remove products to/from the cart
- View product details, adjust quantities, and total prices

### Checkout
- Multi-step checkout: Address, Payment, and Confirmation
- Select delivery address and payment method
- Final order summary before confirmation

### Order Management
- Orders stored with order ID, items, quantities, total price, and status
- Users can view order history and order details

---

## Tech Stack

- *Frontend:* React.js + Tailwind CSS
- *Backend:* Node.js, Express.js
- *Database:* MongoDB
- *Authentication:* Firebase Authentication
- *Hosting/Deployment:* (Add your choice here – e.g., Vercel, Netlify, Render, etc.)

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (local or Atlas)
- Firebase Project (for auth)

### Installation

1. *Clone the repository:*
   ```bash
   git clone https://github.com/your-username/shopsmart.git
   cd shopsmart
