import { Component, Input, OnInit } from '@angular/core';
import { Search } from 'src/app/model/search';
import { CartService } from 'src/app/services/cart.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private service: MenuService, private cartService: CartService, private loginService: CredentialsService) { }
  ngOnInit(): void {
    this.method()
  }
  foodArr: Array<any> = [];
  isToken: boolean = false;
  total: number = 0;
  quantity: number = 0;
  cartId: number = 0;
  method() {
    this.foodArr = this.service.foodArray;
    console.log("local search ts array" + this.foodArr)
    console.log("Service food array" + this.service.foodArray)
  }
  //regarding cart


  addToCart(menu1: Search) {

    this.cartId = menu1.foodId

    this.cartService.addCart(menu1).subscribe(
      (data) => {

        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  isAdded(menu: Search) {
    return menu.foodId === this.cartId;
  }

  isTokenPresent(): any {
    if (this.loginService.getToken() != null) {
      return this.isToken = true;
    }
    return false;
  }
}
