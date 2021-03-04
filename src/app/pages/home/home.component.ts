import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patients = [
    {
      name: 'Sathiya',
      contact: "9751339116",
      appointment: "05:10 PM",
      waited: "56 Min",
      age:"Male 32yr",
      image: "https://i.pravatar.cc/150?img=57"
    },
    {
      name: 'Arun',
      contact: "9994494436",
      appointment: "06:00 PM",
      waited: "15 Min",
      age:"Male 45yr",
      image: "https://i.pravatar.cc/150?img=51"
    },
    {
      name: 'Emma',
      contact: "9489072273",
      appointment: "09:10 PM",
      waited: "10 Min",
      age:"Female 27yr",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: 'Sufiya',
      contact: "7598447472",
      appointment: "10:10 PM",
      waited: "05 Min",
      age:"Femle 28yr",
      image: "https://i.pravatar.cc/150?img=44"
    }
  ];

  breadCrumpList = [
    {name: "Home", route: '/home'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.patients, event.previousIndex, event.currentIndex);
  }

}
