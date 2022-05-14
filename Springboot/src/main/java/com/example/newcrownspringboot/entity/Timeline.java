package com.example.newcrownspringboot.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@TableName(value = "timeline")
public class Timeline {
   private Integer id;
   private String title;
   private String content;

   @JsonFormat(pattern="yyyy-MM-dd")
   private String timestamp;

   private String color;
   private String size;
}
