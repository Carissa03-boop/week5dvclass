const arrCars = [
    {name: "car1", speed: 200},
    {name: "car2", speed: 180},
    {name: "car3", speed: 230},
    {name: "car4", speed: 150},
    {name: "car5", speed: 300}
]

//const filteredBySpeed = [];
//const filteredByName = [];

let fastCars = [];

for(let i=0; i< arrCars.length; i++) {
    const car = arrCars[i];

    if (car.speed > 200) {
        fastCars.push(car);
    }
}

// ------------------------------------------------------------------------
// Cars Array
// ------------------------------------------------------------------------

const arrPlants = [
    {
      name: "Ford Mustang",
      speed: 200,
      description: "fast car 1",
      image: "../assets/fordmustang.jpg",
      lightAmount: "low",
      addedDate: "2023-03-25"
    },
    {
      name: "Nissan R34 Skyline",
      speed: 180,
      description: "fast car 2",
      image: "../assets/nissanr34skyline.jpg",
      lightAmount: "bright",
      addedDate: "2023-05-01"
    },
    {
      name: "Porsche Boxster",
      speed: 230,
      description: "fast car 3",
      image: "../assets/porscheboxster.jpg",
      lightAmount: "low",
      addedDate: "2023-07-04"
    },
    {
      name: "Tesla Roadster",
      speed: 150,
      description: "fast car 4",
      image: "../assets/teslaroadster.png",
      lightAmount: "low",
      addedDate: "2023-04-29"
    },
    {
      name: "Mercedes G63",
      speed: 300,
      description: "fast car 5",
      image: "../assets/mercedesg63.jpg",
      lightAmount: "bright",
      addedDate: "2023-05-10"
    },
  ];
  
  let appliedFilter = "";
  let appliedSort = "date added";
  
  // ------------------------------------------------------------------------
  // When the document loads
  // ------------------------------------------------------------------------
  
  $(document).ready(function(){
  
      console.log("Hello");
  
      // ------------------------------------------------------------------
      // Home
  
      // When the document loads, animate the hero image upwards
      $("#hero-image").animate({top: '-=100px'});
  
      // ------------------------------------------------------------------
      // Browse
  
      filterSortCars();
  
  });
  
  // ------------------------------------------------------------------------
  // Load all cars
  // ------------------------------------------------------------------------
  
  function loadCars(carsToShow) {
  
    // Clear all elements inside the plants cards container
  
    $("#carsContainer").empty();
  
    // Loop though plants
  
    for (let i = 0; i < carsToShow.length; i++) {
      const cars = carsToShow[i];
      
      console.log(car.name);
  
      // 1: Select the plants container add the plant card to it
      $("#carsContainer").append($("#carCardTemplate").html());
  
      // 2: Create a variable that contains the most recently added plant card
      let currentChild = $("#carsContainer").children().eq(i);
  
      // 3: Set the content for the current plant card from the plant array
      $(currentChild).find("#nameText").text(car.name);
      $(currentChild).find("#speedText").text(car.speed);
      $(currentChild).find("#descriptionText").text(car.description);
      $(currentChild).find(".card-img-top").attr('src','assets/' + car.image);
  
      // 4: Hide the description text from the curent card
      $(currentChild).find("#descriptionText").hide();
    };
  
  };
  
  // ------------------------------------------------------------------------
  // When a filter or sort option is clicked
  // ------------------------------------------------------------------------
  
  $("input[name='filterRadio']").click(function(){
    appliedFilter = $(this).attr('value');
  
    filterSortPlants();
  });
  
  $("input[name='sortRadio']").click(function(){
    appliedSort = $(this).attr('value');
  
    filterSortCars();
  });
  
  function filterSortCars() {
    
    let filteredSortedArrCars = [];
  
    console.log(appliedFilter);
    console.log(appliedSort);
  
    // Filter Cars
  
    if (appliedFilter) {
      filteredSortedArrCars = arrCars.filter(car => car.lightAmount == appliedFilter);
    } else {
      filteredSortedArrCars= arrCars;
    }
  
    // Sort Cars
  
    if (appliedSort == "low to high") {
  
      // Sort plants from the lowest to highest speed
      filteredSortedArrCars = filteredSortedArrCars.sort((a, b) => {
        return a.speed - b.speed;
      });
  
    } else if (appliedSort == "date added") {
  
      // Sort plants from the newest to oldest
      filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
        let da = new Date(a.addedDate);
        let db = new Date(b.addedDate);
      
        return db - da;
      });
  
    }
  
    console.log(filteredSortedArrCars)
  
    loadPlants(filteredSortedArrCars);
  
  }
  
  // ------------------------------------------------------------------------
  // When a car card is clicked
  // ------------------------------------------------------------------------
  
  $("#carsContainer").on('click','.card', function() {
  
    // Toggle the price & description text
    $(this).find("#speedText").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additonal content
    $(this).find(".card-img-top").toggleClass("small");
  
  });