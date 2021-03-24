package de.neuefische.tg.ravensperch.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.UUID;

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
