import gsap from "gsap";

// Runs a full toast lifecycle and returns a Promise that resolves when done
function showNotificationAnimation(name) {
  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete: resolve,
    });

    tl.to(`.toast.${name}`, {
      y: -120,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power4.out",
    })
      .to({}, { duration: 2.5 }) // hold delay
      .to(`.toast.${name}`, {
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power.in",
      });
  });
}

// Process an array of toast names sequentially
async function processNotificationsSequential(names) {
  for (const name of names) {
    await showNotificationAnimation(name);
  }
}

// Example usage:
processNotificationsSequential(["one", "two"]);
// Later, add more without changing logic:
// processNotificationsSequential(["one", "two", "three"]);
