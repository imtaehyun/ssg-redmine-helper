var taskNo = '';
var csNo = '';

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