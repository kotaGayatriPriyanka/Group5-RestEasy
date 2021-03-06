package com.hcl.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hcl.model.Cart;
import com.hcl.model.Customer;
import com.hcl.services.ICart;
import com.hcl.services.ICustomer;
import com.hcl.services.IMenu;
import com.hcl.token.ITokenGenerator;

import io.jsonwebtoken.Jwts;

@CrossOrigin
@RestController
@RequestMapping("/api/cart")

public class CartController {
	@Autowired
	private IMenu ms;
	@Autowired
	private ICart cd;
	@Autowired
	ITokenGenerator tg;
	@Autowired
	private ICustomer cs;

	// To add items in cart
	@PostMapping("/addCart")
	public ResponseEntity<Cart> saveCart(@Valid @RequestBody Cart cart, HttpServletRequest request) {
		final String authHeader = request.getHeader("authorization");

		final String token = authHeader.substring(7);

		String email = Jwts.parser().setSigningKey("secretKey").parseClaimsJws(token).getBody().getSubject();

		Customer customer = cs.getByEmailId(email);

		cart.setCustomer(customer);

		return new ResponseEntity<Cart>(ms.addCart(cart), HttpStatus.OK);
	}

	// To get the values from cart
	@GetMapping(value = "/getCart")
	public ResponseEntity<List<Cart>> getAllItems() {
		List<Cart> items = new ArrayList<Cart>();
		try {
			items = cd.getItems();

			if (items.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(items, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// To delete a item in cart
	@DeleteMapping("/delete/{foodId}")
	public ResponseEntity<String> delete(@PathVariable("foodId") int foodId) {
		cd.deleteItem(foodId);

		return new ResponseEntity<String>("Deleted successfully.!", HttpStatus.OK);
	}

	// To delete entire cart items
	@DeleteMapping("/deleteCartItems")
	public ResponseEntity<Boolean> deleteCartItems() {
		return new ResponseEntity<Boolean>(cd.deleteCartItems(), HttpStatus.OK);
	}

}
