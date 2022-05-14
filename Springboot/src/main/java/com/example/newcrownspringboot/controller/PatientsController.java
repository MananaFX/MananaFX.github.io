package com.example.newcrownspringboot.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.newcrownspringboot.entity.Patients;
import com.example.newcrownspringboot.mapper.PatientsMapper;
import com.example.newcrownspringboot.service.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientsController {

    @Autowired
    private PatientsService patientsService;
    @Autowired
    private PatientsMapper patientsMapper;

    @GetMapping("/random")
    public List<Patients> findRandom(@RequestParam String address, @RequestParam Integer size){
        address = "%" + address + "%";
        return patientsMapper.Random(address,size);
    }

    @GetMapping("/healthCount")
    public long returnCount()
    {
        QueryWrapper<Patients> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("state","健康");
        return patientsService.count(queryWrapper);
    }

    @GetMapping("/deathCount")
    public long returnDeathCount()
    {
        QueryWrapper<Patients> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("state","死亡");
        return patientsService.count(queryWrapper);
    }
    @GetMapping("/infectCount")
    public long returnInfectCount()
    {
        QueryWrapper<Patients> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("state","感染");
        return patientsService.count(queryWrapper);
    }


    @PostMapping("/change")
    public boolean saveOrUpdate(@RequestBody Patients patients){
        return patientsService.saveOrUpdate(patients);
    }

    @GetMapping()
    public List<Patients> findAll(){
        return patientsService.list();
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Integer idCard){
        return patientsService.removeById(idCard);
    }

    @GetMapping("/page")
    public IPage<Patients> findPage(@RequestParam Integer pageNum,
                                    @RequestParam Integer pageSize,
                                    @RequestParam String name,
                                    @RequestParam String address,
                                    @RequestParam String origin,
                                    @RequestParam String state){
        IPage<Patients> page = new Page<>(pageNum, pageSize);
        QueryWrapper<Patients> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("state",state);
        if(!name.equals("")){
            queryWrapper.like("name",name);
        }
        if(!address.equals("")){
            queryWrapper.like("address",address);
        }
        if(!origin.equals("")){
            queryWrapper.like("origin",origin);
        }
        return patientsService.page(page, queryWrapper);
     }

}
