package com.orderSphere.OrderSphere.repository;

import com.orderSphere.OrderSphere.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByCustomerId(Long userId);
}

