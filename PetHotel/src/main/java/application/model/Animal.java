package application.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "animal")
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "owner_id")
    private int owner_id;
    @Column(name = "owner_name")
    private String owner_name;
    @Column(name = "type")
    private String type;

    public Animal(){
    }

    public Animal(String name, int owner_id, String owner_name, String type) {
        this.name = name;
        this.owner_id = owner_id;
        this.owner_name = owner_name;
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return id == animal.id &&
                name == animal.name &&
                Objects.equals(owner_id, animal.owner_id) &&
                Objects.equals(type, animal.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, owner_id, type);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", owner_id=" + owner_id +
                ", owner_name='" + owner_name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
