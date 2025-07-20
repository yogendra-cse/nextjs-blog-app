"use client";
import Styles from "../Styles/terms.module.css"

const TermsAndConditions = () => {
  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.heading}>Terms & Conditions</h1>
      <p className={Styles.updated}>Last updated: July 19, 2025</p>

      <section className={Styles.section}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms and Conditions. If you disagree with any part, please do not use the service.
        </p>
      </section>

      <section className={Styles.section}>
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials for personal, non-commercial use only. This is not a transfer of title.
        </p>
      </section>

      <section className={Styles.section}>
        <h2>3. User Conduct</h2>
        <p>
          You agree not to misuse the services or help anyone else do so. This includes prohibitions on violating intellectual property, spreading malware, or accessing accounts without authorization.
        </p>
      </section>

      <section className={Styles.section}>
        <h2>4. Modifications</h2>
        <p>
          We may revise these Terms & Conditions at any time without notice. By using this site, you are agreeing to be bound by the current version.
        </p>
      </section>

      <section className={Styles.section}>
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about these Terms, feel free to contact us at support@example.com.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
