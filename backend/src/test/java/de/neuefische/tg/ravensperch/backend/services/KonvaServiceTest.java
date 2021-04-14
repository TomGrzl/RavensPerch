package de.neuefische.tg.ravensperch.backend.services;

import de.neuefische.tg.ravensperch.backend.db.RavensPerchDb;
import de.neuefische.tg.ravensperch.backend.model.OffenseDto;
import de.neuefische.tg.ravensperch.backend.model.KonvaStateDto;
import de.neuefische.tg.ravensperch.backend.model.DefenseDto;

import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

class KonvaServiceTest {

    private final RavensPerchDb testDb = mock(RavensPerchDb.class);
    private final KonvaService testService = new KonvaService(testDb);

    @Test
    public void updateStateTest() {
        // GIVEN
        KonvaStateDto konvaStateDto = generateKonvaState();
        when(testDb.save(konvaStateDto)).thenReturn(generateKonvaState());

        // WHEN
        Optional<KonvaStateDto> actual = testService.updateKonvaState(konvaStateDto);

        // THEN
        assertThat(actual.get(), is(generateKonvaState()));
        verify(testDb).save(generateKonvaState());

    }

    @Test
    public void getStateTest() {
        // GIVEN
        when(testDb.findById("konvaState")).thenReturn(Optional.of(generateKonvaState()));

        // WHEN
        Optional<KonvaStateDto> actual = testService.getKonvaState("konvaState");

        // THEN
        assertThat(actual.get(), is(generateKonvaState()));
        verify(testDb).findById("konvaState");

    }

    private KonvaStateDto generateKonvaState() {
        List<DefenseDto> defenseDtoList = List.of(
                DefenseDto.builder()
                        .id("r1")
                        .x(60)
                        .y(60)
                        .role("$$")
                        .build(),
                DefenseDto.builder()
                        .id("r2")
                        .x(60)
                        .y(60)
                        .role("FS")
                        .build());

        List<OffenseDto> circleDtoList = List.of(
                OffenseDto.builder()
                        .id("c1")
                        .x(60)
                        .y(60)
                        .role("C")
                        .build(),

                OffenseDto.builder()
                        .id("c2")
                        .x(60)
                        .y(60)
                        .role("G")
                        .build());

        int rectIndex = 3;
        int circleIndex = 3;

        return KonvaStateDto.builder()
                .defense(defenseDtoList)
                .rectIndex(rectIndex)
                .oline(circleDtoList)
                .circleIndex(circleIndex)
                .build();
    }

}