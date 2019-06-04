package application.service;


import application.model.Animal;
import application.model.RegisteredAnimal;
import application.repository.RegisteredAnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class RegisteredAnimalService {

    private RegisteredAnimalRepository registeredAnimalRepository;

    @Autowired
    public RegisteredAnimalService(RegisteredAnimalRepository registeredAnimalRepository) {
        this.registeredAnimalRepository = registeredAnimalRepository;
    }

    public void addRAnimal(RegisteredAnimal registeredAnimal) {
        registeredAnimalRepository.save(registeredAnimal);
    }

    public List<RegisteredAnimal> getRAnimals(){
        return registeredAnimalRepository.findAll();
    }

    public void printRAnimals(){
        List<RegisteredAnimal>registeredAnimals = registeredAnimalRepository.findAll();

        for(RegisteredAnimal registeredAnimal : registeredAnimals){
            System.out.println(registeredAnimal);
        }
    }

    public void printAnimalsByType(String type){
        List<RegisteredAnimal> animals = registeredAnimalRepository.getAnimalByType(type);

        for(RegisteredAnimal animal : animals){
            System.out.println(animal);
        }
    }
}
