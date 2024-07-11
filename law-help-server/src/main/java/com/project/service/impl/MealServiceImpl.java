package com.project.service.impl;

import com.project.mapper.MealMapper;
import com.project.pojo.Bmeal;
import com.project.pojo.Meal;
import com.project.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MealServiceImpl implements MealService {
    @Autowired
    private MealMapper mealMapper;
    private final String URL = "https://8t282696k0.zicp.fun/image/";

    @Override
    public List<Meal> list() {
        List<Meal> mList = mealMapper.list();
        for (Meal meal : mList) {
            meal.setImage(URL + meal.getImage());
        }
        return mList;
    }

    @Override
    public Bmeal introduce(Integer id) {
        Bmeal bmeal = mealMapper.introduce(id);
            bmeal.setBigImage(URL + bmeal.getBigImage());
        return bmeal;
    }
}
