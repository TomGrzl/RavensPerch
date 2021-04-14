package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.SolutionDto;
import de.neuefische.tg.ravensperch.backend.services.LearningCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("learningresources")
public class LearningCardController {

    LearningCardService learningCardService;

    @Autowired
    public LearningCardController(LearningCardService learningCardService) {
        this.learningCardService = learningCardService;
    }

    @GetMapping("getLearningCard")
    public KonvaStateDto getOffense() {

        return learningCardService.generateOffenseState();
    }

    @GetMapping("getSolution")
    public SolutionDto getSolution() {

        return learningCardService.generateSolution();
    }

}
