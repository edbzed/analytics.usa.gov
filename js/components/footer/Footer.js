import { useEffect, React } from "react";
import PropTypes from "prop-types";

/**
 * Creates the site footer.
 *
 * This component is using USWDS grid classes.
 *
 * @param {String} siteDomain the domain for the site.
 */
function Footer({ siteDomain }) {
  useEffect(() => {
    require("../../lib/touchpoints");
  });

  return (
    <>
      <footer>
        <section id="explanation" class="grid-row usa-prose">
          <div class="tablet:grid-col-8 padding-2">
            <h3>About this Site</h3>
            <p>
              These data provide a window into how people are interacting with
              the government online. The data come from a unified Google
              Analytics account for U.S. federal government agencies known as
              the{" "}
              <a href="https://digital.gov/guides/dap/" class="external-link">
                Digital Analytics Program
              </a>
              . This program helps government agencies understand how people
              find, access, and use government services online. The program does
              not track individuals and anonymizes the IP addresses of visitors.
            </p>

            <p>
              Not every government website is represented in these data.
              Currently, the Digital Analytics Program collects web traffic from
              more than 500 federal government second level domains, across
              approximately 7000 total hostnames, including every executive
              branch cabinet department. We continue to pursue and add more
              sites frequently; to add your site,{" "}
              <a href="mailto:dap@gsa.gov" class="external-link">
                email the Digital Analytics Program
              </a>
              .
            </p>
            <button id="contact-btn" class="usa-button--big">
              <svg
                class="usa-icon"
                aria-hidden="false"
                focusable="false"
                role="img"
              >
                <use xlinkHref="/assets/uswds/img/sprite.svg#forum"></use>
              </svg>
              Feedback
            </button>
          </div>
          <div class="tablet:grid-col-4 padding-2 margin-0">
            <h3>Download the data</h3>
            <p>
              You can <a href={`${siteDomain}/data`}>download the data here.</a>{" "}
              Available in JSON and CSV format.
            </p>
            <p>
              Additionally, you can access data via{" "}
              <a
                href="https://open.gsa.gov/api/dap/"
                target="_blank"
                rel="noopener"
              >
                API
              </a>{" "}
              (currently in Beta).
            </p>
            <h3>A note on sampling</h3>
            <p>
              Due to varying GA4 sampling thresholds, high data cardinality, and
              the volume of DAP data across its sub-properties, real-time and
              historical data reports are subject to sampling. These data are
              intended to represent high-level trends only and provide general
              insights into online visitor behavior.
            </p>
          </div>
        </section>
        <div class="github-section">
          <div class="github-section__body grid-container-desktop">
            <div class="grid-row">
              <div class="tablet:grid-col-6">
                <p>
                  Have a question or problem?{" "}
                  <a href="mailto:dap@gsa.gov">Get in touch</a>.
                </p>
                <a
                  class="usa-button usa-button-secondary-inverse margin-y-2"
                  href="https://github.com/18F/analytics.usa.gov/issues"
                >
                  <img
                    src={`${siteDomain}/images/github-logo-white.svg`}
                    class="github-icon"
                    alt="Github Icon"
                  />{" "}
                  Suggest a feature or report an issue
                </a>
              </div>
              <div class="tablet:grid-col-6">
                <p class="">
                  <a href="https://github.com/18F/analytics.usa.gov">
                    <img
                      src={`${siteDomain}/images/github-logo.svg`}
                      class="github-icon"
                      alt="Github Icon"
                    />{" "}
                    View application code on GitHub
                  </a>
                </p>
                <p class="margin-y-2">
                  <a href="https://github.com/18F/analytics-reporter">
                    <img
                      src={`${siteDomain}/images/github-logo.svg`}
                      class="github-icon"
                      alt="Github Icon"
                    />{" "}
                    View code for the data on GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="usa-identifier">
        <section
          class="usa-identifier__section usa-identifier__section--masthead"
          aria-label="Agency identifier,"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <a href="" class="usa-identifier__logo">
                <img
                  class="usa-identifier__logo-img"
                  src={`${siteDomain}/images/gsa-logo.svg`}
                  alt="GSA logo"
                  role="img"
                />
              </a>
            </div>
            <section
              class="usa-identifier__identity"
              aria-label="Agency description,"
            >
              <p class="usa-identifier__identity-domain">analytics.usa.gov</p>
              <p class="usa-identifier__identity-disclaimer">
                Analytics.usa.gov is a product of GSA's{" "}
                <a href="https://digital.gov/guides/dap/">
                  Digital Analytics Program
                </a>
                .
              </p>
            </section>
          </div>
        </section>
        <nav
          class="usa-identifier__section usa-identifier__section--required-links"
          aria-label="Important links,"
        >
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/about-us"
                  class="usa-identifier__required-link usa-link"
                >
                  About GSA
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/website-information/accessibility-statement"
                  class="usa-identifier__required-link usa-link"
                >
                  Accessibility statement
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
                  class="usa-identifier__required-link usa-link"
                >
                  FOIA requests
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/reference/civil-rights-programs/the-no-fear-act"
                  class="usa-identifier__required-link usa-link"
                >
                  No FEAR Act data
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsaig.gov/"
                  class="usa-identifier__required-link usa-link"
                >
                  Office of the Inspector General
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/reference/reports/budget-performance"
                  class="usa-identifier__required-link usa-link"
                >
                  Performance reports
                </a>
              </li>
              <li class="usa-identifier__required-links-item">
                <a
                  href="https://www.gsa.gov/website-information/website-policies"
                  class="usa-identifier__required-link usa-link"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section
          class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services,"
        >
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">
              Looking for U.S. government information and services?
            </div>{" "}
            <a href="https://www.usa.gov/" class="usa-link">
              Visit USA.gov
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

Footer.propTypes = {
  siteDomain: PropTypes.string.isRequired,
};

export default Footer;