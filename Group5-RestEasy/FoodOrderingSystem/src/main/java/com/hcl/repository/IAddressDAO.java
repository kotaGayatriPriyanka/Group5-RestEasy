package com.hcl.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.hcl.model.Address;

@Repository
public interface IAddressDAO extends CrudRepository<Address, Integer>{

}
