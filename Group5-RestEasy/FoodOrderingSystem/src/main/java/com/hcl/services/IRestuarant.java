package com.hcl.services;

import java.util.List;

import com.hcl.model.Menu;

public interface IRestuarant {
	List<Menu> getResturant(String name);
}
