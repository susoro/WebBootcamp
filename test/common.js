function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('moreBtn').addEventListener('click', function() {
    var moreContent = document.getElementById('moreContent');
    moreContent.style.display = "block";
    this.style.display = "none";
});

// Default to open the first tab
document.getElementsByClassName('tablink')[0].click();