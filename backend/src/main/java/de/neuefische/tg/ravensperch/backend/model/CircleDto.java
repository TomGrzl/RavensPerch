package de.neuefische.tg.ravensperch.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CircleDto {

    private String id;
    private double x;
    private double y;
    private double radius;
    private String fill;
    private String stroke;
    private double strokeWidth;
    private double shadowBlur;
    private String shadowColor;
    private boolean isSelected;


}
