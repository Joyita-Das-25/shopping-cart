function calculateResult() {
    //bengali marks
    var bengaliMarks = parseInt(document.getElementById('bengaliMarks').value);
    //Math marks
    var mathMarks = parseInt(document.getElementById('mathMarks').value);
    //english marks
    var english = parseInt(document.getElementById('english').value);
    //physics marks
    var physics = parseInt(document.getElementById('physics').value);
    //chemistry marks
    var chemistry = parseInt(document.getElementById('chemistry').value);



    //calculate total marks
    var totalMarks = bengaliMarks + mathMarks + english + physics + chemistry;

    console.log(totalMarks)

    if (totalMarks >= 300) {
        //pass case
        console.log("you are pass")
    }
    else (totalMarks < 300); {
        //fail case
        //console.log("you are fail")
    }

}

function clearFunc() {
    document.getElementById('stdName').value = '';
    document.getElementById('bengaliMarks').value = '';
    document.getElementById('mathMarks').value = '';
    document.getElementById('english').value = '';
    document.getElementById('physics').value = '';
    document.getElementById('chemistry').value = '';

}