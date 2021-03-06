package com.hcl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Cart;
import com.hcl.repository.ICartDAO;

@Service
public class CartImpl implements ICart {
	@Autowired
	ICartDAO cd;

	@Override
	public Cart addCart(Cart cart) {
		return cd.saveAndFlush(cart);
	}

	@Override
	public List<Cart> getItems() {
		return cd.findAll();
	}

	@Override
	public void deleteItem(int foodId) {
		cd.deleteById(foodId);
	}

	@Override
	public boolean deleteCartItems() {
		cd.deleteAll();
		return true;

	}
}