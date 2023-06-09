const contentMap = {
  Description: `My name is Brandon Yip, and I am a passionate back-end software developer. I graduated from Rutgers University, New Brunswick in 2023, where I honed my skills and developed a strong foundation in computer programming. Throughout my academic journey and professional experience, I've developed a keen interest in:

  - Golang
  - Python
  - JavaScript
  - Solidity

  As a dedicated and meticulous developer, I strive to create efficient and well-structured code. My expertise in these languages enables me to effectively tackle complex challenges and contribute to innovative projects in the software development field.
  `,
  Hobbies: `In my free time, I enjoy exploring various APIs from different companies and integrating them into my personal projects. This not only helps me expand my knowledge and skillset but also allows me to experiment with creative solutions for a wide range of applications.

  Another area that fascinates me is blockchain technology, particularly its potential to revolutionize various industries in the future. I am an avid learner and creator of smart contracts on the Ethereum blockchain. By diving into this cutting-edge technology, I strive to stay at the forefront of innovation and contribute to the development of groundbreaking solutions in the blockchain space.`,
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

  polyline.style.opacity = "1";

}


document.querySelectorAll(".folder").forEach((folder) => {
  folder.addEventListener("click", () => {
    const subject = folder.dataset.subject;
    const contentTitle = document.querySelector(".content-title");
    const contentText = document.querySelector(".content");

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
      const existingImage = contentText.querySelector("img");
      if (existingImage) {
        contentText.removeChild(existingImage);
      }
    }

    lastClickedFolder = folder;

    drawConnectingLine(folder, document.querySelector(".content-title"));

    contentTitle.classList.remove("computerStatic");
    contentText.classList.remove("computerStatic");


    void contentTitle.offsetWidth;
    void contentText.offsetWidth;


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

