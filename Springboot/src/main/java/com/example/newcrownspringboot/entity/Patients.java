package com.example.newcrownspringboot.entity;

import java.sql.Date;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName(value = "person")
public class Patients {
   private String name;
   @TableId(value = "idCard")
   private String idCard;
   private String phone;
   private String gender;
   private String address;
   private double temp;
   private String lastNat;
   private String firstVaccine;
   private String secVaccine;
   private String thirdVaccine;
   private String state;
   private String admissionDate;
   private String origin;
   private String symptom;
   private String remarks;
}
