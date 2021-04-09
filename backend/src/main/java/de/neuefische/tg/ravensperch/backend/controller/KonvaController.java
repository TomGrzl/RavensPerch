package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.services.KonvaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("konva")
public class KonvaController {

    private KonvaService konvaService;

    @Autowired
    public KonvaController(KonvaService konvaService) {
        this.konvaService = konvaService;
    }

    @PostMapping("/updateState")
    public KonvaStateDto updateKonvaState(@RequestBody KonvaStateDto konvaState) {
        return konvaService.updateKonvaState(konvaState)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "unable to update state"));
    }

    @GetMapping("{konvaState}")
    public KonvaStateDto getKonvaState(@PathVariable String konvaState) {
        return konvaService.getKonvaState(konvaState)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "unable to load state"));
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getBackground() throws IOException {
        final ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(
                "backend/src/main/resources/images/background.jpg"
        )));
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);


    }
}
