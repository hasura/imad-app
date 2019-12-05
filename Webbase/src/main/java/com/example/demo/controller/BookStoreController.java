package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dao.Bookrepo;
import com.example.demo.model.Bookstore;

@Controller
public class BookStoreController {
	
	@Autowired
	Bookrepo repo;
	
	@RequestMapping("/")
	public String home()
	{
		return "Main.jsp";
	}
	
	@RequestMapping("/addBookStore")
	public String addBookstore(Bookstore bookstore)
	{
		repo.save(bookstore);
	    return "Addmsg.jsp";	
	}
	
	@RequestMapping("/delBookstore")
	public String delBookstore(@RequestParam int id)
	{
		
		repo.delete(id);
		return "Deletedmsg.jsp";
	
	}
	
	@RequestMapping("/getbookstore")
	public ModelAndView getBookstore(@RequestParam int id)
	{
		ModelAndView mv= new ModelAndView("ShowBook.jsp");
		Bookstore bookstore=repo.findOne(id);
		mv.addObject(bookstore);
		return mv;
	}

}
