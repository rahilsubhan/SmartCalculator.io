function calculateAge(dateOfBirthString) {
    // Create a Date object from the DOB string
    const dateOfBirth = new Date(dateOfBirthString);
  
    // Get today's date
    const today = new Date();
  
    // Calculate difference in years, months, and days
    let years = today.getFullYear() - dateOfBirth.getFullYear();
    let months = today.getMonth() - dateOfBirth.getMonth();
    let days = today.getDate() - dateOfBirth.getDate();
  
    // Adjust months and days if birthday hasn't happened yet this year
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12; // Add 12 months to get the remaining months from last year
    }
  
    // Handle negative days by adding days to the previous month
    if (days < 0) {
      months--;
      days += daysInMonth(dateOfBirth.getFullYear(), dateOfBirth.getMonth()); // Add days in previous month
    }
  
    // Format the result as an array of strings
    return [`${years} years`, `${months} months`, `${days} days`];
  }
  
  // Function to determine days in a month (considering leap years)
  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate(); // Create Date object for next month with day set to 0. getDate() will return the last day of the previous month
  }
  
  // Example usage
  const dobString = "2001-05-22";
  const ageComponents = calculateAge(dobString);
  console.log("Age components:", ageComponents);
  
  
$("#aa").on("click",function(){
    var dateOfBirthString = $("#ip").val();console.log(dateOfBirthString);
    var age = calculateAge(dateOfBirthString);
    $(".mid,.bot").hide();
    $("h1").css("font-size","4em");
    $("h1").text(age[0]+" "+age[1]+" "+age[2]);
    $(".top").addClass("centr");
    $(".top").append("<button id='reload-button' class='button-12' role='button'>Try Again</button>");
    $("#reload-button").on("click",function() {
      window.location.reload();
  });
});


