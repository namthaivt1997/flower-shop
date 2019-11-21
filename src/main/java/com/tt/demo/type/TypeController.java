package com.tt.demo.type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/type")
public class TypeController {

	private TypeRepository typeRepository;

	@Autowired
	public TypeController(TypeRepository typeRepository) {
		this.typeRepository = typeRepository;
	}

	@GetMapping(path = "/all")
	public Iterable<Type> getTypes() {
		return typeRepository.findAll();
	}

}
