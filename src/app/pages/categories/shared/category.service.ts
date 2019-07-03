import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<CategoryModel> {
  /**
   *
   */
  constructor(protected injector: Injector) {
    super('http://localhost:8080/api/category', injector);
  }
}
