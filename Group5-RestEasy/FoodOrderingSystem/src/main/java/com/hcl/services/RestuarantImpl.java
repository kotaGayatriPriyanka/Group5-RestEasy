package com.hcl.services;

import com.hcl.model.Menu;
import com.hcl.model.Restuarant;
import com.hcl.repository.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestuarantImpl implements IRestuarant {
	@Autowired
	private IMenu md;
	@Autowired
	private IRestuarantDAO rd;

	@Override
	public List<Menu> getResturant(String name) {
		Restuarant r = rd.findByRestuarantName(name);
		System.out.println("restuarant record" + r);
		List<Menu> menuList = md.getdetailsByRestuarant(r.getRestuarantId());
		return menuList;
	}

}
