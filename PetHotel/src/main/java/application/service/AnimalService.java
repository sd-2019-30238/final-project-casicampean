package application.service;


import application.model.Animal;
import application.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class AnimalService {

    private AnimalRepository animalRepository;

    @Autowired
    public AnimalService(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    public void addAnimal(Animal animal) {
        animalRepository.save(animal);
    }

    public void deleteAnimal(Integer id){
        animalRepository.deleteById(id);
    }

    public void updateAnimal(Integer id, String type){
        Animal animal = animalRepository.getOne(id);
        animal.setType(type);
    }

    public Animal getAnimal(Integer id){
        return animalRepository.getOne(id);
    }

    public List<Animal> getAnimals(){
        return animalRepository.findAll();
    }

    public List<Animal> getAnimalsByOwner(int id){
        return animalRepository.getAnimalByOwner(id);
    }

    public void printAnimals(){
        List<Animal> animals = animalRepository.findAll();

        for(Animal animal : animals){
            System.out.println(animal);
        }
    }

    public void printAnimalsByOwner(int id){

        List<Animal> animals = animalRepository.getAnimalByOwner(id);

        for(Animal animal : animals){
            System.out.println(animal);
        }
    }

    public void saveAnimal(Animal animal){
        animalRepository.save(animal);

    }

}
