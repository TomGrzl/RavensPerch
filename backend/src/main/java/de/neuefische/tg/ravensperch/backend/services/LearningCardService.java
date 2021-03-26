package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.model.CircleDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.RectDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningCardService {

    private final static double INIT_COORDINATES = 200;
    private final static double HEIGHT = 30;
    private final static double WIDTH = 30;
    private final static double RADIUS = 15;
    private final static String FILL = "";
    private final static String STROKE = "";
    private final static double STROKE_WIDTH = 1;
    private final static double SHADOW_BLUR = 5;
    private final static String SHADOW_COLOR = "";
    private final static int SPLITS = 10;


    public KonvaStateDto generateOffenseState() {

        return KonvaStateDto.builder()
                .id("konvaState")
                .rects(generateOffenseObjects())
                .rectIndex(0)
                .circles(generateDefenseObjects())
                .circleIndex(0)
                .build();
    }

    private List<RectDto> generateOffenseObjects() {

        return List.of(
                RectDto.builder()
                        .id("1")
                        .x(INIT_COORDINATES)
                        .y(INIT_COORDINATES)
                        .height(HEIGHT)
                        .width(WIDTH)
                        .fill(FILL)
                        .stroke(STROKE)
                        .strokeWidth(STROKE_WIDTH)
                        .shadowColor(SHADOW_COLOR)
                        .shadowBlur(SHADOW_BLUR)
                        .build(),

                RectDto.builder()
                        .id("2")
                        .x(INIT_COORDINATES + WIDTH + SPLITS)
                        .y(INIT_COORDINATES)
                        .height(HEIGHT)
                        .width(WIDTH)
                        .fill(FILL)
                        .stroke(STROKE)
                        .strokeWidth(STROKE_WIDTH)
                        .shadowColor(SHADOW_COLOR)
                        .shadowBlur(SHADOW_BLUR)
                        .build(),

                RectDto.builder()
                        .id("3")
                        .x(INIT_COORDINATES + (WIDTH * 2) + (SPLITS * 2))
                        .y(INIT_COORDINATES)
                        .height(HEIGHT)
                        .width(WIDTH)
                        .fill(FILL)
                        .stroke(STROKE)
                        .strokeWidth(STROKE_WIDTH)
                        .shadowColor(SHADOW_COLOR)
                        .shadowBlur(SHADOW_BLUR)
                        .build(),

                RectDto.builder()
                        .id("4")
                        .x(INIT_COORDINATES - WIDTH - SPLITS)
                        .y(INIT_COORDINATES)
                        .height(HEIGHT)
                        .width(WIDTH)
                        .fill(FILL)
                        .stroke(STROKE)
                        .strokeWidth(STROKE_WIDTH)
                        .shadowColor(SHADOW_COLOR)
                        .shadowBlur(SHADOW_BLUR)
                        .build(),

                RectDto.builder()
                        .id("5")
                        .x(INIT_COORDINATES - (WIDTH * 2) - (SPLITS * 2))
                        .y(INIT_COORDINATES)
                        .height(HEIGHT)
                        .width(WIDTH)
                        .fill(FILL)
                        .stroke(STROKE)
                        .strokeWidth(STROKE_WIDTH)
                        .shadowColor(SHADOW_COLOR)
                        .shadowBlur(SHADOW_BLUR)
                        .build()


        );
    }

    private List<CircleDto> generateDefenseObjects() {

        return List.of(CircleDto.builder().build());
    }

}
