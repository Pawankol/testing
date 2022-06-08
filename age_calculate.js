//taking input in variable
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

//button function
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

//function calculate
btn.addEventListener("click", () => {
    const date = new Date();
    // alert(date.getMonth());
    // alert(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());


    if (day.value == "") {
        alert("please select your day.");
    } else if (month.value == "") {
        alert("please select your month.");

    } else if (year.value == "") {
        alert("please select your year.");

    } else {
        // alert(day.value + "/" + month.value + "/" + year.value);
        var vday = date.getDate() - day.value;
        var vmonth = (date.getMonth() + 1) - month.value;
        var vyear = date.getFullYear() - year.value;
        // alert(vday + "/" + vmonth + "/" + vyear);
        document.querySelector("#sday").innerHTML = Math.abs(vday);
        document.querySelector("#smonth").innerHTML = Math.abs(vmonth);
        document.querySelector("#syear").innerHTML = Math.abs(vyear);
    }
});
//function reset
reset.addEventListener("click", () => {
    document.querySelector("#sday").innerHTML = "-";
    document.querySelector("#smonth").innerHTML = "-";
    document.querySelector("#syear").innerHTML = "-";
})