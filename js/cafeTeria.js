function print() {
    // console.log("joyita")

    var cityId = document.getElementById("city").value;
    // console.log(cityId);
    var cafeId = document.getElementById("cafe").value
    // console.log(cafeId);

    var cityName = '';
    switch (cityId) {
        case "KOl":
            cityName = "Kolkata";
            break;
        case "MUM":
            cityName = "Mumbai";
            break;
        case "PAT":
            cityName = "Patna";
            break;
        case "PUN":
            cityName = "Pune";
            break

        default:
            cityName = "Invalid City Name";
            break;
    }


    var cafeName = '';
    switch (cafeId) {
        case "C":
            cafeName = "Cafe C";
            break;
        case "D":
            cafeName = "Cafe D";
            break;
        case "S":
            cafeName = "SDF";
            break;
        case "O":
            cafeName = "Oval Park";
            break

        default:
            cafeName = "Invalid cafe Name";
            break;
    }
    var message = '';
    message = `You choosed  <b> ${cafeName}</b>  in the city  <b>${cityName}</b>`;
    document.getElementById("text-meaage").innerHTML = message;
    
}