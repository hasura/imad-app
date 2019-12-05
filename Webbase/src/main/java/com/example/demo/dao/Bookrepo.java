package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Bookstore;

public interface Bookrepo extends CrudRepository<Bookstore,Integer> 
{

}
