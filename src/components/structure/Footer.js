import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">

        {/* 1. Network heading */}
        <p style={{ marginBottom: "16px" }}>
          <strong style={{ fontSize: "1.4rem", letterSpacing: "0.08em", color: "#111111" }}>
            NETWORK
          </strong>
        </p>

        {/* 2. Tagline */}
        <p style={{ fontSize: "0.95rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto 32px auto" }}>
          Open to opportunities where I can contribute through IT infrastructure and systems engineering, automation, scripting and reliable operational support.
        </p>

        {/* 3. Icons row — label stacked below each icon */}
        <section
          id="contact"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "48px"
          }}
        >
          {/* Gmail */}
          <a
            href="mailto:aypase@gmail.com"
            aria-label="Send email"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            {/* Gmail icon — official multicolour */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ width: 34, height: 34 }}>
              <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/>
              <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/>
              <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
              <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/>
              <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/>
            </svg>
            <span className="has-text-white" style={{ fontSize: "0.82rem" }}>aypase@gmail.com</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/apaseay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: 34, height: 34, fill: "#ffffff" }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755
                -1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
                3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93
                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
                1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22
                0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            <span className="has-text-white" style={{ fontSize: "0.82rem" }}>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ayobamipase/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: 34, height: 34, fill: "#ffffff" }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
                0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
                7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782
                13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774
                23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="has-text-white" style={{ fontSize: "0.82rem" }}>LinkedIn</span>
          </a>
        </section>

      </div>
    </footer>
  );
}

export default Footer;
