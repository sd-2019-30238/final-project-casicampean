package application.animal_service_factory;

public class TrainAnimalService implements IAnimalService {
    @Override
    public String getService() {
        return " has been trained";
    }
}
