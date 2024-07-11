package com.project.mapper;

import com.project.pojo.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface UserMapper {

    // 插入一行用户信息

    @Insert("INSERT INTO law.user(username, password) VALUES(#{username}, #{password})")
    Integer insert(User user);


    // 核实账号密码是否正确
    @Select("SELECT * FROM law.user WHERE username = #{username} and password = #{password} ")
    User getByUsernameAndPassword(User user);



}
