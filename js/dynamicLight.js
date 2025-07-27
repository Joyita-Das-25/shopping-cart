function toggleBulb(status) {

    //console.log(status); //on
    // do code for bulb on
    if (status == 'on') {
        //toggle image
        document.getElementById('bulb_on').style.display = 'inline-block';
        document.getElementById('bulb_off').style.display = 'none';

        //toggle button
        document.getElementById('off_btn').style.display = 'inline-block';
        document.getElementById('on_btn').style.display = 'none';
    }
    //do code for bulb off
    else {
        //toggle image
        document.getElementById('bulb_on').style.display = 'none';
        document.getElementById('bulb_off').style.display = 'inline-block';
        //toggle button
        document.getElementById('off_btn').style.display = 'none';
        document.getElementById('on_btn').style.display = 'inline-block';
    }

    // console.log(bulb_src);
}