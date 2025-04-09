// DOM Elements
const searchInput = document.getElementById("itemSearch");
const searchButton = document.getElementById("searchBtn");
const electronicsBox = document.getElementById("electronics");
const furnitureBox = document.getElementById("furniture");
const clothingBox = document.getElementById("clothing");
const priceMinFilter = document.getElementById("priceMin");
const priceMaxFilter = document.getElementById("priceMax");
const qtyMinFilter = document.getElementById("qtyMin");
const qtyMaxFilter = document.getElementById("qtyMax");
const openModalButton = document.getElementById("openModalBtn");
const closeModalButton = document.getElementById("closeModalBtn");
const itemNameInput = document.getElementById("itemName");
const itemDetailInput = document.getElementById("itemDetail");
const itemQuantityInput = document.getElementById("itemQuantity");
const itemPriceInput = document.getElementById("itemPrice");
const itemDateInput = document.getElementById("itemDate");
const itemSaveButton = document.getElementById("itemSave");

itemSearch.addEventListener('input', handleSearchInput);
searchBtn.addEventListener('input', handleSearchInput);
electronics.addEventListener('input', handleSearchInput);
furniture.addEventListener('input', handleSearchInput);
clothing.addEventListener('input', handleSearchInput);
priceMin.addEventListener('input', handleSearchInput);
priceMax.addEventListener('input', handleSearchInput);
qtyMin.addEventListener('input', handleSearchInput);
qtyMax.addEventListener('input', handleSearchInput);
openModalBtn.addEventListener('input', handleSearchInput);
closeModalBtn.addEventListener('input', handleSearchInput);
itemName.addEventListener('input', handleSearchInput);
itemDetail.addEventListener('input', handleSearchInput);
itemQuantity.addEventListener('input', handleSearchInput);
itemPrice.addEventListener('input', handleSearchInput);
itemDate.addEventListener('input', handleSearchInput);
itemSave.addEventListener('input', handleSearchInput);

//display table with existing
//add product
//edit product
