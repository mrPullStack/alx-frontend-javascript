/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './crud';
import * as CRUD from './crud';

// Create a row
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

// Insert the row
const newRowID: RowID = CRUD.insertRow(row);

// Update the row (with age = 23)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
