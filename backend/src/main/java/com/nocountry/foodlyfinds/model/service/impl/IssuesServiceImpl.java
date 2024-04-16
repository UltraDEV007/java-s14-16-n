package com.nocountry.foodlyfinds.model.service.impl;


import com.nocountry.foodlyfinds.exception.ResourceNotFoundException;
import com.nocountry.foodlyfinds.model.dto.request.IssuesDTORequest;
import com.nocountry.foodlyfinds.model.dto.response.IssuesResponse;
import com.nocountry.foodlyfinds.model.entity.IssuesEntity;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import com.nocountry.foodlyfinds.model.enums.ECompensation;
import com.nocountry.foodlyfinds.model.enums.EIssueType;
import com.nocountry.foodlyfinds.model.repository.IssuesRepository;
import com.nocountry.foodlyfinds.model.repository.StoreRepository;
import com.nocountry.foodlyfinds.model.repository.UserRepository;
import com.nocountry.foodlyfinds.model.service.IssuesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.ReadOnlyFileSystemException;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class IssuesServiceImpl implements IssuesService {

    private final IssuesRepository issuesRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;
    @Transactional(readOnly = true)
    @Override
    public List<IssuesResponse> getAllIssues(Long userId) {
       List<IssuesEntity> issues = issuesRepository.findByUserId(userId);
       if(issues.isEmpty()){
           throw new ResourceNotFoundException("User do not have issues");
       }
       return issues.stream()
               .map( i -> new IssuesResponse(i.getIssuesId(),i.getStore().getName(),i.getIssueType().name(),i.getCompensation().name())).toList();
    }

    @Transactional
    @Override
    public void createIssues(Long userId, Long storeId, IssuesDTORequest issuesRequest) {
        UserTblEntity user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not fount with id " + userId));
        StoreEntity store = storeRepository.findById(storeId)
                .orElseThrow(()-> new ResourceNotFoundException("Store not fount with id " + storeId));

        issuesRepository.save(IssuesEntity.builder()
                .user(user)
                .store(store)
                .issueType(EIssueType.valueOf(issuesRequest.getIssueType().toUpperCase()))
                .compensation(ECompensation.valueOf(issuesRequest.getCompensation().toUpperCase()))
                .build());

    }

    @Transactional
    @Override
    public void deleteIssues(Long issuesId, Long userId) {
        IssuesEntity issuesDB = issuesRepository.findById(issuesId)
                .orElseThrow(()-> new ResourceNotFoundException("Issues not found with id " + issuesId));
        userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not fount with id " + userId));
        if(!Objects.equals(issuesDB.getUser().getUserId(), userId)){
            throw new ResourceNotFoundException("Denied permissions");

        }
        issuesRepository.delete(issuesDB);
    }
    @Transactional(readOnly = true)
    @Override
    public IssuesResponse getIssuesById(Long issuesId) {
       IssuesEntity issues = issuesRepository.findById(issuesId)
                .orElseThrow(()-> new ResourceNotFoundException("Issues not found with id " + issuesId));
       return IssuesResponse.builder()
               .issueId(issues.getIssuesId())
               .storeName(issues.getStore().getName())
               .issuesType(issues.getIssueType().name())
               .compensation(issues.getCompensation().name())
               .build();
    }

    @Transactional
    @Override
    public void updateIssues(Long issuesId, Long userId, IssuesDTORequest issuesRequest) {
        IssuesEntity issuesDB = issuesRepository.findById(issuesId)
                .orElseThrow(()-> new ResourceNotFoundException("Issues not fount with id " + issuesId));
        userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not fount with id " + userId));
        if(Objects.equals(issuesDB.getUser().getUserId(), userId)){
            issuesDB.setIssueType(EIssueType.valueOf(issuesRequest.getIssueType().toUpperCase()));
            issuesDB.setCompensation(ECompensation.valueOf(issuesRequest.getCompensation().toUpperCase()));
        }
        issuesRepository.save(issuesDB);

    }


}
