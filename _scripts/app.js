'use strict';

var issueTrackerModule = (function(chancejs) {

   // Element cache
   var issueAddButton = document.getElementById('issue-add-cta');

   window.onload = function() {
      fetchIssues();
   }

   /*
   * function for fetching the issues from the local storage
   */
   var fetchIssues = function() {
      var issues = JSON.parse(localStorage.getItem('issues'));
      var issueContainer = document.getElementById('issues-container');
      issueContainer.innerHTML = '';
      for (var i = 0; i < issues.length; i++) {
         var id = issues[i].issueId;
         var productName = issues[i].productName;
         var issueDescription = issues[i].issueDescription;
         var issueSeverity = issues[i].issueSeverity;
         var issueOwner = issues[i].issueOwner;
         var issueStatus = issues[i].issueStatus;
         issueContainer.innerHTML += '<div class="issue">' +
                                       '<div class="id-status">' +
                                          '<span class="id">' + id + '</span>' +
                                          '<span class="status">' + issueStatus + '</span>' +
                                       '</div>' +
                                       '<span class="product-name">' + productName + '</span>' +
                                       '<span class="issue-desc">' + issueDescription + '</span>' +
                                       '<div class="issue-severity-owner">' +
                                          '<span class="issue-severity">' + issueSeverity.toUpperCase() + '</span>' +
                                          '<span class="issue-owner">' + issueOwner + '</span>' +
                                       '</div>' +
                                       '<div class="issue-cta">' +
                                          '<button id="close-issue-cta">Close</button>' +
                                          '<button id="delete-issue-cta">Delete</button>' +
                                       '</div>' +
                                    '</div>';
         // Add event listeners to the cta buttons
         document.getElementById('close-issue-cta').addEventListener('click', closeIssue);
         document.getElementById('delete-issue-cta').addEventListener('click', deleteIssue);
      }
   }

   /*
   * function for saving the issue into the local storage as a JSON
   */
   var addIssue = function(e) {
      var issueId = chancejs.guid();
      var productName = document.getElementById('productName').value;
      var issueDescription = document.getElementById('issueDescription').value;
      var issueSeverity = document.getElementById('issueSeverity').value;
      var issueOwner = document.getElementById('issueOwner').value;
      var issueStatus = 'Open';
      var issue = {
         issueId: issueId,
         productName: productName,
         issueDescription: issueDescription,
         issueSeverity: issueSeverity,
         issueOwner: issueOwner,
         issueStatus: issueStatus
      };
      if(localStorage.getItem('issues') == null) {
         var issues = [];
         issues.push(issue);
         localStorage.setItem('issues', JSON.stringify(issues));
      } else {
         var issues = JSON.parse(localStorage.getItem('issues'));
         issues.push(issue);
         localStorage.setItem('issues', JSON.stringify(issues));
      }
      /* Reset the form values
      */
      document.getElementById('#addNewIssueForm').reset;
      /* Refresh the issues list
      */
      fetchIssues();
      e.preventDefault();
   }

   /*
   *  Event listeners
   */
   issueAddButton.addEventListener('click', addIssue);

})(chance);
