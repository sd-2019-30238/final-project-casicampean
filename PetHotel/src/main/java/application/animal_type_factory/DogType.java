package application.animal_type_factory;

import application.model.Animal;
import application.model.RegisteredAnimal;
import application.repository.AnimalRepository;
import application.repository.RegisteredAnimalRepository;

import java.util.ArrayList;

public class DogType implements IAnimalType {

    private final RegisteredAnimalRepository animalRepository;

    public DogType(RegisteredAnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    @Override
    public ArrayList<RegisteredAnimal> getAnimal(String animalType) {
        return (ArrayList<RegisteredAnimal>) animalRepository.getAnimalByType("dog");
    }
}
