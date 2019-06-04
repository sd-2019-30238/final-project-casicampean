package application.animal_service_factory;

public class VetAnimalService implements IAnimalService{
    @Override
    public String getService() {
        return " has been to the vet";
    }
}
