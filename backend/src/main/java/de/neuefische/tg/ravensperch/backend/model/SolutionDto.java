package de.neuefische.tg.ravensperch.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "learningCardSolution")
public class SolutionDto {

    @Id
    private String id = "Solution";
    private List<DefenseDto> defense;
    @JsonProperty("rectId")
    private int rectIndex;
    private List<OffenseDto> oline;
    @JsonProperty("circleId")
    private int circleIndex;
    private List<OffenseDto> qb;
    private List<OffenseDto> rb;
    private List<OffenseDto> wr;
    private List<OffenseDto> sr;
    private List<OffenseDto> dline;
    private List<OffenseDto> lb;
    private List<OffenseDto> cb;
    private List<OffenseDto> safety;
}
