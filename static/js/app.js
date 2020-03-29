// importing data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function takes the data and build a table
function tableBuild(data) {
    tbody.html("");
    data.foreach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime ===data);
    };
    d3.select("#filter-btn").on("click", handleClick);
    buildTable(tableData);
}