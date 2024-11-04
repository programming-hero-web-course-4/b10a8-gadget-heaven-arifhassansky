const getStoredGadgetList = () => {
  const storedListStr = localStorage.getItem("gadget-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredGadgetList = (id) => {
  const storedList = getStoredGadgetList();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("gadget-list", storedListStr);
  }
};

export { addToStoredGadgetList, getStoredGadgetList };
