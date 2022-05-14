package com.example.newcrownspringboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.newcrownspringboot.entity.Patients;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;


@Mapper
public interface PatientsMapper extends BaseMapper<Patients> {

    @Select("SELECT person.idCard, person.name,person.phone,person.address FROM PERSON WHERE person.address LIKE #{address} AND person.state = \"健康\" ORDER BY RAND() LIMIT #{size}")
    List<Patients> Random(String address, Integer size);
}
