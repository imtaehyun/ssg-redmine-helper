var taskNo = '';
var csNo = '';
var issue_assigned_to_id = '';

chrome.storage.sync.get({
	taskNo: '000000',
	csNo: '000000'
}, function(items) {
	taskNo = items.taskNo;
	csNo = items.csNo;
});

$('#setCsComplete').click(function() {
	chrome.tabs.executeScript(null, {file: 'js/jquery.min.js'});
	chrome.tabs.executeScript(null, {code: 'var csNo = ' + csNo});
	chrome.tabs.executeScript(null, {file: 'js/fn_setCsComplete.js'});
});
$('#setTaskComplete').click(function() {
	chrome.tabs.executeScript(null, {file: 'js/jquery.min.js'});
	chrome.tabs.executeScript(null, {code: 'var taskNo = ' + taskNo});
	chrome.tabs.executeScript(null, {file: 'js/fn_setTaskComplete.js'});
});
$('#moveOrder').click(function() {
	chrome.tabs.executeScript(null, {file: 'js/jquery.min.js'});
	chrome.tabs.executeScript(null, {code: 'var issue_assigned_to_id = 290; var issue_project_id = 188;'});
	chrome.tabs.executeScript(null, {file: 'js/fn_moveTask.js'});
});
$('#movePlanner').click(function() {
	chrome.tabs.executeScript(null, {file: 'js/jquery.min.js'});
	chrome.tabs.executeScript(null, {code: 'var issue_assigned_to_id = 151; var issue_project_id = \'\''});
	chrome.tabs.executeScript(null, {file: 'js/fn_moveTask.js'});
});
