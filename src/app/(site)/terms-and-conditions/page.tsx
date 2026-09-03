import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Terms and Conditions | Viking Marketing";
const DESC =
  "Read Viking Marketing Online LLC's Master Service Agreement covering services, payment terms, data privacy, arbitration, and your rights as a client.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESC,
  path: "/terms-and-conditions",
});

const EMAIL = "team@vikingmarketing.ai";

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      updated="Viking Marketing Online, LLC. Master Service Agreement Last Updated: January 28th, 2025"
    >
      <h2>1. Overview</h2>
      <p>
        This Master Service Agreement (&quot;Agreement&quot;) is entered into by Viking Marketing
        Online, LLC. (&quot;Service Provider&quot;) and the client (&quot;Client&quot;). This
        Agreement governs the provision of software as a service (SaaS) and related services by the
        Service Provider to the Client.
      </p>

      <h2>2. Services</h2>
      <p>
        The Service Provider will provide comprehensive SaaS services, including chatbot creation,
        management, and other related digital marketing services (&quot;the Program&quot;), as
        detailed in separate Statements of Work (SOWs) or Terms of Service Agreements (TOS).
      </p>

      <h2>3. Data Sharing and Privacy</h2>
      <p>
        The Client agrees to provide necessary data for the Program. The Service Provider commits
        to using this data solely for service provision and may share it with third-party services
        essential for delivering the Program. The Service Provider will take reasonable steps to
        protect the Client&apos;s data from unauthorized access, use, or disclosure
      </p>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or
        promotional purposes. All other categories exclude text messaging originator opt-in data
        and consent; this information will not be shared with any third parties.
      </p>
      <p>
        All customer data provided by the Client remains the sole property of the Client. Viking
        Marketing Online, LLC. will process such data exclusively for the purposes of delivering
        the contracted Services. Data will not be used for any other purpose, sold, or disclosed to
        unrelated third parties.
      </p>
      <p>
        Upon termination of this Agreement or at the Client&apos;s written request, Viking
        Marketing Online, LLC. will securely delete or return all Client-provided data within a
        commercially reasonable period, except where retention is required by law.
      </p>
      <p>
        OPT IN CONSENT: By submitting your phone number, you are authorizing us to send you text
        messages and notifications. Message and data rates apply. Reply STOP to unsubscribe to a
        message sent from us.
      </p>
      <p>
        By providing your email address you agree that Viking Marketing Online, LLC. may send you
        email notifications, promotional material and other marketing materials. We will not share
        your email address, and will only use it for internal purposes. By providing your phone
        number, you agree that Viking Marketing Online, LLC. may call you at this number. If this
        is a cell phone number, you agree that we may contact you, including pre-recorded messages
        and/or text messages, even if your cell phone provider may charge you for calls according
        to your current plan. You can view our Privacy Policy for more information regarding user
        data on both our website and in our software.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Viking Marketing Online, LLC. will only engage trusted third-party providers who are
        contractually bound to protect Client data and use it solely for providing their services.
        While the Client remains responsible for reviewing such providers&apos; terms, Viking
        Marketing Online, LLC. takes reasonable steps to ensure that its third-party providers meet
        industry-standard security and privacy practices.
      </p>

      <h2>5. Client Responsibilities</h2>
      <p>
        The Client is responsible for providing accurate and complete data and for the use of the
        Program by their employees and agents. Delays in providing required information or
        approvals may affect the delivery schedule.
      </p>

      <h2>6. Intellectual Property and Content Usage</h2>
      <p>
        All Work Products created for the Client during the Program remain the intellectual
        property of Viking Marketing Online, LLC. The Client is granted a perpetual, non-exclusive,
        royalty-free license to use such Work Products for its internal business purposes.
      </p>
      <p>
        Upon termination, the Client must cease using the Program itself but may retain rights to
        Work Products already delivered, unless otherwise specified in the applicable SOW or TOS.
      </p>

      <h2>7. Payment Terms</h2>
      <p>
        Fees are due and payable in advance on a monthly basis unless otherwise specified in
        individual SOWs or TOS.
      </p>
      <p>
        Our service carries a monthly invoice that is auto-debited from your card each month. There
        are additional charges to be aware of. As our system is built with phone numbers to allow
        for SMS and Voice, you will receive a monthly allotment of minutes and credits each month
        included in your pricing.
      </p>
      <p>Any minutes that go over that allotted amount will be charged as follows to the card on file:</p>
      <p>Making Calls: $0.028 per minute (e.g. $10 = approx. 355 outbound calls)</p>
      <p>Receiving Calls: $0.017 per minute (e.g. $10 = approx. 590 inbound calls)</p>
      <p>Text: $0.0158 per segment (160 characters per segment) (e.g. $10 = approx. 635 segments)</p>
      <p>Email: $0.00675 per email (e.g. $10 = approx. 5,000 emails)</p>
      <p>Each Phone Number added to the account: $2.30 per month per number</p>
      <p>
        NOTE: Rates are subject to change based on charges from provider. Notifications will be
        conducted through our Terms of Service Agreement. It is the sole responsibility of the
        client to read and understand the terms of service.
      </p>

      <h2>8. Termination</h2>
      <p>
        This Agreement can be terminated by either party with written notice. Specific procedures
        and effects of termination are outlined in individual SOWs or TOS.
      </p>
      <p>
        Upon termination, Client data will be handled in accordance with Section 3 (Data Return and
        Deletion). Client acknowledges that certain aggregated, anonymized, or transactional
        records may be retained by Viking Marketing Online, LLC. for legal, compliance, or business
        continuity purposes.
      </p>

      <h2>9. Dispute Resolution</h2>
      <p>
        Disputes arising under this Agreement shall be resolved through binding arbitration in
        Chandler, Arizona, according to the rules of the American Arbitration Association.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        The Service Provider&apos;s liability is limited to the fees paid by the Client. Neither
        party is liable for indirect or consequential damages.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        The Client agrees to indemnify the Service Provider against claims arising from their use
        of the Program.
      </p>

      <h2>12. Governing Law, Binding Arbitration, and Class Action Waiver</h2>
      <h2>a. Applicable Law</h2>
      <p>
        The laws of the State of Arizona will govern these Terms of Service and any disputes under
        them, without giving effect to any principles of conflicts of laws.
      </p>
      <h2>b. Binding Arbitration</h2>
      <p>
        Please read the following paragraphs carefully because they require you to agree to resolve
        all disputes between us through binding individual arbitration.
      </p>
      <p>
        Any controversy or claim arising out of or relating to these Terms shall be exclusively
        settled by arbitration administered by the American Arbitration Association in accordance
        with the Commercial Arbitration Rules, then in effect. This arbitration provision is
        governed by the Federal Arbitration Act. The arbitration proceedings shall be held in
        Chandler, Arizona. Any arbitration award may be entered in a court of competent
        jurisdiction.
      </p>
      <h2>c. Class Action Waiver</h2>
      <p>
        All claims and disputes within the scope of this arbitration agreement must be arbitrated
        or litigated on an individual basis and not on a class basis. Claims of more than one
        customer or user cannot be arbitrated or litigated jointly or consolidated with those of
        any other customer or user.
      </p>

      <h2>13. General Provisions</h2>
      <p>
        Severability: If any part of this Agreement is found invalid, the remainder continues in
        effect.
      </p>
      <p>
        Entire Agreement: This document and any SOWs or TOS constitute the entire agreement between
        the Parties.
      </p>
      <p>
        The Parties acknowledge that while Viking Marketing Online, LLC. is not directly subject to
        the EU General Data Protection Regulation (GDPR), it follows data protection principles
        modeled after GDPR and the California Consumer Privacy Act (CCPA), including data
        minimization, purpose limitation, security, and respect for individual rights where
        applicable.
      </p>

      <h2>14. Waiver</h2>
      <p>
        No waiver of any provision of this Agreement will be effective unless in writing and signed
        by both parties.
      </p>

      <h2>15. Notices</h2>
      <p>
        All notices to a party shall be in writing and shall be made via email. Notices to the
        Service Provider must be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Notices to the
        Customer must be sent to the email address provided by the Customer when creating their
        account. Notices are effective on receipt.
      </p>
      <p>
        Viking Marketing Online, LLC. may contact the Customer regarding these Terms using any
        information the Customer provides, or by any other means if the Customer does not provide
        contact information. If the Customer no longer wishes to receive communications from the
        Service Provider, the Customer can click on the &quot;unsubscribe link&quot; provided in
        such communications or contact the Service Provider at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        When the Customer creates an account, the Customer must designate a primary email address
        that will be used for receiving electronic communication related to these Terms. The
        Service Provider will never send the Customer an email requesting confidential information
        such as account numbers, usernames, or passwords, and the Customer should never respond to
        any email requesting such information. If the Customer receives such an email purportedly
        from the Service Provider, the Customer should not respond to the email and should notify
        the Service Provider at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
      <p>
        For all other feedback, comments, requests for technical support, and other communications
        relating to the SaaS Service or the Terms, please contact the Service Provider at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or by mail at:
      </p>
      <p>
        Viking Marketing Online, LLC. ATTN: Legal Department 4240 S Arizona Ave #1063 Chandler, AZ
        85248
      </p>

      <h2>16. Headings</h2>
      <p>
        The headings in this Agreement are for convenience only and will not affect its
        interpretation.
      </p>

      <h2>17. Counterparts</h2>
      <p>
        This Agreement may be executed in one or more counterparts, each of which will be deemed an
        original, but all of which together will constitute one and the same instrument.
      </p>

      <h2>18. User Responsibility</h2>
      <p>
        The Customer is responsible for the use of the SaaS Service by their employees and agents.
        The Customer is also responsible for ensuring that the data that they provide to the
        Service Provider is accurate and complete.
      </p>

      <h2>19. Service Modifications and Interruptions</h2>
      <p>
        The Service Provider may modify or interrupt the SaaS Service from time to time for any
        reason, including but not limited to maintenance, upgrades, or changes to the Third-Party
        Services. The Service Provider will make reasonable efforts to notify the Customer of any
        modifications or interruptions to the SaaS Service.
      </p>

      <h2>20. Changes to Liability</h2>
      <p>
        The Service Provider will not be liable for any damages or losses arising from the use of
        the SaaS Service, including but not limited to lost profits, lost data, or damage to
        property. The Service Provider&apos;s liability will be limited to the amount of fees that
        the Customer has paid for the SaaS Service.
      </p>

      <h2>21. Changes to Terms and Conditions</h2>
      <p>
        The Service Provider may change the terms and conditions of this Agreement at any time. The
        Customer will be notified of any changes to the terms and conditions by email. If the
        Customer does not agree to the changes, they may terminate the Agreement by providing
        written notice to the Service Provider within thirty (30) days of the date of the changes.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By clicking on the &quot;Submit Agreement to Confirm Membership&quot; button, you agree to
        the terms and conditions of this Agreement. You have read and understood the terms and
        conditions of this Agreement. You understand that the Service Provider will use Third-Party
        Services to provide the SaaS Service. You agree to review the privacy policies of the
        Third-Party Services before using them.
      </p>

      <h2>Questions, Complaints and Contacts</h2>
      <p>If you have any questions regarding these Terms and Conditions, please contact us at:</p>
      <p>
        Legal matters: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>
        Support: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>Or by US mail at:</p>
    </LegalPage>
  );
}
