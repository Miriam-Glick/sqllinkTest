import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { ProjectService } from 'src/app/shared/services/project.service';
// import { SortAndfilterService } from 'src/app/shared/services/sort-andfilter.service';
import { UseService } from 'src/app/shared/services/use.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  displayedColumns: string[] = ['position', 'name', 'score', 'durationInDays', 'bugsCount', 'madeDadeline'];
  dataSource1!: ProjectService;
  datasource!: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(
    private apiService: ApiService,
    private userService: UseService,
    private projectsService: ProjectService,

  ) { }

  ngOnInit() {
    this.getInfo(
    );

  }
  getInfo() {
    this.apiService.Info().subscribe((res: Project[]) => {
      this.datasource = new MatTableDataSource<any>(res);
      this.projectsService.projectList = res
      this.projectsService.projectListSort = res
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
      this.projectsService.projectList;
    })
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.datasource.filter = filter.trim().toLowerCase();
    this.projectsService.projectListSort = this.datasource.filteredData;
  }

}
