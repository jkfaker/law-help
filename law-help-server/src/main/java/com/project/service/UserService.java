package com.project.service;

import com.project.pojo.User;
import org.springframework.stereotype.Service;


public interface UserService {

    public Integer addUser(User user);

    public User login(User user);
}
