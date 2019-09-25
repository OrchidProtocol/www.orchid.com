export function downloadWhitepaper() {
  let whitepaper = "";

  if (window && "location" in window && "protocol" in window.location &&
      "pathname" in window.location && "host" in window.location) {
    whitepaper = window.location.protocol + "//" + window.location.host +
                 "/assets/whitepaper/whitepaper.pdf";
  } else {
    whitepaper = "https://github.com/orchidsource/whitepaper";
  }

  window.location.href = whitepaper;
}

export function downloadOrchid() {
    window.location.href = "/download";
    /* window.location.href = "https://orchid.com/download"; */
}
