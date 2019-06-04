package application.animal_type_factory;

import application.model.Animal;
import application.model.RegisteredAnimal;

import java.util.ArrayList;

public interface IAnimalType {
    ArrayList<RegisteredAnimal> getAnimal(String animalType);
}
