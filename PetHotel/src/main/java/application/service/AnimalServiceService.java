package application.service;

import application.model.Animal;
import application.model.AnimalService;
import application.repository.AnimalServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class AnimalServiceService {

    private AnimalServiceRepository animalServiceRepository;

    @Autowired
    public AnimalServiceService(AnimalServiceRepository animalRepository) {
        this.animalServiceRepository = animalRepository;
    }

    public List<AnimalService> getAnimals(){
        return animalServiceRepository.findAll();
    }
    public void printAnimals(){

        List<AnimalService> animals = animalServiceRepository.findAll();

        for(AnimalService animal : animals){
            System.out.println(animal);
        }
    }
}
