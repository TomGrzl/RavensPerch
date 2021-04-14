package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.db.RavensPerchDb;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KonvaService {

    private final RavensPerchDb ravensPerchDb;

    @Autowired
    public KonvaService(RavensPerchDb ravensPerchDb) {
        this.ravensPerchDb = ravensPerchDb;
    }


    public Optional<KonvaStateDto> updateKonvaState(KonvaStateDto konvaState) {
        KonvaStateDto response = ravensPerchDb.save(konvaState);
        return Optional.of(response);
    }
    
    public Optional<KonvaStateDto> getKonvaState(String konvaState) {
        return ravensPerchDb.findById(konvaState);
    }

}
