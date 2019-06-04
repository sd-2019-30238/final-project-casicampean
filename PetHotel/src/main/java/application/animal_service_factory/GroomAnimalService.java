package application.animal_service_factory;

public class GroomAnimalService implements  IAnimalService{
    @Override
    public String getService() {
        return " has been groomed";
    }
}
