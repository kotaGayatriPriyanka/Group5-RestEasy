import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { Login } from 'src/app/model/login';
import { Search } from 'src/app/model/search';
import { CartService } from 'src/app/services/cart.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userEmail: string = "";
  total_price: number = 0;
  total_quantity: number = 0;
  foodName: string = "";
  dish: Array<any> = [];
  responseMessage: string = "";
  customer: Customer = new Customer();
  totalCost1: number = 0;
  totalQuantity: number = 0;
  search: any;


  constructor(private service: MenuService, private cartService: CartService,
    public credService: CredentialsService, private router: Router, private builder: FormBuilder) { }

  ngOnInit(): void {

    this.buildForm(),
      this.userEmail = this.credService.customerEmail
    console.log("email : ", this.userEmail)

  }
  buildForm() {
    this.search = this.builder.group({
      foodName: ['', Validators.required]
    })
  }

  //getCustomerName
  login2: Login = new Login();
  getCustomerEmail() {
    this.userEmail = this.credService.customerEmail
    console.log("customerEmail ", this.credService.customerEmail)
  }

  //To Search Food
  searchFood(name: string) {
    this.service.getFoodByName(name).subscribe((data) => {
      this.service.b = true;
      console.log(name + "passed data")
      console.log(data + "search response..")
      this.service.foodArray = data;

      this.router.navigateByUrl("/searchPage")
      this.foodName = "";
      console.log("mydata", this.service.foodArray);
    },
      e => {
        alert("Food Item doesnot exists")
        this.router.navigateByUrl("/Adigas")
        this.responseMessage = e.error.message;
        console.log(e);

      })
  }

  isToken: boolean = false;
  isTokenPresent(): any {
    if (this.credService.getToken() != null) {
      return this.isToken = true;
    }
    return false;
  }

  LogOut() {

    this.credService.removeToken();
    this.router.navigateByUrl("/Adigas")
  }

  redirectCart() {
    this.router.navigateByUrl("/cart")
  }
}
