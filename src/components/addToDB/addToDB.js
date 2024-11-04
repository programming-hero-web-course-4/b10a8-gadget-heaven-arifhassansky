const getAllFavouites = () => {
  const all = localStorage.getItem("favourites");

  if (all) {
    const favourites = JSON.parse(all);
    return favourites;
  } else {
    return [];
  }
};

const addFavourites = (product) => {
  const favourites = getAllFavouites();
  const isExists = favourites.find(
    (item) => item.product_id == product.product_id
  );
  if (isExists) return;
  favourites.push(product);
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const removeFavourite = (id) => {
  const favourites = getAllFavouites();
  const remaining = favourites.filter((product) => product.product_id !== id);
  localStorage.setItem("favourites", JSON.stringify(remaining));
};

export { addFavourites, getAllFavouites, removeFavourite };

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
  const favourites = getAllWishlist();
  const isExists = favourites.find(
    (item) => item.product_id == product.product_id
  );
  if (isExists) return;
  favourites.push(product);
  localStorage.setItem("wishlist", JSON.stringify(favourites));
};

const removeWishlists = (id) => {
  const favourites = getAllWishlist();
  const remaining = favourites.filter((product) => product.product_id !== id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
};

export { addWishlists, getAllWishlist, removeWishlists };
