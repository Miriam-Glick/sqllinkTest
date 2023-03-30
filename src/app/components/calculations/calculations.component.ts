import { Component } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  avg!: number;
  percent!: number
  projectList: Project[] = []
  constructor(private projectService: ProjectService) { }
  ngOnInit() {

    this.projectService.projectListSort$.subscribe((projects: Project[]) => {
      this.projectList = projects;
      this.percent = ((projects.filter(p => p.madeDadeline == true).length) / projects.length) * 100;
      var sum = (projects.reduce((total, next) => total + next.score, 0))
      var length = projects.length
      this.avg = sum / length

    })
  }
}

