$(document).ready(function() {
	restore_options();
	$('#saveOption').click(function() {
		save_options();
	});
});

function restore_options() {
	chrome.storage.sync.get({
		taskNo: '000000',
		csNo: '000000'
	}, function(items) {
		$('input[name=taskNo]').val(items.taskNo);
		$('input[name=csNo]').val(items.csNo);
	});
}

function save_options() {
	chrome.storage.sync.set({
		taskNo: $('input[name=taskNo]').val(),
		csNo: $('input[name=csNo]').val()
	}, function() {
		alert('저장되었습니다.');
	});
}