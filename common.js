$(() => {
	$(".private-chat-sidebar-content-con.sidebar-content-header.btn").click(function () {
		$(".private-message-search-bar").toggleClass("active");
	});

	$(".private-groupes-sidebar-content-con .sidebar-content-header .btn").click(function () {
		$(".private-groupes-search-bar").toggleClass("active");
	});

	$(".input-field, #accepted_terms").on('input', function () {
		$("#notification-con").removeClass("error");
		$("#notification-con").text("");
		$("#notification-con").removeClass("active");
	});

	$(".settings-input").click(function () {
		$(this).css("border", "solid")
	});
});

