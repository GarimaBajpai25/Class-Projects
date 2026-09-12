```javascript
const itemInput = document.getElementById("itemInput");
const quantityInput = document.getElementById("quantityInput");
const addBtn = document.getElementById("addBtn");

const shoppingList = document.getElementById("shoppingList");
const searchInput = document.getElementById("searchInput");

const totalItems = document.getElementById("totalItems");
const purchasedItems = document.getElementById("purchasedItems");
const remainingItems = document.getElementById("remainingItems");

const emptyMessage = document.getElementById("emptyMessage");
const clearBtn = document.getElementById("clearBtn");


// Get items from localStorage
let items = JSON.parse(localStorage.getItem("shoppingItems")) || [];


// Display items when page loads
displayItems();


// Add Item
addBtn.addEventListener("click", addItem);


// Allow Enter key to add item
itemInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addItem();
    }

});


// Search items
searchInput.addEventListener("input", displayItems);


// Clear all items
clearBtn.addEventListener("click", function () {

    if (items.length === 0) {
        return;
    }

    const confirmClear = confirm("Are you sure you want to clear the entire list?");

    if (confirmClear) {
        items = [];
        saveItems();
        displayItems();
    }

});


// Function to add item
function addItem() {

    const name = itemInput.value.trim();
    const quantity = quantityInput.value;

    if (name === "") {
        alert("Please enter an item name.");
        return;
    }

    if (quantity < 1) {
        alert("Quantity must be at least 1.");
        return;
    }

    const newItem = {
        id: Date.now(),
        name: name,
        quantity: quantity,
        purchased: false
    };

    items.push(newItem);

    saveItems();

    itemInput.value = "";
    quantityInput.value = 1;

    displayItems();
}


// Display Items
function displayItems() {

    shoppingList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();

    const filteredItems = items.filter(function (item) {

        return item.name.toLowerCase().includes(searchText);

    });


    if (filteredItems.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    filteredItems.forEach(function (item) {

        const li = document.createElement("li");

        li.className = "shopping-item";

        if (item.purchased) {
            li.classList.add("purchased");
        }


        // Checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = item.purchased;

        checkbox.addEventListener("change", function () {

            togglePurchased(item.id);

        });


        // Item information
        const itemInfo = document.createElement("div");

        itemInfo.className = "item-info";


        const itemName = document.createElement("div");

        itemName.className = "item-name";

        itemName.textContent = item.name;


        const itemQuantity = document.createElement("div");

        itemQuantity.className = "item-quantity";

        itemQuantity.textContent = "Quantity: " + item.quantity;


        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemQuantity);


        // Edit button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";

        editButton.addEventListener("click", function () {

            editItem(item.id);

        });


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function () {

            deleteItem(item.id);

        });


        li.appendChild(checkbox);
        li.appendChild(itemInfo);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        shoppingList.appendChild(li);

    });


    updateStats();

}


// Mark item as purchased
function togglePurchased(id) {

    items = items.map(function (item) {

        if (item.id === id) {
            item.purchased = !item.purchased;
        }

        return item;

    });

    saveItems();

    displayItems();
}


// Edit item
function editItem(id) {

    const item = items.find(function (item) {

        return item.id === id;

    });


    if (!item) {
        return;
    }


    const newName = prompt("Enter new item name:", item.name);

    if (newName === null) {
        return;
    }


    const trimmedName = newName.trim();

    if (trimmedName === "") {
        alert("Item name cannot be empty.");
        return;
    }


    const newQuantity = prompt(
        "Enter quantity:",
        item.quantity
    );


    if (newQuantity === null) {
        return;
    }


    if (newQuantity < 1) {
        alert("Quantity must be at least 1.");
        return;
    }


    item.name = trimmedName;
    item.quantity = newQuantity;

    saveItems();

    displayItems();
}


// Delete item
function deleteItem(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this item?"
    );


    if (confirmDelete) {

        items = items.filter(function (item) {

            return item.id !== id;

        });

        saveItems();

        displayItems();

    }

}


// Update statistics
function updateStats() {

    const total = items.length;

    const purchased = items.filter(function (item) {

        return item.purchased;

    }).length;


    const remaining = total - purchased;


    totalItems.textContent = total;

    purchasedItems.textContent = purchased;

    remainingItems.textContent = remaining;

}


// Save items to localStorage
function saveItems() {

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(items)
    );

}
```
