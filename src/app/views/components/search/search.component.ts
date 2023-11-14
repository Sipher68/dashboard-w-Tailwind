import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class SearchComponent {
  searchForm = this.formBuilder.nonNullable.group({
    searchValue: '',
  });
  ngOnInit(): void {
    this.searchForm
      .get('searchValue')!
      .valueChanges.pipe(debounceTime(400))
      .subscribe(() => {
        this.onSearch();
      });
  }

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  /**
   * Handles the search functionality by calling the API service to get a list of places based on the search value.
   * If the search value is empty or null, the filtered list is set to an empty array.
   * Otherwise, the filtered list is set to the list of places returned by the API service.
   */
  onSearch(): void {
    const searchValue = this.searchForm.value.searchValue ?? '';
    this.sharedService.setSearchValue(searchValue);
  }
}
