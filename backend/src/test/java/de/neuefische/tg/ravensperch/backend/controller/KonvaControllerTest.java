package de.neuefische.tg.ravensperch.backend.controller;

import de.neuefische.tg.ravensperch.backend.db.KonvaDB;
import de.neuefische.tg.ravensperch.backend.model.CircleDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.RectDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class KonvaControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private KonvaDB konvaDB;

    @BeforeEach
    public void setup() {
        konvaDB.deleteAll();
    }

    private String getUrl() {
        return "http://localhost:" + port + "konva";
    }

    @Test
    public void updateKonvaStateTest() {
        // GIVEN
        KonvaStateDto konvaStateDto = generateKonvaState();

        // WHEN
        HttpEntity<KonvaStateDto> entity = new HttpEntity<>(konvaStateDto);
        ResponseEntity<KonvaStateDto> response = testRestTemplate.postForEntity(getUrl() + "/updateState", entity, KonvaStateDto.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(konvaStateDto));
        assertTrue(konvaDB.existsById("konvaState"));
    }

    @Test
    public void getKonvaStateTest() {
        // GIVEN
        konvaDB.save(generateKonvaState());

        // WHEN
        ResponseEntity<KonvaStateDto> response = testRestTemplate.getForEntity(getUrl() + "/konvaState", KonvaStateDto.class);

        // THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(generateKonvaState()));

    }


    private KonvaStateDto generateKonvaState() {
        List<RectDto> rectDtoList = List.of(
                RectDto.builder()
                        .id("r1")
                        .x(60)
                        .y(60)
                        .width(30)
                        .height(30)
                        .fill("#C9E1F2")
                        .stroke("#000")
                        .strokeWidth(1)
                        .shadowBlur(5)
                        .shadowColor("#000")
                        .isSelected(false)
                        .build(),
                RectDto.builder()
                        .id("r2")
                        .x(60)
                        .y(60)
                        .width(30)
                        .height(30)
                        .fill("#C9E1F2")
                        .stroke("#000")
                        .strokeWidth(1)
                        .shadowBlur(5)
                        .shadowColor("#000")
                        .isSelected(false)
                        .build());

        List<CircleDto> circleDtoList = List.of(
                CircleDto.builder()
                        .id("c1")
                        .x(60)
                        .y(60)
                        .radius(15)
                        .fill("#C9E1F2")
                        .stroke("#000")
                        .strokeWidth(1)
                        .shadowBlur(5)
                        .shadowColor("000")
                        .isSelected(false)
                        .build(),

                CircleDto.builder()
                        .id("c2")
                        .x(60)
                        .y(60)
                        .radius(15)
                        .fill("#C9E1F2")
                        .stroke("#000")
                        .strokeWidth(1)
                        .shadowBlur(5)
                        .shadowColor("000")
                        .isSelected(false)
                        .build());

        int rectIndex = 3;
        int circleIndex = 3;

        return KonvaStateDto.builder()
                .id("konvaState")
                .rects(rectDtoList)
                .rectIndex(rectIndex)
                .circles(circleDtoList)
                .circleIndex(circleIndex)
                .build();
    }
}
