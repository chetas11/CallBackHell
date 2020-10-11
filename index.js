const Heading = document.getElementById("Heading");

window.addEventListener("load", function (event) {
	event.preventDefault();
	Heading.innerText = 10;

	setTimeout(function () {
		Heading.innerText = 9;

		setTimeout(function () {
			Heading.innerText = 8;

			setTimeout(function () {
				Heading.innerText = 7;

				setTimeout(function () {
					Heading.innerText = 6;

					setTimeout(function () {
						Heading.innerText = 5;

						setTimeout(function () {
							Heading.innerText = 4;

							setTimeout(function () {
								Heading.innerText = 3;

								setTimeout(function () {
									Heading.innerText = 2;

									setTimeout(function () {
										Heading.innerText = 1;

										setTimeout(function () {
											Heading.classList.add("heading");
											Heading.innerText =
												"Happy Independence Day!!!";
										}, 1000);
									}, 1000);
								}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
});







