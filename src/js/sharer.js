// Web Share API utk laman artikel.
let share = document.getElementById("sharer");
    share.addEventListener("click", function ()  {
    if (navigator.share) {
        navigator.share({
        url: window.location.href,
        });
    } else {
        alert('Sharing is not supported. Please copy the URL in the address bar.')
    };        
});