package application.repository;

import application.model.AnimalService;
import application.model.RegisteredAnimal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalServiceRepository extends JpaRepository<AnimalService, Integer> {
}
