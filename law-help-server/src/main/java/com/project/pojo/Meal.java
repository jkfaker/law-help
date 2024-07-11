package com.project.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Meal {
    private Integer id;
    private String image;
    private String title;
    private Float price;
}