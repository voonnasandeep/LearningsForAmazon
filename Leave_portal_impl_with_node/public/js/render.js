$(document).ready(function() {
    var employee_leaves;
    var frm = $('#loginItem');
    var loginSection = $('.login-sec');
    var employee_logged_in = false;

    var frm2 = $('#leaveApplySection');

    frm2.submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: frm2.attr('method'),
            url: frm2.attr('action'),
            data: frm2.serialize(),
            success: function(data) {
                console.log('form2 Submission was successful.');
                employee_leaves = data;
                var htmlString = "<p>" + "Congratulations you got your leave approved my your manager. Go and party...!!" + "</p>";
                $('.applyLeaves').html(htmlString);
                console.log(data);
            },
            error: function(data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });
    });

    frm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function(data) {
                console.log('Submission was successful.');
                //var htmlString = data.Casual + " " + data.Sick;
                //$('.login-sec').html(htmlString);
                employee_logged_in = true;
                employee_leaves = data;
                loginSection.hide();
                $('.applyLeaves').show();
                console.log(data);
            },
            error: function(data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });
    });

    $(".left-nav ul li a").click(function() {
        if (!employee_logged_in) {
            alert("Excuse me..Please log-in first...!!");
        } else {
            var leave_element = $(this);
            var leave_type = $(this).text();
            leave_element.fadeOut(function() {
                if (leave_type == 'Casual')
                    $(this).text(employee_leaves.Casual);
                else if (leave_type == 'Sick')
                    $(this).text(employee_leaves.Sick);
                else if (leave_type == 'Marriage')
                    $(this).text(employee_leaves.Marriage);
                else if (leave_type == 'Paid')
                    $(this).text(employee_leaves.Paid);
                else if (leave_type == 'Childcare')
                    $(this).text(employee_leaves.Childcare);
            }).fadeIn(function() {
                $(this).text(leave_type);
            });
        }
    });

});