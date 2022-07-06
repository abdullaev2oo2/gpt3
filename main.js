(() => {
  let videos = document.querySelectorAll(".flex-video__child");
  let playBtns = document.querySelectorAll("svg.play");
  let pauseBtns = document.querySelectorAll("svg.pause");

  pauseBtns.forEach((pauseBtn, index) => {
    pauseBtn.addEventListener("click", () => {
      if (!videos[index].paused) {
        videos[index].pause();
        pauseBtn.classList.add("none");
        playBtns[index].classList.remove("none");
      }
    });
  });

  playBtns.forEach((playBtn, index) => {
    playBtn.addEventListener("click", () => {
      if (videos[index].paused) {
        videos[index].play();
        playBtn.classList.add("none");
        pauseBtns[index].classList.remove("none");
      }
    });
  });
})();
