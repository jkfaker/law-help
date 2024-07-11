package com.project.service;
import com.project.pojo.Bmeal;
import com.project.pojo.Meal;

import java.util.List;

public interface MealService {
    public List<Meal> list();

    public Bmeal introduce(Integer id);
}
