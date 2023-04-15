const contentMap = {
    description: "Your description content goes here...",
    hobbies: "Your hobbies content goes here...",
    // Add more content for each folder here
  };
  
  document.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", () => {
      const subject = folder.dataset.subject;
      const contentTitle = document.querySelector(".content-title");
      const contentText = document.querySelector(".content");
  
      // Set the subject-title and content
      contentTitle.textContent = subject;
      contentText.textContent = contentMap[subject];
  
      // Remove previous animation classes
      contentTitle.classList.remove("computerStatic");
      contentText.classList.remove("computerStatic");
  
      // Trigger reflow to reset the animation
      void contentTitle.offsetWidth;
      void contentText.offsetWidth;
  
      // Apply the animation class
      contentTitle.classList.add("computerStatic");
      contentText.classList.add("computerStatic");
    });
  });
  