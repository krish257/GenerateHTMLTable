    // Function to generate table
    function generateTable(data) {
        var table = $('<table border="1">');
        var rowspan = 1;

        // Iterate over data
        for (var i = 0; i < data.length; i++) {
            var row = $('<tr>');
            if (i === 0 || data[i].city !== data[i - 1].city) {
                row.append($('<td>' + data[i].city + '</td>'));
            } else {
                row.append($('<td></td>')); // Add empty cell
            }
            row.append($('<td>' + data[i].name + '</td>'));
            row.append($('<td>' + data[i].age + '</td>'));

            table.append(row);
        }


        // Append table to container
        $('#table-container').append(table);
    }

    function generateTable1(tableId, noColumns, columnNames, data) {
        var table = $('<table border="1" id="' + tableId + '">');
        // var rowspan = 1;

        // // Create table header
        // var rowspan = 1;
        // for (var i = 0; i < data.length; i++) {
        //     var row = $('<tr>');
        //     if (i > 0 && data[i][0] === data[i - 1][0]) {
        //         rowspan++;
        //     } else {
        //         rowspan = 1;
        //     }

        //     // Create cells
        //     for (var j = 0; j < noColumns; j++) {
        //         if (j === 0 && i > 0 && data[i][0] === data[i - 1][0]) {
        //             row.append($('<td></td>')); // Add empty cell
        //         } else {
        //             if (j === 0) {
        //                 row.append($('<td rowspan="' + rowspan + '">' + data[i][j] + '</td>'));
        //             } else {
        //                 row.append($('<td>' + data[i][j] + '</td>'));
        //             }
        //         }
        //     }

        //     // Add row to table
        //     table.append(row);
        // }
        // Create table header
        var headerRow = $('<tr>');
        for (var i = 0; i < columnNames.length; i++) {
            headerRow.append($('<th>' + columnNames[i] + '</th>'));
        }
        table.append(headerRow);

        // Iterate over data
        for (var i = 0; i < data.length; i++) {
            var row = $('<tr>');
            for (var j = 0; j < noColumns; j++) {
                var rowspan = 1;
                if (i > 0) {
                    var k = i - 1;
                    while (k >= 0 && data[k][j] === data[i][j]) {
                        rowspan++;
                        k--;
                    }
                }
                if (i > 0 && data[i][j] === data[i - 1][j]) {
                    row.append($('<td></td>')); // Add empty cell
                } else {
                    row.append($('<td rowspan="' + rowspan + '">' + data[i][j] + '</td>'));
                }
            }

            // Add row to table
            table.append(row);
        }


        // Append table to container
        $('#' + tableId).append(table);
    }