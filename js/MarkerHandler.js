AFRAME.registerComponent("marker-handler", {
    init: async function() {
        this.el.addEventListener("markerFound", this.handleMarkerFound);
        this.el.addEventListener("markerLost", this.handleMarkerLost);
    },
    handleMarkerFound: function() {
        var buttonDiv = document.getElementById("button");
        buttonDiv.style.display = "flex";
        var summaryButton = document.getElementById("summary");
        var orderButton = document.getElementById("order");
        summaryButton.addEventListener("click", function() {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work in Progress"
            });
        });
        orderButton.addEventListener("click", function() {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Order",
                text: "Your order will be served soon at your table"
            });
        });

    },
    handleMarkerLost: function() {
        var buttonDiv = document.getElementById("button");
        buttonDiv.style.display = "none";
    }
});