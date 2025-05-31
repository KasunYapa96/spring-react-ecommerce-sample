package com.kasecom.ecommerce.controller;

import com.kasecom.ecommerce.model.Product;
import com.kasecom.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")  // Allow React frontend
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
