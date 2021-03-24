package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.db.KonvaDB;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class KonvaService {

    private final KonvaDB konvaDB;

    @Autowired
    private KonvaService(KonvaDB konvaDB) {
        this.konvaDB = konvaDB;
    }


    public Optional<KonvaStateDto> updateKonvaState(KonvaStateDto konvaState) {
        KonvaStateDto response = konvaDB.save(konvaState);
        return Optional.of(response);
    }


    public Optional<KonvaStateDto> getKonvaState(String konvaState) {
        System.out.print(konvaDB.findById(konvaState).get());
        return konvaDB.findById(konvaState);
    }
}
