package com.project.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private int id;
    private String image;
    private String name;
    private char sex;
    private String job;
    private String zone;
    private String phone;
    private String username;
    private String password;
}
