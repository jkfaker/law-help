package com.project.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bmeal {
    private Integer id;
    private String bigImage;
    private String title;
    private Float price;
    private String pIntro;
    private String dIntro;
    private String description;
}
