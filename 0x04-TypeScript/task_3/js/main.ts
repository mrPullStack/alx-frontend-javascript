/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
};

// Insert new row
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
