package com.hcl.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Customer;
import com.hcl.repository.ICustomerDAO;

@Service
public class CustomerImpl implements ICustomer {
	@Autowired
	private ICustomerDAO cd;

	@Override
	public Customer addCustomer(Customer customer) {

		return cd.saveAndFlush(customer);
	}

	@Override
	public Customer getEmailAndPassword(String email, String password) {
		return cd.findByEmailAndPassword(email, password);
	}

	@Override
	public Customer getByEmailId(String email) {
		return cd.findByEmail(email);
	}

	@Override
	public Customer getById(int customerId) {
		// TODO Auto-generated method stub
		return cd.findById(customerId).get();
	}

}
