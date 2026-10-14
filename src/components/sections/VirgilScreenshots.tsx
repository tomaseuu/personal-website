import Image from "next/image";
import styles from "./VirgilScreenshots.module.css";

const SCREENSHOTS = {
  home: { file: "01-mobile-home.png", title: "Home dashboard", alt: "Virgil home screen with recent check-in progress and a saved genetics result.", width: 364, height: 786 },
  timeline: { file: "02-mobile-timeline.png", title: "Timeline", alt: "Dated check-ins in Virgil's timeline with symptoms, medication selections, and a saved result.", width: 364, height: 786 },
  checkin: { file: "03-mobile-checkin.png", title: "Wellness & symptoms", alt: "Virgil check-in form with a wellness scale and symptom selections.", width: 364, height: 786 },
  medications: { file: "04-mobile-checkin-medications.png", title: "Medication tracking", alt: "The medication portion of Virgil's daily check-in form.", width: 364, height: 786 },
  notes: { file: "05-mobile-checkin-stress-notes.png", title: "Stress & notes", alt: "Stress scale, optional notes, and the submit button in Virgil's check-in form.", width: 364, height: 786 },
  documents: { file: "07-mobile-documents.png", title: "Document management", alt: "Virgil document management with an uploaded sample-named genetics file and an option to mark it active.", width: 888, height: 1920 },
  insights: { file: "08-mobile-insights.png", title: "Insights chat", alt: "Virgil Insights screen with a question and a response based on saved context.", width: 888, height: 1920 },
  response: { file: "09-mobile-ai-response.png", title: "Response & follow-up questions", alt: "A recorded Virgil AI response with suggested questions and a doctor-follow-up label.", width: 888, height: 1920 },
  upload: { file: "12-web-upload.png", title: "Web upload form", alt: "The earlier Virgil web interface collecting patient context for a genetics-file upload.", width: 1343, height: 947 },
  webMedications: { file: "13-web-upload-medications.png", title: "Medication history", alt: "Medication history and genetics-file selection in the earlier Virgil web workflow.", width: 1343, height: 947 },
  consent: { file: "14-web-consent.png", title: "Consent dialog", alt: "Virgil's web upload showing its educational-use agreement before submission.", width: 1343, height: 947 },
  results: { file: "15-web-results.png", title: "Web results", alt: "The earlier Virgil web interface displaying genetics-processing results.", width: 1343, height: 947 },
  treatment: { file: "16-web-results-treatment.png", title: "Treatment information", alt: "Next steps and treatment-information sections in a recorded Virgil web result.", width: 1343, height: 947 },
} as const;

type Screen = keyof typeof SCREENSHOTS;

export default function VirgilScreenshots({ screens, caption, kind = "mobile", hero = false }: { screens: Screen[]; caption: string; kind?: "mobile" | "web"; hero?: boolean }) {
  return (
    <figure className={styles.gallery + (hero ? " " + styles.hero : "")}>
      <div className={styles.frame}>
        <div className={styles.grid} data-kind={kind} data-count={screens.length} tabIndex={kind === "mobile" && screens.length > 1 ? 0 : undefined} role={kind === "mobile" && screens.length > 1 ? "group" : undefined} aria-label={kind === "mobile" && screens.length > 1 ? "Virgil mobile screenshots; scroll horizontally on smaller screens" : undefined}>
          {screens.map((key, index) => {
            const screen = SCREENSHOTS[key];
            return (
              <div className={styles.item} key={key}>
                <Image src={"/projects/virgil/" + screen.file} alt={screen.alt} width={screen.width} height={screen.height} sizes={kind === "web" ? "(max-width: 760px) calc(100vw - 80px), 720px" : "(max-width: 760px) 280px, 300px"} priority={hero && index === 0} />
                <span>{screen.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
