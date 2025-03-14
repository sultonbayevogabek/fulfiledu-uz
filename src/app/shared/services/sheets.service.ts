import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {
  private SHEET_ID = '1SRSwFILPcjdm9tDT0WocO7cfHHnrlwsHf64iRnmS9UA';

  private http = inject(HttpClient);

  async getData<T>(sheetName: string): Promise<T[]> {
    const response = await firstValueFrom(
      this.http.get(this.sheetUrl(sheetName), { responseType: 'text' })
    );

    return this.csvToArray<T>(response);
  }

  private sheetName(sheetName: string) {
    return encodeURIComponent(sheetName);
  }

  private sheetUrl(sheetName: string) {
    return `https://docs.google.com/spreadsheets/d/${ this.SHEET_ID }/gviz/tq?tqx=out:csv&sheet=${ this.sheetName(sheetName) }`;
  }

  private csvSplit(row: string) {
    const regex = /(?:,)(?=(?:(?:[^"]*"){2})*[^"]*$)/g;
    return row.split(regex).map((val) => val.replace(/^"|"$/g, '').trim());
  }

  private csvToArray<T>(csv: string): T[] {
    const csvRows = csv.split('\n');
    const propertyNames = this.csvSplit(csvRows[0]);
    let result: T[] = [];
    for (let i = 1, max = csvRows.length; i < max; i++) {
      const object: any = {};
      let row = this.csvSplit(csvRows[i]);
      for (let j = 0, max = row.length; j < max; j++) {
        if (!propertyNames[j]) continue;
        object[propertyNames[j]] = row[j];
      }
      result.push(object);
    }
    return result;
  }
}
