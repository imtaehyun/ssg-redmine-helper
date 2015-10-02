$("#issue_assigned_to_id").val($(".author a").attr("href").split("/")[3]);
$("#issue_status_id").val("15");
$('#relation_issue_to_id').val(csNo);
$('#new-relation-form input[name=commit]').click();
$('#update').show();
$('#issue_notes').focus();
$('html, body').animate({scrollTop: $('#update').offset().top}, 100);
if ($("#issue_notes").val() == "") {$("#issue_notes").val("* 처리되었습니다.")};
