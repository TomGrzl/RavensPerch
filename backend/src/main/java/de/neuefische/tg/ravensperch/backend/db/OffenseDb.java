package de.neuefische.tg.ravensperch.backend.db;

import de.neuefische.tg.ravensperch.backend.model.OffenseFormation;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffenseDb extends PagingAndSortingRepository<OffenseFormation, String> {

}
