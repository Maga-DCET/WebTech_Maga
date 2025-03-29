function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemDetail = document.getElementById("itemDetail").value;
    const itemQuantity = document.getElementById("itemQuantity").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemDate = document.getElementById("itemDate").value;

    const table = document.getElementById("inventoryTable").getElementsByTagName('tbody')[0];

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);


    cell1.textContent = itemName;
    cell2.textContent = itemDetail;
    cell3.textContent = itemQuantity;
    cell4.textContent = itemPrice;
    cell5.textContent = itemDate;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() { deleteItem(newRow); };
    cell6.appendChild(deleteBtn);


    document.getElementById("itemName").value = "";
    document.getElementById("itemDetail").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemDate").value = "";
}


function deleteItem(row) {
    const table = document.getElementById("inventoryTable").getElementsByTagName('tbody')[0];
    table.deleteRow(row.rowIndex - 1); 
}
