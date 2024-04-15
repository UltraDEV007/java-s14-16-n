package com.nocountry.foodlyfinds.model.service.impl;

import com.nocountry.foodlyfinds.model.dto.request.OrderDTORequest;
import com.nocountry.foodlyfinds.model.dto.response.OrderDTOResponse;
import com.nocountry.foodlyfinds.model.dto.response.ProductResponse;
import com.nocountry.foodlyfinds.model.entity.OrderEntity;
import com.nocountry.foodlyfinds.model.entity.ProductEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.repository.OrderRepository;
import com.nocountry.foodlyfinds.model.repository.ProductRepository;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl  implements OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final ModelMapper modelMapper;
    @Override
    public void save(Long userId, OrderDTORequest orderRequest) {
        UserTblEntity userDB = userRepository.findById(userId)
                .orElseThrow();
        List<Long> ids = orderRequest.getProductsId();
        List<ProductEntity> products = productRepository.findAllByIdIn(ids);
        OrderEntity order = new OrderEntity();
        products.forEach(order::addProduct);
        userDB.addOrder(order);
        //userRepository.save(userDB);
        orderRepository.save(order);
    }

    @Override
    public OrderDTOResponse findById(Long orderId) {
        OrderEntity order = orderRepository.findById(orderId).orElseThrow();
        List<ProductResponse> products = order.getProducts().stream()
                .map( p -> modelMapper.map(p, ProductResponse.class)).toList();

        return OrderDTOResponse.builder()
                .orderId(order.getOrderId())
                .products(products)
                .build();
    }

    @Override
    public List<OrderDTOResponse> findByUserId(Long userId) {
        return orderRepository.findOrderByUserId(userId)
                .stream()
                .map(orderEntity -> {
                    OrderDTOResponse orderDto = new OrderDTOResponse();
                    orderDto.setOrderId(orderEntity.getOrderId());
                    List<ProductResponse> products = new ArrayList<>();
                    orderEntity.getProducts().forEach(productEntity -> {
                        products.add(modelMapper.map(productEntity, ProductResponse.class));
                    });
                    orderDto.setProducts(products);
                    return orderDto;
                })
                .collect(Collectors.toList());
    }
}
