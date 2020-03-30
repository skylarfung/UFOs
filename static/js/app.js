// importing data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//varable to hold filters
var filters = {};

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

//new function to handle click and add filters
function updateFilters() {
    //saves value of filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    //adds filters to filters object 
    if (date) {
        filters.datetime = date
    } else {
        delete filters.datetime
    };

    if (city) {
        filters.city = city
    } else {
        delete filters.city
    };

    if (state) {
        filters.state = state
    } else {
        delete filters.state
    };

    if (country) {
        filters.country = country
    } else {
        delete filters.country
    };

    if (shape) {
        filters.shape = shape
    } else {
        delete filters.shape
    };

    console.log(filters);
    filterTable();
};

function filterTable() {
    let filteredData = tableData;

    for (var key in filters) {
        if (key === "datetime") {
        filteredData = filteredData.filter(row => row.datetime === filters[key]);
        } else if (key === "city") {
            filteredData = filteredData.filter(row => row.city === filters[key]);
        } else if (key === "state") {
            filteredData = filteredData.filter(row => row.state === filters[key]);
        } else if (key === "country") {
            filteredData = filteredData.filter(row => row.country === filters[key]);
        } else if (key === "shape") {
            filteredData = filteredData.filter(row => row.shape === filters[key]);
        } else {
            filteredData = filteredData;
        };   
    };
    buildTable(filteredData);
};

// what happens when button is clicked 
d3.select("#filter-btn").on("click", updateFilters);