import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="ac-gf-footer-legal">
      <div className="ac-gf-footer-legal-copyright">
        Copyright © 2023 Apple Inc. Tous droits réservés.
      </div>
      <ul className="ac-gf-footer-legal-links" role="list">
        <li className="ac-gf-footer-legal-links-item" role="listitem">
          <a
            className="ac-gf-footer-legal-link"
            href="/mentions-legales"
            data-analytics-title="legal"
          >
            Mentions légales
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;