// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map, Observable } from 'rxjs';
// import { Project } from '../interfaces/project.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class SortAndfilterService {

//   constructor(private http:HttpClient) {}

//   findLessons(
//       filter :string, sortOrder : string,sortColumn:string,
//       pageNumber : number , pageSize :number ,projects:Project[]):  Observable<Project[]> 
//       {

//             var filter = filter || '';
//             var   sortOrder = sortOrder;
//             var  pageNumber =pageNumber || 0;
//             var  pageSize = pageSize;
//             var sortColumn = sortColumn || "seqNo";
    
//        var projects = projects
//             // .filter(lesson => lesson.courseId == courseId)
//             .sort((l1, l2) => {
//                 if (l1[sortColumn] > l2[sortColumn]) {
//                     return 1;
//                 }
//                 else if (l1[sortColumn] < l2[sortColumn]) {
//                     return -1;
//                 }
//                 else {
//                     return 0;
//                 }
//             });
    
//         if (filter) {
//            projects = projects.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
//         }
    
//         if (sortOrder == "desc") {
//             projects = projects.reverse();
//         }
    
//         const initialPos = pageNumber * pageSize;
    
//         const lessonsPage = projects.slice(initialPos, initialPos + pageSize);
    
//         setTimeout(() => {
//             res.status(200).json({payload: lessonsPage});
//         },1000);
//   }
// }

