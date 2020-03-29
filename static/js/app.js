// importing data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//varable to hold filters
var filters ={};

// function takes the data and build a table
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

//new function to handle click
function updateFilters() {

};

//function to handle click
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
    buildTable(filteredData);
    console.log("Button was pressed");
};

// what happens when button is clicked 
d3.select("#filter-btn").on("click", handleClick);