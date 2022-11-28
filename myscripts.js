
fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json").then(
    res => {
      res.json().then(
        data => {
          console.log(data.places);
          if (data.places.length > 0) {
  
            var temp = "";
            data.places.forEach((itemData,id) => {
              temp += "<tr>";
              temp += "<td>" + eval(id+1) + "</td>"
          //    temp += "<td>" +       + "</td>"
              temp += "<td>" + itemData.street_no+ " " +itemData.locality + "</td>"
              temp += "<td>" + itemData.postal_code+ "</td>"
              temp += "<td>" + itemData.lat+ "</td>"
              temp += "<td>" + itemData.long+ "</td>"
  
              "</tr>";
            });
            document.getElementById('table-data').innerHTML = temp;
          }
        }
      )
    }
  )
  
  
          function tableSearch() {
              let input, filter, table, tr, td,i, txtValue;
  
              //Intialising Variables
              input = document.getElementById("myInput");
              filter = input.value.toUpperCase();
              table = document.getElementById("table-data");
              tr = table.getElementsByTagName("tr");
  
              for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td");
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if ((td[1].innerHTML.toUpperCase().indexOf(filter) > -1 || td[2].innerHTML.toUpperCase().indexOf(filter) > -1 || td[3].innerHTML.toUpperCase().indexOf(filter) > -1 || td[4].innerHTML.toUpperCase().indexOf(filter) > -1)) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
  
          }