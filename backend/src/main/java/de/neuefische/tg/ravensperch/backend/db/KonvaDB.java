package de.neuefische.tg.ravensperch.backend.db;

import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KonvaDB extends PagingAndSortingRepository<KonvaStateDto, String> {


}
