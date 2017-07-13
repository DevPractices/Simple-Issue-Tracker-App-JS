var fetchIssues = function() {
   var issues = JSON.parse(localStorage.getItem('issues'));
   var issueContainer = document.getElementById('issues-container');

   issueContainer.innerHTML = '';

   for (var i = 0; i < issues.length; i++) {
      var id = issues[i].id;
      var productName = issues[i].productName;
      var issueDescription = issues[i].issueDescription;
      var iissueSeverity = issues[i].issueSeverity;
      var issueOwner = issues[i].issueOwner;
      var issueStatus = issues[i].issueStatus;
   }

}
