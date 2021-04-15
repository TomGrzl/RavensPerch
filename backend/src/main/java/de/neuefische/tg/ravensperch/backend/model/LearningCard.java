package de.neuefische.tg.ravensperch.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "learningCard")
public class LearningCard {

    private String id;
    private OffenseFormation offenseFormation;
    private DefenseFormation defenseFormation;
    private List<Player> draggableDefense;

}
