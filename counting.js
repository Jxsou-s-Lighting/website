function formatNumberWithComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function animateCounters() {
  const counters = document.querySelectorAll(".stats-number");
  counters.forEach((counter) => {
    const start = 0;
    const end = parseInt(counter.getAttribute("data-end"));
    const formattedEnd = formatNumberWithComma(end);
    const duration = 2000;

    const range = end - start;
    const stepSize = range / duration;

    let current = start;
    const startTime = performance.now();

    function updateCounter(timestamp) {
      const elapsed = timestamp - startTime;
      current = start + Math.floor(stepSize * elapsed);

      if (current <= end) {
        counter.textContent = formatNumberWithComma(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = formattedEnd;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

document.addEventListener("DOMContentLoaded", animateCounters);
