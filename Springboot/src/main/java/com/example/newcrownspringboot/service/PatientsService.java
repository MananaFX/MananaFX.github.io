package com.example.newcrownspringboot.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.newcrownspringboot.entity.Patients;
import com.example.newcrownspringboot.mapper.PatientsMapper;
import org.springframework.stereotype.Service;


@Service
public class PatientsService extends ServiceImpl<PatientsMapper, Patients> {

}
