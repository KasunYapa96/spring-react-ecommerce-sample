package com.kasecom.ecommerce.service;


import org.springframework.stereotype.Service;

import com.kasecom.ecommerce.model.Product;

import java.util.List;
import java.util.Arrays;

@Service
public class ProductService {
    public List<Product> getAllProducts() {
        return Arrays.asList(
            new Product(1, "iPhone 16", 999.99, "https://via.placeholder.com/150"),
            new Product(2, "Samsung S24 Ultra", 899.49, "https://via.placeholder.com/150")
        );
    }
}
