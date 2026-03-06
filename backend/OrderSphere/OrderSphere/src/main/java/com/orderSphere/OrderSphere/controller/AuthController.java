package com.orderSphere.OrderSphere.controller;


import com.orderSphere.OrderSphere.Response.AuthResponse;
import com.orderSphere.OrderSphere.config.JwtProvider;
import com.orderSphere.OrderSphere.model.Cart;
import com.orderSphere.OrderSphere.model.User;
import com.orderSphere.OrderSphere.repository.CartRepository;
import com.orderSphere.OrderSphere.repository.UserRepository;
import com.orderSphere.OrderSphere.request.LoginRequest;
import com.orderSphere.OrderSphere.service.CustomerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    private CartRepository cartRepository;

    //signup method created-----------------------------
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) {

        User isEmailExist=userRepository.findByEmail(user.getEmail());
        if (isEmailExist != null) {
            throw new RuntimeException("Email is already used with another account");
        }

        User createdUser = new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(createdUser);


        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);

        Authentication authentication =
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Registered Successfully");

//        return authResponse;
         return ResponseEntity.ok(authResponse);
    }

    //login method-------------------------------

    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest req) {

        String username=req.getEmail();
        String password=req.getPassword();
        Authentication authentication=authenticate(username,password);

        return null;
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customerUserDetailsService.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("Invalid username....");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password...");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
