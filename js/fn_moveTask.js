// 프로젝트 선택
if (issue_project_id !== undefined && issue_project_id !== '') {
    $("#issue_project_id").val(issue_project_id);
}
// 담당자 선택
$("#issue_assigned_to_id").val(issue_assigned_to_id);
$('#update').show(); // 편집보이기
$('#issue_notes').focus();
$('html, body').animate({scrollTop: $('#update').offset().top}, 100);
