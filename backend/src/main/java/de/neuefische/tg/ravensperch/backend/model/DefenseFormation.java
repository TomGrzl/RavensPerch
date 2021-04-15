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
@Document(collection = "defenseFormation")
public class DefenseFormation {

    @Id
    private String name;
    private List<Player> dline;
    private List<Player> lb;
    private List<Player> cb;
    private List<Player> safety;

}
