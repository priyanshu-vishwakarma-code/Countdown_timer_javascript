let endDate = "00";
let startDate = "00";
let interval;

document.getElementById("startbtn").addEventListener("click", () => {
    const date = document.getElementById("dateinput").value;
    const time = document.getElementById("timeinput").value;

    if(!date || !time){
        alert("Please select both Date and Time.");
        return;
    }

    endDate = new Date(`${date}T${time}`).getTime();
    startDate = new Date().getTime();
    
    clearInterval(interval);
    updatetime();
    interval = setInterval(updatetime, 1000);
});


function updatetime(){
    const currTime = new Date().getTime();
    
    const timeElapsed = currTime - startDate;
    const timeLeft = endDate - currTime;
    
    // days , hours , mins , secs
    const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const mins = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const secs = Math.floor((timeLeft % (60 * 1000)) / (1000));
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    
    console.log(days, hours, mins, secs);
    
    //progress bar
    const wid = Math.floor((timeElapsed/(endDate-startDate)) * 100) + "%";
    document.getElementById("progress").style.width = wid;
    document.getElementById("percentage").innerHTML = wid;
    if(timeLeft <= 0){
        clearInterval(interval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("progress").style.width = "100%";
    }
}


