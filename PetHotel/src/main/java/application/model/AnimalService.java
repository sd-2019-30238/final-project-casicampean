package application.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "animalservice")
public class AnimalService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "ownerID")
    private int ownerID;
    @Column(name = "username")
    private String username;
    @Column(name = "animalID")
    private int animalID;
    @Column(name = "animal_name")
    private String animal_name;
    @Column(name = "service_type")
    private String service_type;

    public AnimalService() {
    }

    public AnimalService(int ownerID, String username, int animalID, String animal_name, String service_type) {
        this.ownerID = ownerID;
        this.username = username;
        this.animalID = animalID;
        this.animal_name = animal_name;
        this.service_type = service_type;
    }

    @Override
    public String toString() {
        return "AnimalService{" +
                "id=" + id +
                ", ownerID=" + ownerID +
                ", username='" + username + '\'' +
                ", animalID=" + animalID +
                ", animal_name='" + animal_name + '\'' +
                ", service_type='" + service_type + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AnimalService that = (AnimalService) o;
        return id == that.id &&
                ownerID == that.ownerID &&
                animalID == that.animalID &&
                Objects.equals(username, that.username) &&
                Objects.equals(animal_name, that.animal_name) &&
                Objects.equals(service_type, that.service_type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, ownerID, username, animalID, animal_name, service_type);
    }

    public int getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(int ownerID) {
        this.ownerID = ownerID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAnimalID() {
        return animalID;
    }

    public void setAnimalID(int animalID) {
        this.animalID = animalID;
    }

    public String getAnimal_name() {
        return animal_name;
    }

    public void setAnimal_name(String animal_name) {
        this.animal_name = animal_name;
    }

    public String getService_type() {
        return service_type;
    }

    public void setService_type(String service_type) {
        this.service_type = service_type;
    }
}
