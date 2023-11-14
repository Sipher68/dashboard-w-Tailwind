import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // For search service
  private searchValueSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  searchValue$ = this.searchValueSubject.asObservable();

  setSearchValue(searchValue: string) {
    this.searchValueSubject.next(searchValue);
  }

  getSearchValue() {
    return this.searchValueSubject.getValue();
  }

  // For action-center-filter
  private selectedFilterSource = new BehaviorSubject<string>('');
  selectedFilter$ = this.selectedFilterSource.asObservable();

  changeSelectedFilter(filter: string) {
    this.selectedFilterSource.next(filter);
  }

  emptyFilter() {
    this.selectedFilterSource.next('');
  }

  // For query data
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
