var db;

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        db = window.sqlitePlugin.openDatabase (
            { name: 'employee.db', location: 'default'},
            function () {
                alert("DB Opened Successfully!");
            },
            function() {
                alert("DB Failed to open!");
            }
        );

        db.transaction(
            function(tx) {
                var query = "CREATE TABLE IF NOT EXISTS employeeTbl (employeeNumber INTEGER PRIMARY ,lastName TEXT NOT NULL, firstName TEXT NOT NULL, extension TEXT NOT NULL, email TEXT NOT NULL,officeCode TEXT NOT NULL, reportsTo TEXT NOT NULL, jobTitle TEXT NOT NULL)";
                tx.executeSql(query, [],
                    function(tx, result) {
                        alert ("Table created Successfully!");
                    },
                    function(err) {
                        alert ("error occured: " +err.code);
                    });
                });
    }


    $(function() {
        $("#divAddStdBtn").show();

        var link1 = crossroads.addRoute("/sqliteclick", function() {
            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM employeeTbl;', [], function (tx, results) {
                var len = results.row.length;
                alert (len + " ");

                if (len > 0) {
                    htmlText = "";
                    for (i = 0; i < len; i++) {
                        htmlText = htmlText + "<tr><td>" +results.rows.item(i).employeeNumber+ "</td><td>" +results.rows.item(i).lastName+ "</td><td>" +results.rows.item(i).firstName+ "</td><td>" +results.rows.item(i).extension+ "</td></tr>" +results.rows.item(i).email+ "</td><td>" +results.rows.item(i).ofiiceCode+ "</td><td>" +results.rows.item(i).reportsTo+ "</td><td>" +results.rows.item(i).jobTitle+ "</td><td>";                
                    }
                    $('#tblemployee tbody').html(htmlText);
                }
                else {
                    htmlText = "<tr><td>No data found! </td></tr>"
                    $('#tblStudent tbody').html(htmlText); 
                }
            });
            });
            $("#divEmployeeList").show();
        });

        
        var link2 = crossroads.addRoute('viewemployee/email', function(email) {
            alert("Click on email success!");

            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM employeeTbl where email = ?', [email], function(tx, results) {
                    var len = results.row.length;
                    $("#employeeNumbershow").val(results.row.item(0).nickname);
                    $("#lastNameshow").val(results.row.item(0).title);
					$("#firstNameshow").val(results.row.item(0).title);
                    $("#extensionshow").val(results.row.item(0).desc);
					$("#emailshow").val(results.row.item(0).desc);
					$("#officeCodeshow").val(results.row.item(0).desc);
					$("#reportsToshow").val(results.row.item(0).desc);
					$("#pjobTitleshow").val(results.row.item(0).desc);
					
                });
            });

            $("#divEmployeeList").hide();
            $("#divFrmShowEmployee").show();
        });

       .$(ajax({
				type: String,
				url: https://kerbau.odaje.biz/getstaffbyid,
				data: employeeNumber=value, lastName=value, firstName=value, extension=alue, email=value, officeCode=value, reportsTo=value, jobTitle=value,
				cache: false.
					success: function(datareceived){
					//instructions to execute when the ajax call is succeeds
					alert ("The data have been inserted!");
				},
				error: function(){
					//instructions to execute when the ajax call is failed
					alert ("The data are not found!");
				}
				}); 
        
        JSON.parse(returnedData) {
		db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM employeeTbl where email = ?', [email], function(tx, results) {
			secondpage="<a
			href='secondpage.html? id="+employeeNumber+"'>"+email+"</a>";
			htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";
			$('#maintable tbody').html(htmlText)
		});



        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();


        

    });