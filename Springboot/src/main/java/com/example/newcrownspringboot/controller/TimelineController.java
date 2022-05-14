package com.example.newcrownspringboot.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.newcrownspringboot.entity.Timeline;
import com.example.newcrownspringboot.service.TimelineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/timeline")
public class TimelineController {

    @Autowired
    private TimelineService timelineService;

    @GetMapping()
    public List<Timeline> findAll(){
        return timelineService.list();
    }

    @PostMapping("/update")
    public boolean saveOrUpdate(@RequestBody Timeline timeline){
        return timelineService.saveOrUpdate(timeline);
    }

    @GetMapping("/page")
    public IPage<Timeline> findPage(@RequestParam Integer pageNum,
                                    @RequestParam Integer pageSize,
                                    @RequestParam String timeStamp){
        IPage<Timeline> page = new Page<>(pageNum, pageSize);
        QueryWrapper<Timeline> queryWrapper = new QueryWrapper<>();
        if(!timeStamp.equals("")){
            queryWrapper.like("timeStamp",timeStamp);
        }
        return timelineService.page(page, queryWrapper);
    }
}
