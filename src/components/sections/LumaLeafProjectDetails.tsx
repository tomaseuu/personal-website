import styles from "./ProjectDetails.module.css";

export default function LumaLeafProjectDetails() {
  return (
    <details className={styles.details}>
      <summary>Read project details</summary>
      <div className={styles.body}>
        <section aria-labelledby="luma-leaf-context-title">
          <h3 id="luma-leaf-context-title">why I made it</h3>
          <div className={styles.panel}>
            <p>Luma Leaf is a passion project that brings together two things I enjoy: making memories and building software. Inspired by Korean-style photobooths, I wanted a free browser experience that felt simple, playful, and personal—a way to turn a hangout into something you can keep.</p>
          </div>
        </section>

        <section aria-labelledby="luma-leaf-experience-title">
          <h3 id="luma-leaf-experience-title">the experience</h3>
          <div className={styles.panel}>
            <p>Take four pictures with a countdown and filter, or upload four photos you already have. Then make the strip your own: rearrange the pictures, adjust their colors, choose a frame, and add a sticker theme. Download it as a PNG or create a QR link to share it with a friend.</p>
          </div>
        </section>

        <section aria-labelledby="luma-leaf-role-title">
          <h3 id="luma-leaf-role-title">my contribution</h3>
          <div className={styles.panel}>
            <p>I worked on the software: the camera flow, countdowns, filters, photostrip editor, downloads, and QR sharing. I also improved camera framing, mobile layouts, and dark mode as the project grew. <strong>Haixin Huang created the graphics</strong> that give Luma Leaf its personality.</p>
          </div>
        </section>

        <section aria-labelledby="luma-leaf-build-title">
          <h3 id="luma-leaf-build-title">how I built it</h3>
          <div className={styles.panel}>
            <p><strong>Next.js, React, and TypeScript</strong> power the pages and editing controls; CSS Modules handle the styling. The browser’s camera API captures the photos, and Canvas combines the pictures, decorations, and frame into one downloadable image.</p>
            <p>That keeps normal editing and PNG downloads on your device. QR sharing uses a Next.js server endpoint to temporarily hold the finished strip. Those links depend on server memory, so a restart can make them unavailable before their ten-minute expiry.</p>
          </div>
        </section>

        <section aria-labelledby="luma-leaf-result-title">
          <h3 id="luma-leaf-result-title">the result</h3>
          <div className={styles.panel}>
            <p>The project brings capture, editing, and export into one photo experience, with a temporary sharing option. It gives people a way to make a personalized keepsake without needing an account.</p>
          </div>
        </section>

        <section aria-labelledby="luma-leaf-learning-title">
          <h3 id="luma-leaf-learning-title">what I learned</h3>
          <div className={styles.panel}>
            <p>I learned more about React state, interface design, and image rendering while carrying a personal idea toward deployment. Camera framing, customization, and sharing went through several iterations. The details mattered: keeping photos consistent, carrying edits into the exported strip, and handling sharing limits.</p>
          </div>
        </section>
      </div>
    </details>
  );
}
