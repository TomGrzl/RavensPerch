package de.neuefische.tg.ravensperch.backend.db;

import de.neuefische.tg.ravensperch.backend.model.LearningCard;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningCardDb extends PagingAndSortingRepository<LearningCard, String> {

}
