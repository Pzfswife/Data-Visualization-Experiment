function addRow(){
    var table = document.getElementById('table');
    var length = table.rows.length;
    var newRow = table.insertRow(length);
    console.log(newRow);
    
    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var artionCol = newRow.insertCell(2);
    
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    artionCol.innerHTML = ' <button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
    }
    
    function deleteRow(button){
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
    }

    function editRow(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];
    
    var inputName = prompt("请输入名字：");
    var inputPhone = prompt("请输入联系方式：");
    
    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
}

let tableData = [{ name: "罗大福", contact: "12839495332" }];

// 初始化Plotly图形
function initPlotly() {
    var data = [{
        x: tableData.map(item => item.name),
        y: tableData.map(item => parseInt(item.contact)),
        type: 'scatter'
    }];
    Plotly.newPlot('myDiv', data);
}

// 表格增加数据
function addRow() {
    let name = prompt("输入姓名:");
    let contact = prompt("输入联系方式:");
    
    if (name && contact) {
        tableData.push({ name: name, contact: contact });
        updateTable();
        initPlotly();
    }
}

// 表格删除数据
function deleteRow(btn) {
    let row = btn.parentElement.parentElement;
    let index = [...row.parentNode.children].indexOf(row);
    tableData.splice(index, 1);
    updateTable();
    initPlotly();
}

// 表格编辑数据
function editRow(btn) {
    let row = btn.parentElement.parentElement;
    let name = prompt("输入新姓名:");
    let contact = prompt("输入新联系方式:");
    
    if (name && contact) {
        tableData[row.rowIndex - 1] = { name: name, contact: contact };
        updateTable();
        initPlotly();
    }
}

// 更新表格DOM
function updateTable() {
    let table = document.getElementById("table");
    table.innerHTML = ''; // 清空表格
    tableData.forEach(item => {
        let row = table.insertRow(-1);
        let nameCell = row.insertCell(0);
        let contactCell = row.insertCell(1);
        let operationCell = row.insertCell(2);

        nameCell.innerHTML = item.name;
        contactCell.innerHTML = item.contact;
        operationCell.innerHTML = `
            <button onclick="editRow(this)">编辑</button>
            <button onclick="deleteRow(this)">删除</button>`;
    });
}

// 页面加载后初始化表格和图形
window.onload = function() {
    initPlotly();
    updateTable();
};