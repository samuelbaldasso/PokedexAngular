import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class SearchPipe implements PipeTransform {

  transform(items: any[] | null, searchText: string | null): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
