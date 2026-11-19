"use client";

import { useState, type FormEvent } from "react";

const initialStatus = {
  type: "",
  message: "",
};

export default function VolunteerApplicationForm() {
  const [status, setStatus] = useState(initialStatus);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus({
      type: "preview",
      message:
        "Your form passed the browser checks. This is only a frontend preview: your details have not been submitted or saved. SEENRO Core integration is not active yet.",
    });
  }

  return (
    <div className="form-card">
      <div className="form-heading">
        <div>
          <span className="form-step">VOLUNTEER INTEREST FORM</span>
          <h3>Tell us about yourself</h3>
        </div>
        <span className="required-note">* Required fields</span>
      </div>

      <div className="preview-notice">
        <span aria-hidden="true">ⓘ</span>
        <p>
          Preview mode. This form is not connected to the application
          database yet. Do not enter sensitive personal information.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="field">
            <span>Full name <b>*</b></span>
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />
          </label>

          <label className="field">
            <span>Email address <b>*</b></span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label className="field">
            <span>Phone number</span>
            <input
              type="tel"
              name="phone"
              placeholder="+232 ..."
              autoComplete="tel"
              maxLength={30}
            />
          </label>

          <label className="field">
            <span>Location <b>*</b></span>
            <input
              type="text"
              name="location"
              placeholder="City and country"
              autoComplete="country-name"
              maxLength={100}
              required
            />
          </label>
        </div>

        <label className="field">
          <span>Area of interest <b>*</b></span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>
              Select an area
            </option>
            <option value="engineering">Software & Engineering</option>
            <option value="product-design">Product & Design</option>
            <option value="community">Community & Communications</option>
            <option value="operations">Business & Operations</option>
            <option value="other">Other / Open to discussion</option>
          </select>
        </label>

        <label className="field">
          <span>Skills and abilities <b>*</b></span>
          <textarea
            name="skills"
            placeholder="What skills, tools, or abilities could you contribute?"
            rows={3}
            minLength={10}
            maxLength={1500}
            required
          />
        </label>

        <label className="field">
          <span>Experience</span>
          <textarea
            name="experience"
            placeholder="Tell us about relevant work, projects, studies, or personal experience. You can also describe what you are currently learning."
            rows={3}
            maxLength={2000}
          />
        </label>

        <label className="field">
          <span>Why would you like to volunteer with SEENRO? <b>*</b></span>
          <textarea
            name="motivation"
            placeholder="What interests you about contributing to SEENRO Technology?"
            rows={4}
            minLength={20}
            maxLength={2000}
            required
          />
        </label>

        <label className="field">
          <span>Portfolio, LinkedIn, GitHub, or other link</span>
          <input
            type="url"
            name="portfolio"
            placeholder="https://"
            maxLength={500}
          />
        </label>

        <label className="field">
          <span>Availability</span>
          <select name="availability" defaultValue="">
            <option value="">Select your availability</option>
            <option value="few-hours">A few hours per week</option>
            <option value="part-time">Part-time</option>
            <option value="flexible">Flexible</option>
            <option value="discuss">Let&apos;s discuss</option>
          </select>
        </label>

        <label className="consent-field">
          <input type="checkbox" name="consent" required />
          <span>
            I confirm that the information I have entered is accurate and
            understand that this is currently a frontend preview, not an
            actual application submission. <b>*</b>
          </span>
        </label>

        <button className="button button-primary submit-button" type="submit">
          Review application preview <span aria-hidden="true">→</span>
        </button>

        {status.message && (
          <div
            className="form-status"
            role="status"
            aria-live="polite"
            data-type={status.type}
          >
            <strong>Preview check complete</strong>
            <p>{status.message}</p>
          </div>
        )}

        <p className="form-footnote">
          Your information stays in this browser form only. Nothing is sent
          to SEENRO at this stage.
        </p>
      </form>
    </div>
  );
}
