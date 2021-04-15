package de.neuefische.tg.ravensperch.backend.db;

import de.neuefische.tg.ravensperch.backend.model.DefenseFormation;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DefenseDb extends PagingAndSortingRepository<DefenseFormation, String> {
    
}
