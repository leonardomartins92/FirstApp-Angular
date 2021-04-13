import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden',
      price: 33.99,
      startRating: 4.2,
      imageSrc: '/assets/images/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-1233',
      releaseDate: 'May 21, 2020',
      description: 'Curved claw stell hammer',
      price: 5.99,
      startRating: 4.8,
      imageSrc: '/assets/images/hammer.png'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  }
}
