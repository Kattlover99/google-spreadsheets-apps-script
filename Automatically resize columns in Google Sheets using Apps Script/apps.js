function autoResizeSingleColumn() {
    SpreadsheetApp.getActiveSheet().autoResizeColumn(1);
}

function autoResizeMultipleColumns() {
    SpreadsheetApp.getActiveSheet().autoResizeColumns(2, 3);
}