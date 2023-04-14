
const textToType = 'console.log("Hello World!")\nvar userInfo = {\n\tname: "Brandon Yip",\n\toccupation: "Software Developer"\n}';
const typingTextElement = document.querySelector('.typing-text');
let typingIndex = 0;
const delay = 100;

const timer = ms => new Promise(res => setTimeout(res, ms))

var test = {
  name: "Brandon",
  occupation: "Dev"
}
console.log()

function createColoredSpan(text, className) {
    const span = document.createElement('span');
    span.textContent = text;
    span.className = className;
    typingTextElement.appendChild(span);
}

// function typeText() {
//   if (typingIndex < textToType.length) {
//       typingTextElement.innerHTML += textToType.charAt(typingIndex);
//       typingIndex++;
//       setTimeout(typeText, 100);
//   }
// }

async function typeText() {
    if (typingIndex < textToType.length) {
        const currentChar = textToType.charAt(typingIndex);

        if (currentChar === '(' || currentChar === ')' || currentChar === '{' || currentChar === '}') {
            createColoredSpan(currentChar, 'paren');
        } else if (currentChar === '"' || (currentChar === 'n' && textToType[typingIndex - 1] === '\\')) {
            const quoteOrTab = currentChar === '"' ? 'quotes' : 'tab';
            createColoredSpan(currentChar, quoteOrTab);
            if (currentChar === '"') {
                typingIndex++;
                let quoteText = '';

                while (typingIndex < textToType.length && textToType[typingIndex] !== '"') {
                    quoteText += textToType[typingIndex];
                    typingIndex++;
                }

                function stringtype (letter) {
                  return new Promise ((resolve, reject) => {
                    createColoredSpan(letter, 'string');
                    setTimeout(() => {
                      resolve();
                    }, delay);
                  });
                }
    
                for (i = 0; i < quoteText.length; i++) {
                  await stringtype(quoteText[i]);
                }

                // createColoredSpan(quoteText, 'string');
                createColoredSpan('"', 'quotes');
            }
        } else if (currentChar === '\n') {
            const lineBreak = document.createElement('br');
            typingTextElement.appendChild(lineBreak);
        } else if (currentChar === '\t') {
            typingTextElement.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0'));
        } else if (textToType.startsWith("var", typingIndex)) {
            let tempvar = "var";
            function vartype (letter) {
              return new Promise ((resolve, reject) => {
                createColoredSpan(letter, 'var-keyword');
                setTimeout(() => {
                  resolve();
                }, delay);
              });
            }

            for (i = 0; i < tempvar.length; i++) {
              await vartype(tempvar[i]);
            }

            // createColoredSpan("var", 'var-keyword');
            typingIndex += 2;
        } else if (textToType.startsWith("userInfo", typingIndex)) {
            let tempvar = "userInfo";
            function usertype (letter) {
              return new Promise ((resolve, reject) => {
                createColoredSpan(letter, 'user-info');
                setTimeout(() => {
                  resolve();
                }, delay);
              });
            }
            
            for (i = 0; i < tempvar.length; i++) {
              await usertype(tempvar[i]);
            }

            typingIndex += 7;
        } else if (textToType.startsWith("name", typingIndex)) {
            let tempvar = "name";
            function nametype (letter) {
              return new Promise ((resolve, reject) => {
                createColoredSpan(letter, 'user-info');
                setTimeout(() => {
                  resolve();
                }, delay);
              });
            }

            for (i = 0; i < tempvar.length; i++) {
              await nametype(tempvar[i]);
            }

            typingIndex += 3;
        } else if (textToType.startsWith("occupation", typingIndex)) {
          let  tempvar = "occupation";
          function occupationtype (letter) {
            return new Promise ((resolve, reject) => {
              createColoredSpan(letter, 'user-info');
              setTimeout(() => {
                resolve();
              }, delay);
            });
          }

          for (i = 0; i < tempvar.length; i++) {
            await occupationtype(tempvar[i]);
          }

          // createColoredSpan("occupation", 'user-info');
          typingIndex += 9;
        } else if (textToType.startsWith("log", typingIndex)) {
          let tempvar = "log";
          function logtype (letter) {
            return new Promise ((resolve, reject) => {
              createColoredSpan(letter, 'log');
              setTimeout(() => {
                resolve();
              }, delay);
            });
          }

          for (i = 0; i < tempvar.length; i++) {
            await logtype(tempvar[i]);
          }

          // createColoredSpan("log", "log");
          typingIndex += 2;
        } else if (textToType.startsWith("console", typingIndex)) {
          let tempvar = "console";
          function consoletype (letter) {
            return new Promise ((resolve, reject) => {
              createColoredSpan(letter, 'user-info');
              setTimeout(() => {
                resolve();
              }, delay);
            });
          }

          for (i = 0; i < tempvar.length; i++) {
            await consoletype(tempvar[i]);
          }
          // createColoredSpan("console", "user-info");
          typingIndex += 6;
        } else if (currentChar === '.' || currentChar === ':' || currentChar === ',' || currentChar === '=') {
            createColoredSpan(currentChar, 'white-char');
        } else {
            typingTextElement.appendChild(document.createTextNode(currentChar));
        }

        typingIndex++;
        setTimeout(typeText, 200);
    }
}


window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});
