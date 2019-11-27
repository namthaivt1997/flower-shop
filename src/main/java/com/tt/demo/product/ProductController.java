package com.tt.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api/product")
public class ProductController {

	private ProductRepository productRepository;

	@Autowired
	public ProductController(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@GetMapping(path = "/all")
	public Iterable<Product> getProducts() {
		return productRepository.findAll();
	}

	@PostMapping(path = "/add")
	public Product addProduct(@RequestBody Product body) {
		return productRepository.save(body);
	}

	@PostMapping(path = "/add-many")
	public Iterable<Product> addProducts(@RequestBody List<Product> body) {
		return productRepository.saveAll(body);
	}

	@DeleteMapping(path = "/delete")
	public ResponseEntity deleteProduct(@RequestParam long id) {
		Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
		productRepository.delete(product);
		return ResponseEntity.ok().build();
	}

	@DeleteMapping(path = "/delete-all")
	public ResponseEntity deleteAllProducts() {
		productRepository.deleteAll();
		return ResponseEntity.ok().build();
	}

	@PutMapping(path = "/edit")
	public Product editProduct(@RequestParam long id, @RequestBody Product body) {
		Product product = productRepository.findById(id).orElseThrow(IllegalArgumentException::new);
		product.setName(body.getName());
		product.setDescription(body.getDescription());
		product.setPrice(body.getPrice());
		product.setImgUrl(body.getImgUrl());
		product.setType(body.getType());
		product.setCategory(body.getCategory());
		return productRepository.save(product);
	}

	@GetMapping("/price")
	public Iterable<Product> getPrice(@RequestParam Double price1, @RequestParam Double price2) {
		List<Product> products = new ArrayList<>();

		for (Product p : productRepository.findAll()) {
			products.add(p);
		}
		return products.stream().filter(item -> item.getPrice() > price1 && item.getPrice() < price2).sorted((a, b) -> a.getPrice().compareTo(b.getPrice())).collect(Collectors.toList());
	}
}
