var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var employee_logged_in = false;

var sandeep_leave_status = {
    Casual: 15,
    Sick: 10,
    Marriage: 5,
    Paid: 5,
    Childcare: 4
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('login.html');
});

app.post('/validate-login', function(req, res) {
    if (req.body.username == 'sandeep' && req.body.password == 'yesiam') {
        employee_logged_in = true;
        res.type('application/json');
        res.send(sandeep_leave_status);
    }
});

/* var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); */

app.post('/applyLeave', function(req, res) {
    var fromDateStr = req.body.fromDate;
    var toDateStr = req.body.toDate;
    var category = req.body.leaveCategory;



    var fromDate = new Date(fromDateStr);
    var toDate = new Date(toDateStr);

    var deduct_leaves = parseInt(Math.ceil((Math.abs(fromDate.getTime() - toDate.getTime())) / (1000 * 3600 * 24)));

    var temp = sandeep_leave_status.Casual;



    if (category == 'casual')
        sandeep_leave_status.Casual = sandeep_leave_status.Casual - deduct_leaves;
    else if (category == 'sick')
        sandeep_leave_status.Sick = sandeep_leave_status.Sick - deduct_leaves;
    else if (category == 'marriage')
        sandeep_leave_status.Marriage = sandeep_leave_status.Marriage - deduct_leaves;
    else if (category == 'paid')
        sandeep_leave_status.Paid = sandeep_leave_status.Paid - deduct_leaves;
    else if (category == 'childcare')
        sandeep_leave_status.Childcare = sandeep_leave_status.Childcare - deduct_leaves;

    res.type('application/json');

    res.send(sandeep_leave_status);
});

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});