# ShopMitra - E-commerce Platform

ShopMitra is a fully responsive e-commerce platform designed for browsing and purchasing products across various categories such as Fashion, Electronics, Groceries, Home & Furniture, and Sports & Vehicles. Users can add products to their cart, manage their cart items, and view product details.

## Features

- **Product Categories**: Users can browse through different categories like Fashion, Electronics, Groceries, Home & Furniture, and Sports & Vehicles.
- **Dynamic Product Listing**: Products are fetched dynamically from the `dummyjson.com` API and displayed with images, titles, and prices.
- **Add to Cart**: Users can add products to their shopping cart, and the cart item count is updated in real-time.
- **Cart Management**: The cart page allows users to view their selected items, remove products, and see the total price.
- **Responsive Design**: The website is mobile-friendly and adapts to various screen sizes using media queries for different breakpoints.
- **Local Storage**: Cart data is stored in the browser’s localStorage, making it persistent even when the page is refreshed.

## Technologies Used

- **HTML**: The structure and layout of the website.
- **CSS**: Styling and responsive design using Flexbox and Grid.
- **JavaScript**: Dynamic content loading, API requests, and cart functionality.
- **API**: Data is fetched from `https://dummyjson.com/products`.

## Installation

To run this project locally, follow these steps:

- Clone the repository:
    ```bash
    git clone https://github.com/kiranS-2506/ShopMitra-project
    ```

## How It Works

- The homepage lists products from various categories. Clicking on a category shows the relevant products.
- Products can be added to the cart by clicking the **Add to Cart** button, which updates the cart item count in the header.
- On the cart page, users can view all added products, remove them, and see the total price. The cart is saved in the browser’s localStorage, so it persists across page refreshes.

## Screenshots

### Homepage
![Homepage Screenshot](./images/Screenshot%201%20(1).png)

### Cart Page
![Cart Page Screenshot](./images/Screenshot%201%20(2).png)

## Future Improvements

- **User Authentication**: Implement user sign-in and registration for personalized shopping.
- **Payment Integration**: Add a payment gateway to enable purchases directly on the platform.
- **Search Functionality**: Add a search bar to help users find specific products.
- **Error Handling**: Enhance error handling and loading indicators when fetching data from the API.

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

