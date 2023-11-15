// <!--
// File: multiply.js
// GUI Assignment: Creating an Interactive Dynamic Table
// Javier Solares, UMass Lowell Computer Science, Javier_Solares@student.uml.edu
// Copyright (c) 2023 by Javier. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by JS on November, 2023 at 9:41 PM
// Description: This is the javascript code for the Dynamic Multiplication Table.
// I create a dynamic table and its elements inside to append to my div.
// -->

function createMultTable(event) {  
     // creating and styling the dynamic table
    let tableDiv = document.getElementById('dynamic-table');
    tableDiv.classList.add('table', 'table-bordered', 'border-primary');

    // clear the existing table
    tableDiv.innerHTML = '';

    // prevents the page from refreshing
    event.preventDefault();
    
    // handles and displays error message
    if (errorHandling()) {
        return;
    }

    // variable to create the table body
    var tbody = document.createElement('tbody');

    // variable to keep of track of the numbers in the top of the header and update it
    var topHeaderCounter = document.getElementById('numMinColumn').value;

    // variable to keep of track of the numbers in the left of the header and update it
    var leftHeaderCounter = document.getElementById('numMinRow').value;

    // getting the number of columns needed (max - min = # of rows)
    var num_cols = document.getElementById('numMaxColumn').value - document.getElementById('numMinColumn').value + 1;

    // getting the number of rows needed (max - min = # of rows)
    var num_rows = document.getElementById('numMaxRow').value - document.getElementById('numMinRow').value + 1;

    for (var i = 0; i <= num_rows; i++) {
        var rows = document.createElement('tr');

        for (var j = 0; j <= num_cols; j++) {
            // creating cells
            if (i === 0 && j === 0) {       // this is for the top-left of the header
                var topLeftHeader = document.createElement('th');
                topLeftHeader.textContent = 'x';
                rows.appendChild(topLeftHeader)
            } else if (i === 0) {       // this is for the top row of numbers
                var topHeader = document.createElement('th');
                topHeader.textContent = topHeaderCounter;
                topHeaderCounter++;
                rows.appendChild(topHeader);
            } else if (j === 0) {       // this is for the left-most column of numbers
                var leftHeader = document.createElement('th');
                leftHeader.textContent = leftHeaderCounter;
                leftHeaderCounter++;
                rows.appendChild(leftHeader);
            } else {                    // this is for the table data when the left and top numbers multiply
                var multiply = document.createElement('td');
                multiply.textContent = topHeaderCounter * (leftHeaderCounter - 1);
                topHeaderCounter++;
                rows.appendChild(multiply);
            }
        }
        topHeaderCounter = document.getElementById('numMinColumn').value;
        tbody.appendChild(rows)
    }
    tableDiv.appendChild(tbody);

    div.append(tableDiv);

    document.body.appendChild(div);
}

// Funtion to error handle and display an error message
function errorHandling() {
    var userNumMinCol = parseInt(document.getElementById('numMinColumn').value);
    var userNumMaxCol = parseInt(document.getElementById('numMaxColumn').value);
    var userNumMinRow = parseInt(document.getElementById('numMinRow').value);
    var userNumMaxRow = parseInt(document.getElementById('numMaxRow').value);
    var errorMessage = document.getElementById('errorMessage');

    if (userNumMinCol < -50 || userNumMinCol > 50 || userNumMaxCol < -50 || userNumMaxCol > 50 || userNumMinRow < -50 || userNumMinRow > 50 || userNumMaxRow < -50 || userNumMaxRow > 50) {  
        errorMessage.innerHTML = 'Please enter valid numbers for all the fields. Must be between -50 and 50.';
        errorMessage.style.display = 'block';
        return true;
    } else if (isNaN(userNumMinCol) || isNaN(userNumMaxCol) || isNaN(userNumMinRow) || isNaN(userNumMaxRow)) {
        errorMessage.innerHTML = 'Must fill in all four fields.';  
        errorMessage.style.display = 'block';
        return true;
    } else if (userNumMinCol > userNumMaxCol || userNumMinRow > userNumMaxRow) {
        errorMessage.innerHTML = 'Make sure that the minimum column or row is less than the maximum.';  
        errorMessage.style.display = 'block';
        return true;
    } else {
        errorMessage.style.display = 'none';
        return false;
    }
}
