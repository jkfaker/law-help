package com.project.mapper;
import com.project.pojo.Bmeal;
import com.project.pojo.Meal;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import java.util.List;



@Mapper
public interface MealMapper {
    @Select("select * from law.set_meal")
    List<Meal> list();

    @Select("select * from law.set_meal where id = #{id}")
    Bmeal introduce(Integer id);
}
