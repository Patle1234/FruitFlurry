function openSessions() {
    var x = document.getElementById("myDIV");
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function registeredTable() {
    var x = document.getElementById("t01");
    let url = window.location.href.split('/')[2];
    let schoolPrefix = url.split('.')[0];

    console.log(localStorage.getItem("token"));
    $.ajax({
        url: 'https://api.compscikids.net/fetchStudents',
        method: 'GET',
        data: {session: "Spring2019"},
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.setRequestHeader ("School", schoolPrefix);
        },
        success: function(data){
            console.log(data);
            addUsersTable(data);
        }
    });
}

function addUsersTable(data){
    var count = 1;
    var table1 = document.createElement("TABLE");
    table1.id = "sessionTable";
    var length = data.length;
    var body = table1.createTBody();
    for (i = 0; i < length; i++){
        var row = body.insertRow(i);
        var cell = row.insertCell();
        var cell = row.insertCell();
        cell.innerHTML = count.toString();
        count++;
        for (j = 1; j < Object.keys(data[i]).length; j++){
            var cell = row.insertCell();
            cell.innerHTML = data[i][Object.keys(data[i])[j]];
        }
    }

    var fields = ["Select", "ID", "First", "Last", "Grade", "School", "Shirt", "Gender", "Sessions", "Parent", "Rel.", "Number", "Email", "Emergency", "Rel.", "Number", "Confirmed"];

    var header = table1.createTHead();
    firstRow = header.insertRow(0);
    for (j = 0; j < fields.length; j++){
        var cell = firstRow.insertCell();
        cell.innerHTML = fields[j];
    }

    table1.style.display = "block";
    table1.style.width = "100%";
    document.getElementById('myDIV').appendChild(table1);


    $(document).ready(function() {
        var mainT = $("#sessionTable").DataTable(
            {
                dom: 'Bfrtip',

                buttons: [
                    'copy', 'csv', 'excel', 'print', {
                        extend: 'pdfHtml5',
                        orientation: 'landscape',
                        pageSize: 'LEGAL',
                    },
                    {
                        text: 'E-Mail',
                        action: function (e, dt, node, config) {
                            window.location.pathname = "/emailPreviewPage.html";
                            //alert('Prompt which email to send');

                        }
                    },
                ],
                "bProcessing": true,
                // "fnDrawCallback": function () {
                //     $('#sessionTable tbody td').editable( 'link here', {
                //         "callback": function( sValue, y ) {
                //             var aPos = mainT.fnGetPosition( this );
                //             oTable.fnUpdate( sValue, aPos[0], aPos[1] );
                //         },
                //         "submitdata": function ( value, settings ) {
                //             return {
                //                 "row_id": this.parentNode.getAttribute('id'),
                //                 "column": oTable.fnGetPosition( this )[2]
                //             };
                //         },
                //         // "callback": function( sValue, y ) {
                //         //     /* Redraw the table from the new data on the server */
                //         //     mainT.fnDraw();
                //         // },
                //         "height": "24px",
                //         "width": "200px"
                //     } );
                // },
                responsive: true,
                columnDefs: [{
                    orderable: true,
                    className: 'select-checkbox',
                    targets: 0
                }],
                select: true,
                order: [[1, 'asc']],
                "paging": true,
                deferRender:    true,
                scrollY:        100000,
                scrollCollapse: true,
                scroller:       true
            }
        );

        mainT.MakeCellsEditable({
            "onUpdate": myCallbackFunction
        });


    })
}

function myCallbackFunction(updatedCell, updatedRow) {
    let url = window.location.href.split('/')[2];
    let schoolPrefix = url.split('.')[0];
    $.ajax({
        url : 'https://api.compscikids.net/updateRegistration',
        type : 'POST',
        dataType:'json',
        data: JSON.stringify({newValue: updatedCell.data(), col: updatedCell.index.column, row: updatedCell.index().row}),
        contentType: "application/json; charset=utf-8",
        processData: false,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("School", schoolPrefix);
        },
        success : function(result) {
            console.log(result);
        }
    });
}

function newSession(){
    // document.getElementById("myForm").style.display = "block";
    var x = document.getElementById("myForm");
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function addSession(){
    var sessionName = document.getElementById("sName").value;
}