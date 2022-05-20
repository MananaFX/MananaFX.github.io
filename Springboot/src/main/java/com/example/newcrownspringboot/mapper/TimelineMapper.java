package com.example.newcrownspringboot.mapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import com.example.newcrownspringboot.entity.Timeline;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TimelineMapper extends BaseMapper<Timeline> {

    @Select("select timeline.title, timeline.content FROM timeline WHERE timeline.timestamp = #{timestamp}")
    List<Timeline> getTimeline(String timestamp);

}