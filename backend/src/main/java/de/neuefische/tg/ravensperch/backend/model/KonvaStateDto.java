package de.neuefische.tg.ravensperch.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "konvaState")
public class KonvaStateDto {

    @Id
    private String id = "KonvaState";
    private List<RectDto> rects;
    @JsonProperty("rectId")
    private int rectIndex;
    private List<OffenseDto> oline;
    @JsonProperty("circleId")
    private int circleIndex;
    private List<OffenseDto> qb;
    private List<OffenseDto> rb;
    //private List<OffenseDto> wr;
    //private List<OffenseDto> slot;
    //private List<OffenseDto> te;


}
