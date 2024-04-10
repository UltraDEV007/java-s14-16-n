package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.model.dto.request.IssuesDTORequest;
import com.nocountry.foodlyfinds.model.dto.response.IssuesResponse;
import com.nocountry.foodlyfinds.model.entity.IssuesEntity;

import java.util.List;


public interface IssuesService {
    List<IssuesResponse> getAllIssues(Long userId);

    void createIssues(Long userId, Long storeId, IssuesDTORequest issuesRequest);
    void updateIssues(Long issuesId, Long userId, IssuesDTORequest issuesRequest);
    void  deleteIssues(Long issuesId, Long userId);

    IssuesResponse getIssuesById (Long issuesId);
}
