
(function () {
    const chatbotURL = "https://eman98856.github.io/EMAN-BTEC.AI./";

    const style = document.createElement("style");

    style.textContent = `
        #school-chatbot-button {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 68px;
            height: 68px;
            border: 3px solid white;
            border-radius: 50%;
            background: linear-gradient(135deg, #073b4c, #176579);
            color: white;
            font-size: 30px;
            cursor: pointer;
            z-index: 99999;
            box-shadow: 0 5px 18px rgba(0,0,0,.25);
            transition: .3s;
        }

        #school-chatbot-button:hover {
            transform: scale(1.08);
        }

        #school-chatbot-window {
            position: fixed;
            bottom: 108px;
            right: 25px;
            width: 360px;
            height: 520px;
            max-width: calc(100vw - 30px);
            max-height: calc(100vh - 140px);
            background: white;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,.25);
            z-index: 99998;
            display: none;
        }

        #school-chatbot-window.open {
            display: block;
        }

        #school-chatbot-window iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        @media (max-width: 480px) {
            #school-chatbot-window {
                right: 15px;
                bottom: 95px;
                width: calc(100vw - 30px);
                height: 70vh;
            }

            #school-chatbot-button {
                right: 18px;
                bottom: 18px;
            }
        }
    `;

    document.head.appendChild(style);

    const button = document.createElement("button");
    button.id = "school-chatbot-button";
    button.type = "button";
    button.innerHTML = "🤖";
    button.title = "افتح المساعد الذكي";
    button.setAttribute("aria-label", "فتح المساعد الذكي");

    const windowBox = document.createElement("div");
    windowBox.id = "school-chatbot-window";

    const frame = document.createElement("iframe");
    frame.src = chatbotURL;
    frame.title = "EMAN BTEC AI Assistant";
    frame.loading = "lazy";

    windowBox.appendChild(frame);

    document.body.appendChild(windowBox);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        windowBox.classList.toggle("open");

        button.innerHTML =
            windowBox.classList.contains("open") ? "×" : "🤖";
    });
})();
