package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.model.DefenseFormation;
import de.neuefische.tg.ravensperch.backend.model.LearningCard;
import de.neuefische.tg.ravensperch.backend.model.OffenseFormation;
import de.neuefische.tg.ravensperch.backend.services.DbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("db")
public class DbController {

    DbService learningCardDbService;

    @Autowired
    public DbController(DbService learningCardDbService) {
        this.learningCardDbService = learningCardDbService;
    }

    @GetMapping("createOffense")
    public OffenseFormation createOffenseFormation() {
        return learningCardDbService.saveOffenseFormation(learningCardDbService.generateOffenseFormation());
    }

    @GetMapping("createDefense")
    public DefenseFormation createDefenseFormation() {
        return learningCardDbService.saveDefenseFormation(learningCardDbService.generateDefenseFormation());
    }

    @GetMapping("createLearningcard")
    public LearningCard createLearningCard() {
        return learningCardDbService.saveLearningCard(learningCardDbService.generateLearningCard());
    }

}
