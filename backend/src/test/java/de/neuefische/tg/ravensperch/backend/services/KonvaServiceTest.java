package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.db.KonvaDB;
import de.neuefische.tg.ravensperch.backend.model.CircleDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.RectDto;
import org.junit.jupiter.api.Test;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

class KonvaServiceTest {

    private final RestTemplate restTemplate = mock(RestTemplate.class);
    private final KonvaDB testDb = mock(KonvaDB.class);
    private final KonvaService testService = new KonvaService(testDb);

    private KonvaStateDto createKonvaState() {
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
                .rects(rectDtoList)
                .rectIndex(rectIndex)
                .circles(circleDtoList)
                .circleIndex(circleIndex)
                .build();
    }

    @Test
    public void updateStateTest() {
        // GIVEN
        KonvaStateDto konvaStateDto = createKonvaState();
        when(testDb.save(konvaStateDto)).thenReturn(createKonvaState());

        // WHEN
        Optional<KonvaStateDto> actual = testService.updateKonvaState(konvaStateDto);

        // THEN
        assertThat(actual.get(), is(createKonvaState()));
        verify(testDb)

    }

}