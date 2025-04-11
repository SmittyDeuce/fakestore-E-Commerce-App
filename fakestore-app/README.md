# FakeStore API

### 🏠 Home Page
- Welcome message and brief store intro
- Navigation button to Product Listing page
- Styled with React Bootstrap

### 🛒 Product Listing
- Fetches products from `https://fakestoreapi.com/products`
- Displays:
  - Product image
  - Title
  - Price
  - View Details button
- Responsive layout using Bootstrap Grid
- Uses React Router for navigation

### 📄 Product Details
- Fetches a single product by ID from the API
- Displays:
  - Product image
  - Title
  - Description
  - Category
  - Price
- Includes:
  - Button to delete product (with modal confirmation)
  - Button to (optionally) add to cart
- Handles loading and error states

### ➕ Add Product
- Form to add a new product (POST request)
- Fields:
  - Title
  - Price
  - Description
  - Category
- Displays confirmation upon success

### ✏️ Edit Product
- Fetches product by ID
- Form pre-filled with existing data
- Allows editing and updating product (PUT request)
- Displays success message

### 🗑 Delete Product
- Displays product info
- Modal confirmation before deletion
- Deletes from API (DELETE request)
- Redirects to product listing on success

### 🧭 Navigation
- React Bootstrap navbar across all pages
- Includes links to:
  - Home (`/`)
  - Product Listing (`/products`)
  - Add Product (`/add-product`)
- Collapsible for mobile views


### Resources
- **React**
- **React Router DOM**
- **Axios**
- **React Bootstrap**
- **FakeStore API**
- **Copilot**