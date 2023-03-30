import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Project } from '../interfaces/project.interface';
// import { SortAndfilterService } from './sort-andfilter.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService 
 {
  private _projectList = new BehaviorSubject<Project[]>(null as any)
  public projectList$:Observable<Project[]>=this._projectList.asObservable();
  private _projectListSort = new BehaviorSubject<Project[]>(null as any)
  public projectListSort$:Observable<Project[]>=this._projectListSort.asObservable();

  constructor() {}

  set projectList(projectList :any)
  {
    this._projectList.next(projectList) 
    console.log('"plist', this._projectList)
    
  }
  set projectListSort(projectListSort :any)
  {
    this._projectListSort.next(projectListSort) 
    console.log('"plistsort', this._projectList)
    
  }
  // private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
    // private loadingSubject = new BehaviorSubject<boolean>(false);

    // public loading$ = this.loadingSubject.asObservable();

    

    // connect(collectionViewer: CollectionViewer): Observable<Project[]> {
    //     return this.projectList$;
    // }

    // disconnect(collectionViewer: CollectionViewer): void {
    //     this._projectList.complete();
    //     // this.loadingSubject.complete();
    // }

    // loadLessons(courseId: number, filter = '',
    //             sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

    //     // this.loadingSubject.next(true);

    //     this.sortAndfilterService.findLessons(courseId, filter, sortDirection,
    //         pageIndex, pageSize).pipe(
    //         catchError(() => of([])),
    //         // finalize(
    //         //   () => this.loadingSubject.next(false)
    //         //   )
    //     )
    //     .subscribe(lessons => this._projectList.next(lessons));
    // }    
 
}
