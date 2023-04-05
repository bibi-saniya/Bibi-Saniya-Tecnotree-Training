package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
   @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
    	SpringApplication.run(DemoApplication.class, args);
    }
    @Override
     public void run(String... args) throws Exception {
      String sql = "INSERT INTO users (id,name, email, country,password) VALUES (?, ?, ?,?,?)";

     int result = jdbcTemplate.update(sql,3, "Ravi Kumar", "ravi.kumar@1xgmail.com","India", "ravi2021");

      if (result > 0) {
    	  System.out.println("new row inserted");
      }
             
      

}
}
