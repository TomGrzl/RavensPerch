package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.db.DefenseDb;
import de.neuefische.tg.ravensperch.backend.db.LearningCardDb;
import de.neuefische.tg.ravensperch.backend.db.OffenseDb;
import de.neuefische.tg.ravensperch.backend.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DbService {

    OffenseDb offenseDB;
    DefenseDb defenseDb;
    LearningCardDb learningCardDb;

    @Autowired
    public DbService(OffenseDb offenseDB, DefenseDb defenseDb, LearningCardDb learningCardDb) {
        this.offenseDB = offenseDB;
        this.defenseDb = defenseDb;
        this.learningCardDb = learningCardDb;
    }

    public OffenseFormation saveOffenseFormation(OffenseFormation offenseFormation) {
        return offenseDB.save(offenseFormation);
    }

    public DefenseFormation saveDefenseFormation(DefenseFormation defenseFormation) {
        return defenseDb.save(defenseFormation);
    }

    public LearningCard saveLearningCard(LearningCard learningCard) {
        return learningCardDb.save(learningCard);
    }

    public LearningCard generateLearningCard() {
        return LearningCard.builder()
                .id("1")
                .defenseFormation(generateDefenseFormation())
                .offenseFormation(generateOffenseFormation())
                .draggableDefense(generateDraggableDefense())
                .build();
    }

    public OffenseFormation generateOffenseFormation() {

        return OffenseFormation.builder()
                .name("Double")
                .oline(generateOffenseLineCard())
                .qb(generateQbCard())
                .rb(generateRbCard())
                .wr(generateWrCard())
                .build();
    }

    private List<Player> generateOffenseLineCard() {

        return List.of(
                Player.builder()
                        .id("o1")
                        .x(0)
                        .role("C")
                        .build(),

                Player.builder()
                        .id("o2")
                        .x(1)
                        .role("G")
                        .build(),

                Player.builder()
                        .id("o3")
                        .x(2)
                        .role("T")
                        .build(),

                Player.builder()
                        .id("o4")
                        .x(-1)
                        .role("G")
                        .build(),

                Player.builder()
                        .id("o5")
                        .x(-2)
                        .role("T")
                        .build()


        );
    }

    private List<Player> generateQbCard() {
        return List.of(Player.builder()
                .id("q1")
                .x(1)
                .y(1)
                .role("QB")
                .build());
    }

    private List<Player> generateRbCard() {
        return List.of(Player.builder()
                .id("r1")
                .x(1)
                .y(1)
                .role("RB")
                .build());
    }

    private List<Player> generateWrCard() {
        return List.of(Player.builder()
                        .id("w1")
                        .x(1)
                        .y(1)
                        .role("WR")
                        .build(),

                Player.builder()
                        .id("w2")
                        .x(-1)
                        .y(2)
                        .role("WR")
                        .build());
    }

    private List<Player> generateSrCard() {
        return List.of(Player.builder()
                        .id("s1")
                        .x(1)
                        .y(1)
                        .role("SR")
                        .build(),

                Player.builder()
                        .id("s2")
                        .x(-1)
                        .y(1)
                        .role("SR")
                        .build());
    }

    public DefenseFormation generateDefenseFormation() {
        return DefenseFormation.builder()
                .name("Cover 2")
                .dline(generateDlineCard())
                .lb(generateLinebackerCard())
                .cb(generateCornerbacksCard())
                .safety(generateSafetiesCard())
                .build();
    }

    private List<Player> generateSafetiesCard() {
        return List.of(
                Player.builder()
                        .id("s1")
                        .x(1)
                        .y(1)
                        .role("FS")
                        .build(),
                Player.builder()
                        .id("s1")
                        .x(-1)
                        .y(1)
                        .role("$$")
                        .build());
    }

    private List<Player> generateCornerbacksCard() {
        return List.of(
                Player.builder()
                        .id("c1")
                        .x(1)
                        .y(1)
                        .role("CB")
                        .build(),
                Player.builder()
                        .id("d1")
                        .x(-1)
                        .y(1)
                        .role("CB")
                        .build());

    }

    private List<Player> generateLinebackerCard() {
        return List.of
                (
                        Player.builder()
                                .id("l1")
                                .x(1)
                                .y(1)
                                .role("S")
                                .build(),

                        Player.builder()
                                .id("l2")
                                .x(1)
                                .y(1)
                                .role("M")
                                .build(),

                        Player.builder()
                                .id("l3")
                                .x(1)
                                .y(1)
                                .role("W")
                                .build()
                );

    }

    private List<Player> generateDlineCard() {
        return List.of(
                Player.builder()
                        .id("d1")
                        .x(1)
                        .y(1)
                        .role("DT")
                        .build(),
                Player.builder()
                        .id("d1")
                        .x(-1)
                        .y(1)
                        .role("NT")
                        .build(),
                Player.builder()
                        .id("d2")
                        .x(1)
                        .y(1)
                        .role("DE")
                        .build(),
                Player.builder()
                        .id("d3")
                        .x(-1)
                        .y(1)
                        .role("DE")
                        .build()
        );
    }

    private List<Player> generateDraggableDefense() {

        return List.of(
                Player.builder()
                        .id("d1")
                        .x(-2.5)
                        .y(0)
                        .role("DE")
                        .build(),

                Player.builder()
                        .id("d2")
                        .x(-1.5)
                        .y(0)
                        .role("DE")
                        .build(),

                Player.builder()
                        .id("d3")
                        .x(-0.5)
                        .y(0)
                        .role("DT")
                        .build(),

                Player.builder()
                        .id("d4")
                        .x(0.5)
                        .y(0)
                        .role("NT")
                        .build(),

                Player.builder()
                        .id("d5")
                        .x(1.5)
                        .y(0)
                        .role("S")
                        .build(),

                Player.builder()
                        .id("d6")
                        .x(0)
                        .y(-2)
                        .role("M")
                        .build(),

                Player.builder()
                        .id("d7")
                        .x(2.5)
                        .y(0)
                        .role("W")
                        .build(),

                Player.builder()
                        .id("d8")
                        .x(-2.5)
                        .y(1)
                        .role("R")
                        .build(),

                Player.builder()
                        .id("d9")
                        .x(-1.5)
                        .y(1)
                        .role("N")
                        .build(),

                Player.builder()
                        .id("d10")
                        .x(-0.5)
                        .y(1)
                        .role("CB")
                        .build(),

                Player.builder()
                        .id("d11")
                        .x(0.5)
                        .y(1)
                        .role("CB")
                        .build(),

                Player.builder()
                        .id("d12")
                        .x(1.5)
                        .y(1)
                        .role("FS")
                        .build(),

                Player.builder()
                        .id("d13")
                        .x(2.5)
                        .y(1)
                        .role("$$")
                        .build()

        );
    }
}
