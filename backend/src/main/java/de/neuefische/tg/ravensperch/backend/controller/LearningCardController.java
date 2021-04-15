package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.db.LearningCardDb;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.LearningCard;
import de.neuefische.tg.ravensperch.backend.model.OffenseFormation;
import de.neuefische.tg.ravensperch.backend.model.SolutionDto;
import de.neuefische.tg.ravensperch.backend.services.DbService;
import de.neuefische.tg.ravensperch.backend.services.LearningCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("learningresources")
public class LearningCardController {

    LearningCardService learningCardService;
    DbService dbService;

    @Autowired
    public LearningCardController(LearningCardService learningCardService, DbService dbService) {
        this.learningCardService = learningCardService;
        this.dbService = dbService;
    }

    @GetMapping("getLearningCard")
    public LearningCard getOffense() {

        return dbService.generateLearningCard();
    }

    @GetMapping("getSolution")
    public SolutionDto getSolution() {

        return learningCardService.generateSolution();
    }

}
