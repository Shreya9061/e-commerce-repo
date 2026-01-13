import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  card:any[]=[];

  constructor(
    private api_service: ApiService,
    private cdr:ChangeDetectorRef,
    private router: Router
  ){}

  ngOnInit(): void {
    this.api_service.getMovies().subscribe((data: any)=>{
    this.card=data;
    this.cdr.detectChanges();
  
   } )
}

   veiwProductDetails(product: any){
     this.router.navigate(['/movie',product.id],{ state: { product }});
   }
}
