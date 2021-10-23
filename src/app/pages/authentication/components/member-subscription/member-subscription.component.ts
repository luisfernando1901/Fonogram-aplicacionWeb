import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-subscription',
  templateUrl: './member-subscription.component.html',
  styleUrls: ['./member-subscription.component.css']
})
export class MemberSubscriptionComponent implements OnInit {
  subscriptionCards = [
    {
      id: "podcasters",
      title: "Podcasters",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre la industria del podcast.",
    },
    {
      id: "creatividad & producción",
      title: "Creatividad & Producción",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre podcasting y creación de contenido.",
    },
    {
      id: "marketing",
      title: "Marketing",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre marketing y emprendimiento.",
    },
    {
      id: "growth & startups",
      title: "Growth & Startups",
      content1: "Contenido, charlas y eventos",
      content2: "Todo sobre growth & startups.",
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCard(){
    console.log("Selected");
  }

}
