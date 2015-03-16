$("#issue_assigned_to_id").val($(".author a").attr("href").split("/")[3]);
$("#issue_status_id").val("15");
$('#relation_issue_to_id').val(taskNo);
$('#new-relation-form input[name=commit]').click();
