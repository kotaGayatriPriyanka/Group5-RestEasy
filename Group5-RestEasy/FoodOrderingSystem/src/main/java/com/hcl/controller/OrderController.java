package com.hcl.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.dto.AddressDTO;
import com.hcl.model.Address;
import com.hcl.model.Customer;
import com.hcl.model.OrderDetails;

import com.hcl.services.ICustomer;
import com.hcl.services.OrderServiceImpl;
import com.hcl.token.ITokenGenerator;

import io.jsonwebtoken.Jwts;

@CrossOrigin
@RestController
@RequestMapping("api/orderdetails")
public class OrderController {
	@Autowired
	private OrderServiceImpl orderServices;

	@Autowired
	ITokenGenerator tg;

	@Autowired
	private ICustomer cs;

	// To add order details into orders table
	@PostMapping("/addOrderDetails")
	public ResponseEntity<Boolean> addOrderDetails(@RequestBody AddressDTO addressDto, HttpServletRequest request) {

		OrderDetails orderDetails = new OrderDetails();
		orderDetails.setTotalprice(addressDto.getTotalprice());
		orderDetails.setTotalquantity(addressDto.getTotalquantity());
		final String authHeader = request.getHeader("authorization");

		final String token = authHeader.substring(7);

		String email = Jwts.parser().setSigningKey("secretKey").parseClaimsJws(token).getBody().getSubject();

		Address address = new Address();
		address.setCity(addressDto.getCity());
		address.setCountry(addressDto.getCountry());
		address.setState(addressDto.getState());
		address.setZipcode(addressDto.getZipcode());
		address.setStreet(addressDto.getStreet());
		Customer customer = cs.getByEmailId(email);
		orderDetails.setCustomer(customer);
		orderDetails.setAddress(address);

		return new ResponseEntity<Boolean>(orderServices.addOrderDetails(orderDetails), HttpStatus.OK);

	}

}
