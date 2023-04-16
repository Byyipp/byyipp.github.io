const contentMap = {
    "Astar Algorithm": `This is a pathing project that uses A* and Theta* along with some heuristics to find the shortest path in a 2D grid.  This grid has randomized obstacles and its the algorithm's job to be able to go around these obstacles.  The heuristics used were the Manhattan distance and the Euclidean distance to be able to prioritize the most optimal path.`,

    "Crash Game": `Inspired by the game named "Crash", except built and fully automated on the blockchain!  This is to the help of Chainlink Upkeep and VRF Coordinator to be able to generate true randomness and the ability to run automatically with no maintenance.  It is only a proof of concept that almost anything can really be decentralized to some degree.  It has been thouroughly tested and deployed through the ethereum testnet to ensure integrity.`,
    // Add more content for each folder here
    "BestBuy Monitor": `Web scraping application that monitors and alerts you (via discord webhooks) of desired instock products.  Implemented mySQL database in order to record product information and keep track of current stock levels.  This application was primarily used during COVID times when some products would be highly sought after and impossible to get.`,

    "NFT Automint": `This was a chrome extension scrapes the html page and leverages DOM manipulation in order to automatically mint NFTS on Solana websites.  Now out of order as it is outtdated, but was highly effective in the early days of Web3 (2021). Was built with react in order to be easily imported into other users' chrome browsers.`,
  };
  
  let lastClickedFolder = null;
  
  function drawConnectingLine(folder, contentTitle) {
    const lineSvg = document.getElementById("line-svg");
    lineSvg.innerHTML = ""; // Clear any existing lines
  
    const folderRect = folder.getBoundingClientRect();
    const contentTitleRect = contentTitle.getBoundingClientRect();
  
    const startX = folderRect.x + folderRect.width;
    const startY = folderRect.y + (folderRect.height / 2);
    const endX = contentTitleRect.x;
    const endY = contentTitleRect.y + (contentTitleRect.height / 2);
  
    const midX = startX + (endX - startX) / 2;
    const midY = startY + (endY - startY) / 2;
  
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    // polyline.setAttribute("class", "lineStatic");
    polyline.setAttribute("points", `${startX},${startY} ${midX},${startY} ${midX},${endY} ${endX},${endY}`);
    polyline.style.fill = "none";
    polyline.style.stroke = "#00ff00";
    polyline.style.strokeWidth = "2";
    polyline.style.opacity = "0";
    polyline.style.transition = "opacity 0.5s ease-in-out";
    polyline.style.zIndex = "1";
    polyline.setAttribute("filter", "url(#glow)");
  
  
    lineSvg.appendChild(polyline);
  
    // Make the line visible
    polyline.style.opacity = "1";
  
  }
  
  
  document.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", () => {
      const subject = folder.dataset.subject;
      const contentTitle = document.querySelector(".content-title");
      const contentText = document.querySelector(".content");
  
      // Set the subject-title and content
      contentTitle.textContent = subject;
      contentText.textContent = contentMap[subject];
  
      if (subject === "Description") {
        const img = document.createElement("img");
        img.src = "images/selfiejoboriginal.png";
        img.alt = "Selfie image";
        img.style.display = "block";
        img.style.margin = "20px auto";
        img.style.height = "auto";
      
        if (window.innerWidth >= 1024) {
          img.style.maxWidth = "25%";
        } else {
          img.style.maxWidth = "50%";
        }
      
        contentText.appendChild(img);
      
        window.addEventListener("resize", () => {
          if (window.innerWidth >= 1024) {
            img.style.maxWidth = "25%";
          } else {
            img.style.maxWidth = "50%";
          }
        });
      } else {
        // Remove any existing images if the subject is not "Description"
        const existingImage = contentText.querySelector("img");
        if (existingImage) {
          contentText.removeChild(existingImage);
        }
      }
  
      lastClickedFolder = folder;
  
      drawConnectingLine(folder, document.querySelector(".content-title"));
  
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
  
  window.addEventListener("resize", () => {
    if (lastClickedFolder) {
      drawConnectingLine(lastClickedFolder, document.querySelector(".content-title"));
    }
  });
  
  window.addEventListener("scroll", () => {
    if (lastClickedFolder) {
      drawConnectingLine(lastClickedFolder, document.querySelector(".content-title"));
    }
  });
  
  