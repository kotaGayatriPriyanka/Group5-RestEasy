package com.hcl.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.hcl.model.Menu;
import com.hcl.model.ResponseMessage;
import com.hcl.services.IMenu;
import com.hcl.services.IRestuarant;
import com.hcl.util.UserDefinedException;

@CrossOrigin
@RestController
@RequestMapping("/api/food")
public class FoodController {
	@Autowired
	private IRestuarant rs;
	@Autowired
	private IMenu m;

	// To get the menulist based on resname
	@GetMapping("/restuarantName/{rname}")
	public ResponseEntity<?> displayRestuarants(@PathVariable String rname) {

		List<Menu> mList = rs.getResturant(rname);

		if (mList != null) {
			return new ResponseEntity<List<Menu>>(mList, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Restuarant Not Found", HttpStatus.NOT_FOUND);
	}

	// To search the food by foodname
	@GetMapping("/searchByFood/{name}")
	public ResponseEntity<List<Menu>> searchByResName(@PathVariable String name) throws UserDefinedException {

		return new ResponseEntity<List<Menu>>(m.getFoodByName(name), HttpStatus.OK);
	}

	public ResponseEntity<ResponseMessage> handleGlobalException(HttpServletRequest request, Exception ex) {
		ResponseMessage rm = new ResponseMessage();
		rm.setMessage(ex.getMessage());
		rm.setErrorCode(404);
		return new ResponseEntity<ResponseMessage>(rm, HttpStatus.NOT_FOUND);
	}
}
