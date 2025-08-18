// Type alias for RowID
export type RowID = number;

// Interface for RowElement
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number; // optional
}

// Declare functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
