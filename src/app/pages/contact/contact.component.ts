import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DataService]
})
export class ContactComponent implements OnInit {

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
