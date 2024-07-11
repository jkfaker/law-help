package com.project.service.impl;

import com.project.mapper.UserMapper;
import com.project.pojo.User;
import com.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public Integer addUser(User user) {
        return userMapper.insert(user);
    }

    @Override
    public User login(User user) {
        return userMapper.getByUsernameAndPassword(user);
    }
}
