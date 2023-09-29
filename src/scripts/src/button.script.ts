window.onload = () => {
  setInterval(() => {
    const movies = document.querySelectorAll("div > div.ipc-poster-card > a");
    movies.forEach((movie: HTMLAnchorElement) => {
      const url: string[] = movie.getAttribute("href").split("/");

      const newButton =
        "<a style='width: 100%' href='http://localhost:3000/watch/tv/" +
        url[2] +
        "/1/1'><button style='border-radius: 10px; color: white; border: unset; background-color: #5447ff; padding: 10px; width: 100%'>easywatch</button></a>";

      movie
        .closest("div")
        .querySelector("div.ipc-poster-card__actions").innerHTML = newButton;
    });
  }, 5000);
};
