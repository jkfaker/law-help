package com.project.controller;


import com.project.pojo.Result;
import com.project.pojo.User;
import com.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/login")
    public Result login(@RequestBody User user)
    {
        log.info("用户登录：{}", user);
        User isLogin = userService.login(user);
        return isLogin != null ? Result.success() : Result.error("恭喜你！chl把你的账号和密码吃了！！！");

//        return Result.error(0,"");
    }

    @PostMapping("/register")
    public Result register(@RequestBody User user)
    {
        try {
            log.info("用户注册：{}", user);
            log.info("返回值：{}", userService.addUser(user));
            return Result.success();
        }
        catch (Exception e)
        {
            return Result.error("该用户名已存在，请重试！");
        }
    }
}
