package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bookstore {
	
	@Id
	public int id;
	public String Bookname;
	public String Author;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBookname() {
		return Bookname;
	}
	public void setBookname(String bookname) {
		Bookname = bookname;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	@Override
	public String toString() {
		return "Bookstore [id=" + id + ", Bookname=" + Bookname + ", Author=" + Author + "]";
	}
	

}
