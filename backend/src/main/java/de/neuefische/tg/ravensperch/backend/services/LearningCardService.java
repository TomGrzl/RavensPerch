package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.model.OffenseDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.RectDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningCardService {

    private final static double INIT_X = 510;
    private final static double INIT_Y = 163;
    private final static double HEIGHT = 30;
    private final static double WIDTH = 30;
    private final static double RADIUS = 15;
    private final static String FILL = "#C9E1F2";
    private final static String STROKE = "#000";
    private final static double STROKE_WIDTH = 1;
    private final static double SHADOW_BLUR = 5;
    private final static String SHADOW_COLOR = "#000";
    private final static int SPLITS = 10;


    public KonvaStateDto generateOffenseState() {

        return KonvaStateDto.builder()
                .id("Offense")
                .rects(generateDefenseObjects())
                .rectIndex(0)
                .oline(generateOffenseLine())
                .circleIndex(0)
                .qb(generateQb())
                .rb(generateRb())
                .build();
    }

    private List<OffenseDto> generateOffenseLine() {

        return List.of(
                OffenseDto.builder()
                        .id("1")
                        .x(0)
                        .y(INIT_Y)
                        .role("C")
                        .build(),

                OffenseDto.builder()
                        .id("2")
                        .x(1)
                        .y(INIT_Y)
                        .role("G")
                        .build(),

                OffenseDto.builder()
                        .id("3")
                        .x(2)
                        .y(INIT_Y)
                        .role("T")
                        .build(),

                OffenseDto.builder()
                        .id("4")
                        .x(-1)
                        .y(INIT_Y)
                        .role("G")
                        .build(),

                OffenseDto.builder()
                        .id("5")
                        .x(-2)
                        .y(INIT_Y)
                        .role("T")
                        .build()


        );
    }

    private List<OffenseDto> generateQb() {
        return List.of(OffenseDto.builder()
                .id("1")
                .x(1)
                .y(1)
                .role("QB")
                .build());
    }

    private List<OffenseDto> generateRb() {
        return List.of(OffenseDto.builder()
                .id("1")
                .x(1)
                .y(1)
                .role("RB")
                .build());
    }

    private List<RectDto> generateDefenseObjects() {

        return List.of();
    }

}
