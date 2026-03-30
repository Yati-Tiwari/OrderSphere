package com.orderSphere.OrderSphere.service;

import com.orderSphere.OrderSphere.model.User;

public interface UserService {
   public User findUserByJwtToken(String token) throws Exception;
   public User findUserByEmail(String email) throws Exception;
//    public User saveUser(User user) throws Exception;
}
