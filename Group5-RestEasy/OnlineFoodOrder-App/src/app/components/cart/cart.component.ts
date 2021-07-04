import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Search } from 'src/app/model/search';

import { CartService } from 'src/app/services/cart.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subtotal1: number = 0;
  totalqty: number = 0;
  subtotal: number = 0;
  cartEmptyMsg: string = "";
  isDisplay: boolean = false;
  quantity: number = 1;
  sum: number = 0;
  cartArray: Array<any> = [];
  items: Search[] = [];
  count: number = 0;
  isToken: boolean = false;
  constructor(private menuService: MenuService,
    private cartService: CartService, public loginService: CredentialsService, private router: Router) { }


  ngOnInit(): void {
    this.cartItemsDisplay()
  }


  cartItemsDisplay() {
    this.cartService.getItems().subscribe((item) => {
      this.items = item;
      for (let i of this.items) {
        this.subtotal = i.quantity * i.foodPrice;
        this.sum = this.sum + this.subtotal;

        this.count = this.items.length;
        this.totalqty = this.count;
        localStorage.setItem('price', JSON.stringify(this.sum));
        localStorage.setItem('count', JSON.stringify(this.items.length));

      }
      if (item.length >= 1) {
        this.isDisplay = true;
        console.log(this.isDisplay)
      }

    },
      e => {
        console.log(e);
      });
    this.totalqty = JSON.parse(localStorage.getItem('count') || '{}');
  }
  removeCartItem(foodId: number) {

    this.cartService.deleteItem(foodId).subscribe(
      (data) => {
      },
      (error) => {
        this.cartItemsDisplay();

        console.log(error)
      }
    );
  }


  //To increase the quantity
  plus(item: any) {
    if (item.quantity != 10) {
      item.quantity += 1;
      this.subtotal1 = 1 * item.foodPrice;
      this.sum = this.sum + this.subtotal1;
      console.log(this.sum);
      this.totalqty += 1;
      console.log(this.totalqty);
    }
  }

  //To decrease the quantity
  minus(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
      this.subtotal = -1 * item.foodPrice;
      this.sum = this.sum + this.subtotal;
      console.log(this.sum);
      this.totalqty -= 1;
    }
  }

  isTokenPresent(): any {
    if (this.loginService.getToken() != null) {
      return this.isToken = true;
    }
    return false;
  }
  sendQuantityPrice() {
    this.menuService.totalprice = this.sum;
    this.menuService.totalquantity = this.totalqty
  }
}

