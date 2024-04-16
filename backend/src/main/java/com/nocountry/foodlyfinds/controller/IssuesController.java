package com.nocountry.foodlyfinds.controller;

import com.nocountry.foodlyfinds.model.dto.request.IssuesDTORequest;
import com.nocountry.foodlyfinds.model.service.IssuesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/issues")
@RequiredArgsConstructor
public class IssuesController {

    private final IssuesService issuesService;

    @PostMapping("user/{userId}/store/{storeId}")
    private ResponseEntity<?> saveIssues(@PathVariable Long userId,
                                         @PathVariable Long storeId,
                                         @Valid @RequestBody IssuesDTORequest issuesRequest){
        issuesService.createIssues(userId,storeId,issuesRequest);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("{issuesId}")
    private ResponseEntity<?> findIssuesById(@PathVariable Long issuesId){
        return ResponseEntity.ok(issuesService.getIssuesById(issuesId));
    }

    @GetMapping("all/{userId}")
    private ResponseEntity<?> findAllIssues(@PathVariable Long userId){
        return ResponseEntity.ok(issuesService.getAllIssues(userId));
    }

    @DeleteMapping("{issuesId}/user/{userId}")
    private ResponseEntity<?> deleteIssuesById(@PathVariable Long issuesId, @PathVariable Long userId){
        issuesService.deleteIssues(issuesId, userId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{issuesId}/user/{userId}")
    private ResponseEntity<?> updateIssues(@PathVariable Long issuesId,
                                           @PathVariable Long userId,
                                           @Valid @RequestBody IssuesDTORequest issuesRequest){
        issuesService.updateIssues(issuesId,userId,issuesRequest);
        return ResponseEntity.ok().build();
    }
}
