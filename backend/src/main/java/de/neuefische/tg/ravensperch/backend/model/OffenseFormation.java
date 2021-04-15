package de.neuefische.tg.ravensperch.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "offenseFormation")
public class OffenseFormation {

    @Id
    private String name;
    private List<Player> oline;
    private List<Player> qb;
    private List<Player> rb;
    private List<Player> wr;

}
