package application.animal_service_factory;

public class AnimalServiceFactory {
    public IAnimalService getService(String serviceType){
        if(serviceType == null){
            return null;
        }
        if(serviceType.equalsIgnoreCase("VET")){
            return new VetAnimalService();
        }
        if(serviceType.equalsIgnoreCase("GROOM")){
            return new GroomAnimalService();
        }
        if(serviceType.equalsIgnoreCase("TRAIN")){
            return new TrainAnimalService();
        }
        return null;
    }
}
