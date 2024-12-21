let date = "<option>Date</option>";
        let month = "<option>Month</option>";
        let year = "<option>Year</option>";
        let d=1, m=1, y=2000;
        for(d=1; d<=31; d++){
            date += "<option value="+d+">"+d+"</option>";
        }

        for(m=1; m<=12; m++){
            month += "<option value="+m+">"+m+"</option>";
        }

        for(y=1947; y<=2023; y++){
            year += "<option value="+y+">"+y+"</option>";
        }


        document.getElementById('dob-month').innerHTML=month;
        document.getElementById('dob-date').innerHTML=date;
        document.getElementById('dob-year').innerHTML=year;