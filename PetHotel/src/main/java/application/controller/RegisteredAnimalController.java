package application.controller;

import application.model.Account;
import application.model.Animal;
import application.model.AnimalService;
import application.model.RegisteredAnimal;
import application.repository.AnimalRepository;
import application.repository.AnimalServiceRepository;
import application.repository.RegisteredAnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisteredAnimalController {

    @Autowired
    private SimpMessagingTemplate template;

    private final RegisteredAnimalRepository registeredAnimalRepository;
    private final AnimalRepository animalRepository;
    private final AnimalServiceRepository animalServiceRepository;


    public RegisteredAnimalController(RegisteredAnimalRepository registeredAnimalRepository, AnimalRepository animalRepository, AnimalServiceRepository animalServiceRepository) {
        this.registeredAnimalRepository = registeredAnimalRepository;
        this.animalRepository = animalRepository;
        this.animalServiceRepository = animalServiceRepository;
    }

    @GetMapping("/registeredAnimals")
    public List<RegisteredAnimal> getRegisteredAnimals(){
        return registeredAnimalRepository.findAll();
    }

    @GetMapping("/animalType")
    public List<RegisteredAnimal> getAnimalsByType(String type){
        return registeredAnimalRepository.getAnimalByType(type);
    }

    @PostMapping("/registeredAnimals")
    public void addRegisteredAnimal(@RequestBody RegisteredAnimal registeredAnimal){
        List<RegisteredAnimal>registeredAnimalList = registeredAnimalRepository.findAll();
        for(RegisteredAnimal registeredAnimal1: registeredAnimalList){
            if(registeredAnimal.getAnimalID() != registeredAnimal1.getAnimalID())
                System.out.println(registeredAnimal+ "id "+registeredAnimal.getAnimalID());
                registeredAnimalRepository.save(registeredAnimal);
        }
    }

    @PostMapping("/getRegisteredAnimals")
    public List<RegisteredAnimal> getMyRegisteredAnimals(@RequestBody Account account) {
        List<RegisteredAnimal> allRegisteredAnimals = registeredAnimalRepository.findAll();
        List<RegisteredAnimal> registeredAnimals = new ArrayList<>();

        for (RegisteredAnimal registeredAnimal : allRegisteredAnimals) {
            if (registeredAnimal.getUsername().equals(account.getUsername())) {
                registeredAnimals.add(registeredAnimal);
            }
        }
        System.out.println("id "+account.getId()+" "+account.getUsername());
        System.out.println("My registered animals: "+registeredAnimals);
        return registeredAnimals;
    }


    @PostMapping("/getAllAnimals")
    public List<Animal> getAnimalsByOwner(@RequestBody Account account) {
        List<Animal> allAnimals = animalRepository.findAll();
        List<Animal> myAnimals = new ArrayList<>();

        for (Animal animal : allAnimals) {
            if (animal.getOwner_name().equals(account.getUsername())) {
                myAnimals.add(animal);
            }
        }
        System.out.println("id "+account.getId()+" "+account.getUsername());
        System.out.println("My animals: "+myAnimals);
        return myAnimals;
    }

    @PostMapping("/takeAnimal")
    public void takeAnimal(@RequestBody RegisteredAnimal registeredAnimal) {
        System.out.println("reg animal: "+registeredAnimal);

        registeredAnimalRepository.deleteById(registeredAnimal.getId());
        List<AnimalService> animalServiceList = animalServiceRepository.findAll();
        List<RegisteredAnimal> registeredAnimals = registeredAnimalRepository.findAll();

        for(RegisteredAnimal animalService : registeredAnimals){
            if(animalService.getAnimalID() == registeredAnimal.getAnimalID()){
                registeredAnimalRepository.deleteById(animalService.getId());
            }
        }
        for(AnimalService animalService : animalServiceList){
            if(animalService.getAnimalID() == registeredAnimal.getAnimalID()){
                animalServiceRepository.deleteById(animalService.getId());
            }
        }
    }
}
