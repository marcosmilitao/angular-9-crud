import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(): void{
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessage('Produto excluido com sucesso!')
      this.router.navigate(['/products']);
    })
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
