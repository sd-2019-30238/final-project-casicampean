package application.controller;

import application.model.Account;
import application.model.Animal;
import application.model.AnimalService;
import application.model.RegisteredAnimal;
import application.repository.AnimalRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    private final AnimalRepository animalRepository;


    public AnimalController(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }


    @PostMapping("/animals")
    public void addAnimal(@RequestBody Animal animal){
        animalRepository.save(animal);
    }

    @PostMapping("/sendAnimalToHotel")
    public void sendAnimalToHotel(@RequestBody Animal animal) {
        System.out.println(animal);
        animalRepository.deleteById(animal.getId());
    }
}
