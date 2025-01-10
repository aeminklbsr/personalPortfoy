import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[RouterModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // İlk klasör
  folderOnePhotos: string[] = [
    'assets/images/todoapp/todo1.png',
    'assets/images/todoapp/todo2.png',
    'assets/images/todoapp/todo3.png',
    'assets/images/todoapp/todo4.png',
    'assets/images/todoapp/todo5.png',
  ];

  // İkinci klasör
  folderTwoPhotos: string[] = [
    'assets/images/hospitalAppointment/hosp1.png',
    'assets/images/hospitalAppointment/hosp2.png',
    'assets/images/hospitalAppointment/hosp3.png',
    'assets/images/hospitalAppointment/hosp4.png',
    'assets/images/hospitalAppointment/hosp5.png',
    'assets/images/hospitalAppointment/hosp6.png',
    'assets/images/hospitalAppointment/hosp7.png',
  ];

  isModalOpen = false;
  currentImage: string = '';
  currentSlideIndex = 0;
  currentCategory: string = '';

  openModal(photo: string, category: string, index: number): void {
    this.currentImage = photo;
    this.currentCategory = category;
    this.currentSlideIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  changeSlide(direction: number): void {
    const photos = this.currentCategory === 'folderOne' ? this.folderOnePhotos : this.folderTwoPhotos;
    this.currentSlideIndex = (this.currentSlideIndex + direction + photos.length) % photos.length;
    this.currentImage = photos[this.currentSlideIndex];
  }

  ngOnInit(): void {}
}

