import { Component } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class questionnaireFormComponent {
  
 lookups :any =  [];
  constructor(private dataService: DataService) {
    this.dataService.getJsonData().subscribe((res: any) => {
      //alert(JSON.stringify(res))
      this.lookups = JSON.stringify(res);
    });
  } 
 
  
  submitted = false;

  onSubmit() { this.submitted = true; }
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  

  
}
