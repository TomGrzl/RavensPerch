package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.model.OffenseDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.DefenseDto;
import de.neuefische.tg.ravensperch.backend.model.SolutionDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningCardService {

    public SolutionDto generateSolution() {
        return SolutionDto.builder()
                .id("Solution")
                .defense(generateDefenseObjects())
                .oline(generateOffenseLine())
                .qb(generateQb())
                .rb(generateRb())
                .wr(generateWr())
                .sr(generateSr())
                .dline(generateDline())
                .lb(generateLinebacker())
                .cb(generateCornerbacks())
                .safety(generateSafeties())
                .build();
    }

    private List<OffenseDto> generateSafeties() {
        return List.of(
                OffenseDto.builder()
                        .id("s1")
                        .x(1)
                        .y(1)
                        .role("FS")
                        .build(),
                OffenseDto.builder()
                        .id("s1")
                        .x(-1)
                        .y(1)
                        .role("$$")
                        .build());
    }

    private List<OffenseDto> generateCornerbacks() {
        return List.of(
                OffenseDto.builder()
                        .id("c1")
                        .x(1)
                        .y(1)
                        .role("CB")
                        .build(),
                OffenseDto.builder()
                        .id("d1")
                        .x(-1)
                        .y(1)
                        .role("CB")
                        .build());

    }

    private List<OffenseDto> generateLinebacker() {
        return List.of
                (
                        OffenseDto.builder()
                                .id("l1")
                                .x(1)
                                .y(1)
                                .role("S")
                                .build(),

                        OffenseDto.builder()
                                .id("l2")
                                .x(1)
                                .y(1)
                                .role("M")
                                .build(),

                        OffenseDto.builder()
                                .id("l3")
                                .x(1)
                                .y(1)
                                .role("W")
                                .build()
                );

    }

    private List<OffenseDto> generateDline() {
        return List.of(
                OffenseDto.builder()
                        .id("d1")
                        .x(1)
                        .y(1)
                        .role("DT")
                        .build(),
                OffenseDto.builder()
                        .id("d1")
                        .x(-1)
                        .y(1)
                        .role("NT")
                        .build(),
                OffenseDto.builder()
                        .id("d2")
                        .x(1)
                        .y(1)
                        .role("DE")
                        .build(),
                OffenseDto.builder()
                        .id("d3")
                        .x(-1)
                        .y(1)
                        .role("DE")
                        .build()
        );
    }


    public KonvaStateDto generateOffenseState() {

        return KonvaStateDto.builder()
                .id("Offense")
                .defense(generateDefenseObjects())
                .rectIndex(0)
                .oline(generateOffenseLine())
                .circleIndex(0)
                .qb(generateQb())
                .rb(generateRb())
                .wr(generateWr())
                .sr(generateSr())
                .build();
    }

    private List<OffenseDto> generateOffenseLine() {

        return List.of(
                OffenseDto.builder()
                        .id("o1")
                        .x(0)
                        .role("C")
                        .build(),

                OffenseDto.builder()
                        .id("o2")
                        .x(1)
                        .role("G")
                        .build(),

                OffenseDto.builder()
                        .id("o3")
                        .x(2)
                        .role("T")
                        .build(),

                OffenseDto.builder()
                        .id("o4")
                        .x(-1)
                        .role("G")
                        .build(),

                OffenseDto.builder()
                        .id("o5")
                        .x(-2)
                        .role("T")
                        .build()


        );
    }

    private List<OffenseDto> generateQb() {
        return List.of(OffenseDto.builder()
                .id("q1")
                .x(1)
                .y(1)
                .role("QB")
                .build());
    }

    private List<OffenseDto> generateRb() {
        return List.of(OffenseDto.builder()
                .id("r1")
                .x(1)
                .y(1)
                .role("RB")
                .build());
    }

    private List<OffenseDto> generateWr() {
        return List.of(OffenseDto.builder()
                        .id("w1")
                        .x(1)
                        .y(1)
                        .role("WR")
                        .build(),

                OffenseDto.builder()
                        .id("w2")
                        .x(-1)
                        .y(2)
                        .role("WR")
                        .build());
    }

    private List<OffenseDto> generateSr() {
        return List.of(OffenseDto.builder()
                        .id("s1")
                        .x(1)
                        .y(1)
                        .role("SR")
                        .build(),

                OffenseDto.builder()
                        .id("s2")
                        .x(-1)
                        .y(1)
                        .role("SR")
                        .build());
    }

    private List<DefenseDto> generateDefenseObjects() {

        return List.of(
                DefenseDto.builder()
                        .id("d1")
                        .x(-2.5)
                        .y(0)
                        .role("DE")
                        .build(),

                DefenseDto.builder()
                        .id("d2")
                        .x(-1.5)
                        .y(0)
                        .role("DE")
                        .build(),

                DefenseDto.builder()
                        .id("d3")
                        .x(-0.5)
                        .y(0)
                        .role("DT")
                        .build(),

                DefenseDto.builder()
                        .id("d4")
                        .x(0.5)
                        .y(0)
                        .role("NT")
                        .build(),

                DefenseDto.builder()
                        .id("d5")
                        .x(1.5)
                        .y(0)
                        .role("S")
                        .build(),

                DefenseDto.builder()
                        .id("d6")
                        .x(0)
                        .y(-2)
                        .role("M")
                        .build(),

                DefenseDto.builder()
                        .id("d7")
                        .x(2.5)
                        .y(0)
                        .role("W")
                        .build(),

                DefenseDto.builder()
                        .id("d8")
                        .x(-2.5)
                        .y(1)
                        .role("R")
                        .build(),

                DefenseDto.builder()
                        .id("d9")
                        .x(-1.5)
                        .y(1)
                        .role("N")
                        .build(),

                DefenseDto.builder()
                        .id("d10")
                        .x(-0.5)
                        .y(1)
                        .role("CB")
                        .build(),

                DefenseDto.builder()
                        .id("d11")
                        .x(0.5)
                        .y(1)
                        .role("CB")
                        .build(),

                DefenseDto.builder()
                        .id("d12")
                        .x(1.5)
                        .y(1)
                        .role("FS")
                        .build(),

                DefenseDto.builder()
                        .id("d13")
                        .x(2.5)
                        .y(1)
                        .role("$$")
                        .build()

        );
    }
}
