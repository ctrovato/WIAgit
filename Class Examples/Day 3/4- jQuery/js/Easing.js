$(function() { 

            $("#right").click(function() {
                $("#theDiv").animate({ width: "500px" }, 1000, "swing");
            });

            $("#text").click(function() {
                $("#theDiv").animate({ fontSize: "24pt" }, 1000, "swing");
            });

            $("#toggle").click(function() {
                $("#theDiv").animate({ left: "500" }, 1000, "swing");
            });
            
            $("#multiple").click(function() {
                $("#theDiv").animate({height: "500px", width: "500px", left: "500", fontSize: "24pt" }, 1000, "linear");
            });

            $("#reset").click(function() {
                $("#theDiv").animate({ height: "180px", width: "250px", left: "0", fontSize: "16pt" }, 1000, "linear");
             }); 
					
 
});