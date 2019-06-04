package application.repository;

import application.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

    @Query("SELECT b FROM Animal b where b.owner_id = :owner_id")
    List<Animal> getAnimalByOwner(@Param("owner_id") int owner_id);

}
