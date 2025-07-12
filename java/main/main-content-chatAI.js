function smartReply(message) {const msg = message.toLowerCase();
// main content
      if (msg.trim().toLowerCase() === "over") 
      return `đây là over hen link của bạn: <a href="https://hentaiz.bot/hentai/overflow-khong-che-1" target="_blank">Link</a><br>
      <img src="/img/overflow.webp" width="220" style="margin-top: 6px; border-radius: 10px;">`;
      
      if (msg.trim().toLowerCase() === "xem over") 
      return `đây là over video của bạn ( hiện tại video over chưa có )<br>
      <button onclick="window.location.href='over.html'">Xem over</button>`;
      
      if (msg.trim().toLowerCase() === "beaoden") 
      return `đây là link của bạn:<br>
      <button onclick="window.location.href='beaoden.html'">Xem</button>`;
      
      if (msg.trim().toLowerCase() === "/cmds") {
      return `
       <div style="margin-top: 10px;">
       <strong>Commands:</strong><br>
       <input id="cmd-input" type="text" placeholder="cmds echo..." style="width: 90%; padding: 5px; background: #111; color: #0f0; border: none; font-family: monospace;">
       <button onclick="runCommand()"onmouseover=" this.style.filter='brightness(1.4)'; this.style.transform='scale(1.05)';" onmouseout="this.style.filter=''; this.style.transform='';" style="margin-top: 6px; padding: 6px 12px; background: #222; color: #0f0; border: none; border-radius: 6px; transition: 0.2s;">$Run</button>
       <pre id="cmd-output" style="
        background: #000;
        color: #0f0;
        padding: 10px;
        margin-top: 10px;
        font-family: monospace;
        display: none;
        width: 100%;
        white-space: pre-wrap;
        word-wrap: break-word;
        border-radius: 8px;
        overflow-x: auto;
        box-sizing: border-box;">
       </pre>
     </div>`;}
      
      // nhắn để xem các cmds
      if (msg.trim().toLowerCase() === "hd") 
      return `list:<br>
      <br>- nhắn List để xem dark link
      <br>- /cmds để setup
      <br>- ...
      `;
      if (msg.trim().toLowerCase() === "list") 
      return `list:
      <br>- beaoden
      <br>- over
      `;
      
      return "xin lỗi, bot đang trong quá trình phát triển vui lòng thử lại lần sau, để xem cmd hiện có hãy nhắn <code>| HD |</code>";
    }


document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // chặn reload
    sendMessage();      // gọi hàm đã có sẵn
  }
});

let currentUserName = "Bạn";
let currentBotName = "Enigmatic AI";
const chatBox = document.getElementById("chat-box");

// GỬI TIN NHẮN
function sendMessage() {
  const chatBox = document.getElementById("chat-box");
  const input = document.getElementById("user-input");
  if (!chatBox || !input) {
    console.error("chatBox hoặc input không tồn tại!");
    return;
  }

  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<div class="user-msg"><strong>${currentUserName}:</strong> ${message}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Hiệu ứng bot loading
  const loadingId = "loading-msg";
  const loadingHTML = `
  <div class="bot-msg" id="${loadingId}">
    <strong>${currentBotName}:</strong>
    <span class="dot-loading-inline">
      <svg width="20" height="20" viewBox="0 0 120 30" fill="#fff">
        <circle cx="15" cy="15" r="15">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle cx="60" cy="15" r="15">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.4s"/>
        </circle>
      </svg>
    </span>
  </div>`;
  chatBox.innerHTML += loadingHTML;
  chatBox.scrollTop = chatBox.scrollHeight;

  // Delay random 1–3s
  const delay = Math.floor(Math.random() * 3000) + 1000;

  setTimeout(() => {
    const reply = smartReply(message);

    // Xoá loading
    const loadingEl = document.getElementById(loadingId);
    if (loadingEl) loadingEl.remove();

    // Trả lời bot
    chatBox.innerHTML += `<div class="bot-msg"><strong>${currentBotName}:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, delay);
}

// CHẠY LỆNH CMD
function runCommand() {
  const cmdInput = document.getElementById("cmd-input");
  const output = document.getElementById("cmd-output");
  const command = cmdInput.value.trim();
  if (!command) return;

  if (command.toLowerCase() === "echo help") {
    output.style.display = "block";
    output.innerHTML = `📜 Lệnh khả dụng:<br>
      - <code>echo rename -m TÊN</code> – đổi tên bạn<br>
      - <code>echo rename -b TÊN</code> – đổi tên bot<br>
      - <code>echo help</code> – hướng dẫn`;
    return;
  }

  if (command.toLowerCase().startsWith("echo rename")) {
    let changed = false;
    const matchUser = command.match(/-m\s+("[^"]+"|\S+)/);
    const matchBot = command.match(/-b\s+("[^"]+"|\S+)/);

    if (matchUser) {
      currentUserName = matchUser[1].replace(/"/g, "");
      showToast(`✓ Đã đổi tên bạn thành: ${currentUserName}`);
      changed = true;
    }

    if (matchBot) {
      currentBotName = matchBot[1].replace(/"/g, "");
      showToast(`✓ Đã đổi tên bot thành: ${currentBotName}`);
      changed = true;
    }

    if (!changed) {
      showToast(`<img src='/img/erro.svg' style='width:16px; vertical-align: middle; margin-right: 6px;'> Thiếu tham số -m hoặc -b để đổi tên.`);
    }

    updateNames();
    output.style.display = "block";
    output.textContent = `$ Đã thực hiện lệnh: ${command}`;
  } else {
    output.style.display = "block";
    output.innerHTML = `<img src='/img/error.svg' style='width:16px; vertical-align: middle; margin-right: 4px;'> error '<code>${command}</code>' không được hỗ trợ. Dùng <code>echo help</code> để xem thêm.`;
  }
}

// CẬP NHẬT TÊN TRÊN GIAO DIỆN
function updateNames() {
  document.querySelectorAll(".user-msg strong").forEach(el => {
    el.textContent = `${currentUserName}:`;
  });
  document.querySelectorAll(".bot-msg strong").forEach(el => {
    el.textContent = `${currentBotName}:`;
  });
}

// TOAST THÔNG BÁO
function showToast(msg) {
  const toastContainer = document.getElementById("toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = msg;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.zIndex = "9999";
  document.body.appendChild(container);
  return container;
}