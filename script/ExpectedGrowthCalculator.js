var investmentValue = 0;
    var percentage = 0.00;
    var years = 0;

    //get user input for textboxes.
    function getInput(){

      investmentValue = document.getElementById("number-1").value;
      percentage = document.getElementById("number-2").value;
      years = document.getElementById("number-3").value;
    }

    //check if retrieval is successful.
    function printResult(){

      //print user input
      document.getElementById("sampleResultInvestmentValue").innerHTML = investmentValue;
      document.getElementById("sampleResultPercentage").innerHTML = percentage;
      document.getElementById("sampleResultYears").innerHTML = years;

      //clear user input
      document.getElementById("number-1").value = "";
      document.getElementById("number-2").value = "";
      document.getElementById("number-3").value = "";

      //clear variables incase user wants to run form again
      investmentValue = 0;
      percentage = 0.00;
      years = 0;
    }

    $(document).ready(function(){

      $(".flip").click(function(){

          $(this).next(".panel").slideToggle("fast"); //slide next "panel" below "flip"
      });
   });