function smartReply(message) {
      const msg = message.toLowerCase();
      // main content
      
      if (msg.trim().toLowerCase() === "over") 
      return `đây là over hen link của bạn: <a href="https://hentaiz.bot/hentai/overflow-khong-che-1" target="_blank">Link</a><br>
      <img src="/Enigmatic/png/overflow.webp" width="220" style="margin-top: 6px; border-radius: 10px;">`;
      
      if (msg.trim().toLowerCase() === "xem over") 
      return `đây là over video của bạn ( hiện tại video over chưa có )<br>
      <button onclick="window.location.href='/Enigmatic/live/over.html'">Xem over</button>`;
      
      if (msg.trim().toLowerCase() === "beaoden") 
      return `đây là link của bạn:<br>
      <button onclick="window.location.href='/Enigmatic/live/beaoden.html'">Xem</button>`;
      
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
