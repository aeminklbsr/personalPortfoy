import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [DataService]
})
export class ResumeComponent implements OnInit {

  personelInfo: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPersonalInfo().subscribe(
      (data) => {
        this.personelInfo = data;
        console.log(this.personelInfo);
      },
      (error) => {
        console.error('JSON verileri alınırken hata oluştu.', error);
      }
    )
  }

}
