import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Card } from 'src/app/model/Card';
import { Customer } from 'src/app/model/customer';
import { orderDetails } from 'src/app/model/orderDetails';
import { CartService } from 'src/app/services/cart.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { MenuService } from 'src/app/services/menu.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  customer: Customer = new Customer();
  card: Card = new Card();
  address: Address = new Address();
  email: string = "";
  customerId: number = 0;
  lastName: string = "";
  firstName: string = "";
  id: number = 0;
  registerForm: any;
  orderDetails: orderDetails = new orderDetails();
  constructor(
    private orderService: OrderService,
    private menuService: MenuService,
    private cartService: CartService, private credentialService: CredentialsService,
    private router: Router,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getCustomerDetails(this.email);

  }



  buildForm() {
    this.registerForm = this.builder.group({
      FirstName: ['', Validators.required, Validators.minLength(2)],
      LastName: ['', Validators.required, Validators.minLength(2)],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  getCustomerDetails(email: string) {
    this.email = this.credentialService.customerEmail;
    console.log("my email: ", this.email)
    this.credentialService.getCustomerDetails(this.email).subscribe((data) => {
      this.id = data.customerId;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    });

    localStorage.setItem("email", this.email);
    console.log(localStorage.getItem("email"));
  }

  cartClearItems() {
    this.cartService.cartClearItems().subscribe((data) => {
      console.log("deleted cart items");
    })
  }

  saveOrderDetails() {

    this.address.totalprice = this.menuService.totalprice;
    this.address.totalquantity = this.menuService.totalquantity;
    this.router.navigateByUrl("/Adigas");
    alert('Your Order is placed successfully');
    this.orderService.addOrderDetails(this.address).subscribe((data => {

    }))

  }

}


