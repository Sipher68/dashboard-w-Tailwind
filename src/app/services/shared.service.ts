import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private queryData!: { id: number; type: string };

  setQueryData(queryData: { id: number; type: string }) {
    this.queryData = queryData;
    localStorage.setItem('queryData', JSON.stringify(queryData));
  }

  getQueryData() {
    const storedQueryData = localStorage.getItem('queryData');
    if (storedQueryData != null) {
      this.queryData = JSON.parse(storedQueryData);
    } else {
      console.log('Query data is not available in local storage');
    }
    let temp = this.queryData;
    return temp;
  }

  clearQueryData() {
    this.queryData = { id: 0, type: '' };
    localStorage.removeItem('queryData');
  }

  constructor() {}
}
