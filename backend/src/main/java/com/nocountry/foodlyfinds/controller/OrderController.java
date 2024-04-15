package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.model.dto.request.OrderDTORequest;
import com.nocountry.foodlyfinds.model.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.jaxb.SpringDataJaxb;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/order")
public class OrderController {

    private final OrderService orderService;


    @PostMapping("user/{userId}")
    public ResponseEntity<?> saveOrder(@PathVariable Long userId, @RequestBody OrderDTORequest orderRequest){
        orderService.save(userId,orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @GetMapping("{orderId}")
    public ResponseEntity<?> findOrderById(@PathVariable Long orderId){
        return ResponseEntity.ok(orderService.findById(orderId));
    }

    @GetMapping("user/{userId}")
    public ResponseEntity<?> findOrderByUserId(@PathVariable Long userId){
        return ResponseEntity.ok(orderService.findByUserId(userId));
    }
}
