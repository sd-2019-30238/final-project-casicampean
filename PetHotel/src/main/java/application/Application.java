package application;

import application.model.Animal;
import application.service.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({NotificationService.class})
public class Application {

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(Application.class, args);
        AccountService accountService = context.getBean(AccountService.class);
        AnimalService animalService = context.getBean(AnimalService.class);
        RegisteredAnimalService registeredAnimalService = context.getBean(RegisteredAnimalService.class);
        AnimalServiceService animalServiceService = context.getBean(AnimalServiceService.class);

        accountService.printAccounts();
        animalService.printAnimals();
        registeredAnimalService.printRAnimals();
        animalServiceService.printAnimals();
        registeredAnimalService.printAnimalsByType("cat");
        //animalService.saveAnimal(new Animal("Kenny",4,"dana","rabbit"));


        for(Animal animal : animalService.getAnimalsByOwner(3)){
            System.out.println(animal);
        }



    }

}
