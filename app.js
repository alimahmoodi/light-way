document.querySelectorAll(".way__item-logo").forEach(item => {
    item.addEventListener("mouseover", function(e) {
        const wayItem = e.target.offsetParent;
        const wayArray = document.querySelectorAll(".way__item");
        for (let i = 0; i < wayArray.length; i++) {
            if (wayItem == wayArray[i]) {
                for (let j = 1; j <= i; j++) {
                    console.log(wayArray[j]);
                    wayArray[j].getElementsByTagName("path")[0].setAttribute("stroke", "yellow");
                    wayArray[j].getElementsByTagName("path")[0].setAttribute("stroke-width", "7");
                }
            }
        }
    });
    item.addEventListener("mouseout", function(e) {
        const wayItem = e.target.offsetParent;
        const wayArray = document.querySelectorAll(".way__item");
        for (let i = 0; i < wayArray.length; i++) {
            if (wayItem == wayArray[i]) {
                for (let j = 1; j <= i; j++) {
                    console.log(wayArray[j]);
                    wayArray[j].getElementsByTagName("path")[0].setAttribute("stroke", "black");
                    wayArray[j].getElementsByTagName("path")[0].setAttribute("stroke-width", "3");
                }
            }
        }
    });
});
