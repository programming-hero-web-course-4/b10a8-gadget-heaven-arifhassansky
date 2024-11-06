# Project Title

### GadgetHaven is a gadget-buying website. The site should feature a structured navigation bar, product categories, and individual product details pages. Key functionalities include a shopping cart, a wishlist system, and product filtering. The local storage will manage the cart and wishlist for data persistence. Additional pages will allow users to view and manage their cart and wishlist, sort items by price, and ensure a smooth user experience. The site musthandle edge cases like price limits and prevent errors when reloading.

## Requirement Document Link

https://drive.google.com/file/d/1FH0EQYDnZHAM7eOipYnzR5uFDg8o3z3_/view?usp=drive_link

## Features

1. **Dynamic Navigation Bar:** - A structured navigation bar that adjusts based on the user's actions and current page. It should include links to product categories (e.g., Electronics, Accessories, etc.), a shopping cart icon with item count, and a wishlist icon. The navigation should also highlight the active page.
2. **Product Filtering and Sorting:** - Users should be able to filter products based on categories (e.g., price range, brand, rating) and sort them by price or popularity. This feature helps users find products quickly and easily. Edge cases like invalid price ranges should be handled gracefully with error messages.
3. **Shopping Cart & Wishlist Management:** - Implement a shopping cart where users can add, remove, and update product quantities. Similarly, the wishlist will allow users to save products for future purchases. Both features should persist in local storage, so users don’t lose their selections when they reload the page.
4. **Product Details Page:** - Each product should have a dedicated details page showing a detailed description, images, specifications, price, and a dynamic rating system based on user reviews. The page should also offer options to add the product to the cart or wishlist.
5. **Responsive and Smooth User Experience:** - Ensure the site is responsive, meaning it should look and work well on devices of various sizes (e.g., desktops, tablets, phones). The site should handle edge cases like page reloads without breaking the cart or wishlist functionality and prevent errors when users exceed price limits in filters.

## React Concepts Used

This project uses several key React fundamentals:

- **Components** - Reusable, self-contained pieces of the UI.
- **JSX (JavaScript XML)** - Syntax extension used to describe the UI.
- **Props** - Mechanism to pass data between components.
- **State** - Used to manage and track component-specific data.
- **React Hooks** - Includes `useState`, `useEffect`,`useParams` and possibly others such as `useEffect` for state and side effect management.

These fundamentals were applied to build a clean, modular, and responsive interface.

## Data Management

To handle data in this project, we used:

- **Local Storage** - For persisting user data, ensuring that user settings and preferences are retained even after a page refresh.

This combination ensures efficient state management and a seamless user experience.

## Live Website

https://gadget-heaven-sky.netlify.app
