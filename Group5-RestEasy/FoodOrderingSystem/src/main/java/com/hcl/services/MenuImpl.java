package com.hcl.services;

import com.hcl.model.Cart;
import com.hcl.model.Menu;
import com.hcl.repository.*;
import com.hcl.util.UserDefinedException;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuImpl implements IMenu {
	@Autowired
	private IMenuDAO md;
	@Autowired
	private ICartDAO cd;
	@Autowired
	private IRestuarant rd;

	@Override
	public List<Menu> getdetailsByRestuarant(int rid) {
		return md.findByRestuarant(rid);
	}

	@Override
	public List<Menu> getFoodByName(String foodName) throws UserDefinedException {

		if (!md.findByFoodName(foodName).isEmpty()) {
			return md.findByFoodName(foodName);
		} else
			throw new UserDefinedException("FoodItem Not Present");
	}

	@Override
	public Cart addCart(Cart cart) {
		// TODO Auto-generated method stub
		return cd.saveAndFlush(cart);
	}
}
