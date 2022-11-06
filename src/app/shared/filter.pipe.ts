import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toString().toLowerCase();

return items.filter( it => {
      return it.id.toString().toLowerCase().includes(searchText) || it.name.toLowerCase().includes(searchText) || it.date_of_graduation.toString().toLowerCase().includes(searchText) || it.dept_code.toString().includes(searchText);
    });
   }
}