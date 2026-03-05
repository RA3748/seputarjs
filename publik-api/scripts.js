$("#button-search").on("click", function () {
  $("#movie-list").html("");
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "3fa33f11",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;

        $.each(movies, function (i, data) {
          $("#movie-list").append(
            `
            <div class="col-md-4">
                <div class="card mt-3" style="width: 18rem">
                    <img src="` +
              data.Poster +
              `" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">` +
              data.Title +
              `</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">` +
              data.Year +
              `</h6>
                    <a class="card-link see-details" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
              data.imdbID +
              `">See Details</a>
                    </div>
                </div>
            </div>
            `,
          );
        });
      } else {
        $("#movie-list").html("<h3>Movie Not Found!</h3>");
      }
    },
  });
});

$(".see-details").on("click", function () {
  console.log($(this).data("id"));
});
