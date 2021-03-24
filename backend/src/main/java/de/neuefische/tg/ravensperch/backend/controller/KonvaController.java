package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.services.KonvaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/konva")
public class KonvaController {

    //Ggf. Arrays einzeln ins Backfield schicken und State zusammenbauen um problem mit name und id zu umgehen
    //ggf. Objekte in einem State zusammenfassen und mit eindeutiger id versehen (bspw. circle1, rect1, ...)

    private KonvaService konvaService;

    @Autowired
    private KonvaController(KonvaService konvaService) {
        this.konvaService = konvaService;
    }

    @PostMapping("/updateState")
    public KonvaStateDto updateKonvaState(@RequestBody KonvaStateDto konvaState) {
        System.out.print(konvaState);
        return konvaService.updateKonvaState(konvaState)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "unable to update state"));
    }

    @GetMapping("{konvaState}")
    public KonvaStateDto getKonvaState(@PathVariable String konvaState) {
        return konvaService.getKonvaState(konvaState)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "unable to load state"));
    }
}