package com.project.controller;
import com.project.pojo.Result;
import com.project.service.MealService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;





@Slf4j
@RestController
@RequestMapping("/")
public class MealController {
    @Autowired
    private MealService mealService;

    @GetMapping
    public Result list()
    {
        log.info("查询所有套餐小信息");
        return Result.success(mealService.list());
    }

    @GetMapping("/buy")
    public Result introduce(Integer id)
    {
        log.info("在套餐详情界面，查询所有套餐大信息");
        return Result.success(mealService.introduce(id));
    }
}
