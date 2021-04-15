package de.neuefische.tg.ravensperch.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Player {

    private String id;
    private double x;
    private double y;
    private String role;
}
