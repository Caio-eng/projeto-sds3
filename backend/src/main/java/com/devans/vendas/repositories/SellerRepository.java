package com.devans.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devans.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
