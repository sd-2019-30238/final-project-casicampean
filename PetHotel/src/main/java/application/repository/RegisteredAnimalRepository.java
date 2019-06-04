package application.repository;

import application.model.Animal;
import application.model.RegisteredAnimal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegisteredAnimalRepository extends JpaRepository<RegisteredAnimal, Integer> {

    @Query("SELECT b FROM RegisteredAnimal b where b.animal_type = :animal_type")
    List<RegisteredAnimal> getAnimalByType(@Param("animal_type") String animal_type);
}
