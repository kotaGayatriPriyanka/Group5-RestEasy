package com.hcl.services;

import com.hcl.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressImpl implements IAddressImpl {

	@Autowired
	private IAddressDAO ad;

}
