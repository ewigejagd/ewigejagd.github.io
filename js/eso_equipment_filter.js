function filterBySetInSection(sectionid) {
    var input, filter, table, tr, td0, td1, td2, td3, i, val0, val1, val2, val3;
    input = document.getElementById("input-" + sectionid);
    filter = input.value.toUpperCase();
    table = document.getElementById("table-" + sectionid);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td0 = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        if (td0 || td1 || td2 || td3) {
            val0 = td0.textContent || td0.innerText;
            val1 = td1.textContent || td1.innerText;
            val2 = td2.textContent || td2.innerText;
            val3 = td3.textContent || td3.innerText;
            if (val0.toUpperCase().indexOf(filter) > -1 ||
                val1.toUpperCase().indexOf(filter) > -1 ||
                val2.toUpperCase().indexOf(filter) > -1 ||
                val3.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}