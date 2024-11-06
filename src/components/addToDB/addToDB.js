import { toast } from "react-toastify";

const getAllCarts = () => {
  const all = localStorage.getItem("favourites");

  if (all) {
    const favourites = JSON.parse(all);
    return favourites;
  } else {
    return [];
  }
};

const addFavourites = (product) => {
  const favourites = getAllCarts();
  const isExists = favourites.find(
    (item) => item.product_id == product.product_id
  );
  if (isExists) return;

  const totalPrice = favourites.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.price || 0);
  }, 0);

  if (totalPrice + product.price > 1000) {
    toast.error("Oops! You cannot add cart item avobe $1000 ");
    return;
  }

  favourites.push(product);
  localStorage.setItem("favourites", JSON.stringify(favourites));
  toast.success("Succesfully Added to the Cart!");
};

const removeFavourite = (id) => {
  const favourites = getAllCarts();
  const remaining = favourites.filter((product) => product.product_id !== id);
  localStorage.setItem("favourites", JSON.stringify(remaining));
  toast.error("Removed from the Cart!");
};

export { addFavourites, getAllCarts, removeFavourite };

// Wishlist

const getAllWishlist = () => {
  const allwishlist = localStorage.getItem("wishlist");

  if (allwishlist) {
    const favourites = JSON.parse(allwishlist);
    return favourites;
  } else {
    return [];
  }
};

const addWishlists = (product) => {
  const wishlist = getAllWishlist();

  const isExists = wishlist.find(
    (item) => item.product_id === product.product_id
  );
  if (isExists) return;
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Successfully Added to Wishlist!");
};

const removeWishlists = (id) => {
  const favourites = getAllWishlist();
  const remaining = favourites.filter((product) => product.product_id !== id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.error("Removed from the Wishlist!");
};

export { addWishlists, getAllWishlist, removeWishlists };
