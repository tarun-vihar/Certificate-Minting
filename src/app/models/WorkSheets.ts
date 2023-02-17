import * as XLSX from 'xlsx';
export interface WorkBook extends XLSX.WorkBook {
    Sheets: { [sheetName: string]: XLSX.Sheet };
  }
  