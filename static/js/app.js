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