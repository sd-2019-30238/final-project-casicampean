package application.controller;

import application.animal_service_factory.AnimalServiceFactory;
import application.model.Animal;
import application.model.AnimalService;
import application.model.RegisteredAnimal;
import application.repository.AnimalRepository;
import application.repository.AnimalServiceRepository;
import application.repository.RegisteredAnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalServiceController {

    @Autowired
    private SimpMessagingTemplate template;

    private final RegisteredAnimalRepository registeredAnimalRepository;
    private final AnimalRepository animalRepository;
    private final AnimalServiceRepository animalServiceRepository;

    public AnimalServiceController(RegisteredAnimalRepository registeredAnimalRepository, AnimalRepository animalRepository, AnimalServiceRepository animalServiceRepository) {
        this.registeredAnimalRepository = registeredAnimalRepository;
        this.animalRepository = animalRepository;
        this.animalServiceRepository = animalServiceRepository;
    }

    @GetMapping("/animalServices")
    public List<AnimalService> getAnimalServices(){
        return animalServiceRepository.findAll();
    }

    @PostMapping("/animalServices")
    public void addAnimalService(@RequestBody AnimalService animalService){

        List<RegisteredAnimal> allRegisteredAnimals = registeredAnimalRepository.findAll();
        Optional<Animal> animal = animalRepository.findById(animalService.getAnimalID());
        AnimalServiceFactory animalServiceFactory = new AnimalServiceFactory();


        for (RegisteredAnimal registeredAnimal : allRegisteredAnimals) {


            if (registeredAnimal.getAnimalID() == animalService.getAnimalID() && registeredAnimal.getOwnerID() == animalService.getOwnerID()) {
                    template.convertAndSend("/topic/notification/",
                            "Your animal, " + animal.get().getName() + animalServiceFactory.getService(animalService.getService_type()).getService());
            }
        }

       animalServiceRepository.save(animalService);
    }
}
