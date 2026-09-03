import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { JsonLd } from "@/components/ui";
import { pageMetadata, jsonLdGraph, webPageLd } from "@/lib/seo";

const TITLE = "Privacy Policy | Viking Marketing";
const DESC =
  "Read Viking Marketing Online LLC's privacy policy covering data collection, use, storage and your rights under GDPR and CCPA.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESC,
  path: "/privacy-policy",
});

const EMAIL = "team@vikingmarketing.ai";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        json={jsonLdGraph([
          webPageLd({ path: "/privacy-policy", name: TITLE, description: DESC }),
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        updated="Viking Marketing Online, LLC. Last Updated: January 28th, 2025"
      >
        <h2>1. Introduction</h2>
        <p>
          This page (&quot;Privacy Policy&quot; or &quot;Policy&quot;) provides our policies and
          procedures for collecting, using and disclosing your information and outlines the
          security measures we&apos;ve put in place to protect the information that you store using
          Viking Marketing Online, LLC.&apos;s (&quot;Viking Marketing&quot;) services, including the
          services made available through this website, and any other software or services offered
          by Viking Marketing in connection with such services (the &quot;Services&quot;). By using
          these Services, you consent to the collection, transfer, processing, storage, disclosure
          and other uses of your information described in this Privacy Policy.
        </p>

        <h2>2. What information does Viking Marketing collect and store?</h2>
        <h3>Personal Information</h3>
        <p>
          When expressing an interest in obtaining additional information about the Services or
          registering to use the Services, Viking Marketing requires you to provide your personal
          contact information, such as your name, company name, address, phone number, and email
          address (these are referred to below as your &quot;Personal Contact Information&quot;).
          When purchasing the Services, Viking Marketing also requires you to provide financial and
          billing information, such as billing name and address, credit card number, and the number
          of employees within the organization that will be using the Services (&quot;Billing
          Information&quot;).
        </p>
        <h3>Data, Diagnostic and Login Information</h3>
        <p>
          Using Viking Marketing&apos;s Services, you will be able to create, upload, store and
          share information such as company description, email ID, logo, photos, custom emails,
          user email IDs, etc. (this is collectively referred to below as &quot;Data&quot;). This
          information will be stored and maintained on Viking Marketing&apos;s website. If you run
          into technical errors in the course of using the Services, Viking Marketing may request
          your permission to obtain a crash report along with certain logging information from your
          system documenting the error (&quot;Diagnostic Information&quot;). Such information may
          contain information regarding your Operating System version, hardware, browser version
          (and .NET version information in case of Windows systems), and your email address, if
          provided. Additionally, certain login information is maintained in a cookie stored
          locally on your computer (i.e. not on a server) in order to streamline the login process
          (&quot;Login Information&quot;).
        </p>
        <h3>Mobile Phone Data</h3>
        <p>
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. All other categories exclude text messaging originator opt-in data
          and consent; this information will not be shared with any third parties.
        </p>
        <p>
          OPT IN CONSENT: By submitting your phone number, you are authorizing us to send you text
          messages and notifications. Message and data rates apply. Reply STOP to unsubscribe to a
          message sent from us.
        </p>
        <h3>Analytics Information</h3>
        <p>
          As you navigate Viking Marketing&apos;s website and use our Services, Viking Marketing
          may also collect information through the use of frequently used information-gathering
          tools, such as cookies and Web beacons (&quot;Website Navigational Information&quot;).
          Website Navigational Information includes standard information from your web browser
          (such as browser type and browser language), your Internet Protocol (&quot;IP&quot;)
          address, and the actions you take on Viking Marketing&apos;s website (such as web pages
          viewed and links clicked). Collectively, this information is referred to as
          &quot;Analytics Information.&quot;
        </p>
        <p>
          Third party vendors, including Google, use cookies to serve ads based on a user&apos;s
          prior visits to your website or other websites. Google&apos;s use of advertising cookies
          enables it and its partners to serve ads to your users based on their visit to your sites
          and/or other sites on the Internet. Users may opt out of personalized advertising by
          visiting Ads Settings or by visiting www.aboutads.info.
        </p>
        <h3>Geo-Location Information</h3>
        <p>
          Viking Marketing does not collect any information regarding your real-time geo-location
          while using the Services; however, it may do so at some point in the future. We will
          request your permission before collecting such information.
        </p>

        <h2>3. What does Viking Marketing do with the information it collects?</h2>
        <p>Viking Marketing uses the information it collects in the following ways:</p>
        <p>
          Personal Contact Information — We use this information primarily to administer our
          Services to you and provide you with updates and product announcements. Per the Privacy
          and Conditions, we may use some of your information for marketing purposes, as explained
          below.
        </p>
        <p>
          Billing Information — Viking Marketing does not store any Billing Information on its
          servers. Instead, we use a payment provider, Stripe (www.stripe.com), to store and
          process all payment related transactions. Find information regarding Stripe&apos;s
          privacy policy here.
        </p>
        <p>
          Data, Diagnostic Information and Login Information — We use this information solely for
          the purpose of administering and improving our Services to you.
        </p>
        <p>
          Analytics Information — Viking Marketing may use your Analytics Information in
          conjunction with an analytics service such as Google Analytics to monitor and analyze
          use of the Services, for the Services&apos; technical administration, to increase the
          Services&apos; functionality and user-friendliness, and to verify users have the
          authorization required for the Services to process their requests.
        </p>
        <p>
          Client Campaign Data — When Clients provide Viking Marketing with customer databases,
          contact lists, or similar information for use in a campaign, that data remains the sole
          property of the Client. Viking Marketing will process and use such data exclusively for
          the agreed campaign purpose and will not access, use, sell, or disclose this data for any
          other reason. Each campaign dataset is handled independently and will never be cross-used
          across different Clients.
        </p>

        <h2>4. Sharing and disclosure of private information</h2>
        <h3>Third Party Applications and Your Use</h3>
        <p>
          Viking Marketing provides users with the ability to link to their Data on third party
          sites such as Facebook, Twitter and LinkedIn. Such linking is at the complete discretion
          of users. Because of this, Viking Marketing cannot be held responsible or liable for the
          linking of user&apos;s Data to such third party sites, nor for how these third party
          sites use such links.
        </p>
        <h3>Marketing and Publicity</h3>
        <p>
          Per our Privacy and Conditions, you agree to permit Viking Marketing to identify you as a
          customer and to use your name and/or logo in Viking Marketing&apos;s website and
          marketing materials.
        </p>
        <h3>Sale of Personal Information</h3>
        <p>
          Viking Marketing does not sell, rent, or trade your private information to any third
          parties in any way.
        </p>
        <h3>Service Providers and Business Partners</h3>
        <p>
          Viking Marketing may use certain trusted third party companies and individuals to help us
          provide, analyze, and improve the Services (including, but not limited to, data storage,
          maintenance services, database management, web analytics, payment processing, and
          improvement of the Services&apos; features). These third parties may have access to your
          information strictly for the purposes of performing these tasks on our behalf and under
          obligations similar to those in this Privacy Policy.
        </p>
        <h3>Non-Private or Non-Personal Information</h3>
        <p>
          We may disclose your non-private, aggregated, or otherwise non-personal information, such
          as usage statistics of our Services, in our discretion.
        </p>

        <h2>5. Our use and disclosure of information</h2>
        <p>
          Viking Marketing Online, LLC. will not disclose any personally identifiable information
          about any individual except as set forth in this Privacy Policy. This applies to
          information about our customers and information our customers provide to us about their
          customers. We are not limited in any way in our use of non-personal information that does
          not permit direct association with any specific individual or non-identifiable aggregate
          information about our users (such as the number of customers who use our services, the
          geographic distribution of our users, the amount of information located and/or removed,
          etc.).
        </p>
        <p>
          We collect, store and process your personally identifiable information on servers located
          in the United States. Due to the unpredictable nature of Internet routing, your
          information may pass through other countries while in transit to our servers. We use the
          information we collect about you in order to:
        </p>
        <ul>
          <li>Develop and deliver our services</li>
          <li>Process your transactions</li>
          <li>Provide customer service and manage your account</li>
          <li>Improve our products, services and marketing</li>
        </ul>
        <p>
          Access to personal data is strictly limited to authorized employees, contractors, and
          service providers who require it to deliver the contracted services. All such parties are
          subject to strict confidentiality and data protection obligations.
        </p>
        <p>
          Viking Marketing Online, LLC. will not sell or rent any of your personally identifiable
          information to third parties. Viking Marketing will not share any of your personally
          identifiable information with third parties except in the limited circumstances described
          below.
        </p>
        <p>
          We share information with service providers under contract who help with our business
          operations such as payment and order processing, fraud investigation, bill collection,
          and information management and analytics. If content generation is included in your
          services, we may share information with service providers under contract to create, edit
          and/or publish such content. These third parties are obligated to protect your
          information and are contractually prohibited from using your personally identifiable
          information for any other purpose. They are never permitted to share your information
          with any third parties. They are authorized to use your personal information only as
          necessary to provide these services to Viking Marketing.
        </p>
        <p>
          We disclose information that we, in good faith, believe is appropriate to cooperate in
          investigations of fraud or other illegal activity, to conduct investigations of
          violations of our Privacy of Use and/or to protect our right, protect your safety and the
          safety of others.
        </p>
        <p>
          We disclose information in response to a subpoena, warrant, court order, levy,
          attachment, order of a court-appointed receiver or other comparable legal process,
          including subpoenas from private parties in a civil action. If the subpoena seeks
          information about an identified subscriber or limited group of subscribers, we will make
          reasonable business efforts to contact the subscriber(s) before providing information to
          the party that requests it. We cannot guarantee that we will be able to do so in all
          cases, whether due to a time limit, court order, inability to effectively contact a
          subscriber, or other circumstances.
        </p>
        <p>
          When a user signs up for a co-branded version of our service through links to
          VikingMarketing.ai from our co-branded partner&apos;s website, Viking Marketing will
          share with the co-branded partner that user&apos;s name, email address and physical
          address in order to provide enhanced integration between Viking Marketing&apos;s services
          and the services of our co-branded partner. If you do not want your information shared
          with Viking Marketing&apos;s co-branded partner, sign up for Viking Marketing directly
          through VikingMarketing.ai and other sub-domains and not through a link from our
          partner&apos;s website.
        </p>
        <p>
          We disclose information to your agent or legal representative (such as the holder of a
          power of attorney that you grant, or a guardian appointed for you).
        </p>
        <p>
          We share information with companies that provide public relations and marketing services
          for us. Such information will only be shared by us to customize, measure and improve our
          products, services and advertising. It will not be shared with third parties for their
          marketing purposes. These third parties are contractually obligated to protect your
          information and are prohibited from using your personally identifiable information for
          any other purpose.
        </p>
        <p>
          As with any other business, it is possible that in the future, Viking Marketing could
          merge with or be acquired by another company. If such an acquisition occurs, the
          successor company would have access to the information maintained by Viking Marketing,
          including customer account information, but would continue to be bound by this Privacy
          Policy until it is amended.
        </p>
        <p>
          We share your information with our parent, subsidiaries and joint ventures to help
          coordinate the services we provide to you, enforce our terms and conditions, and promote
          trust and safety.
        </p>
        <p>
          The implementation of our Services, by its very nature, may require using your personally
          identifiable information to locate other information about you. Such use may include, but
          not be limited to, using your information to search the publicly accessible Internet
          sites as well as searching private information databases and sites.
        </p>
        <p>
          The implementation of our Services, by its very nature, may require revealing your
          personally identifiable information in order to effect removal of Internet content about
          you. For example, we may have to disclose your name to a website in order to notify them
          to remove Internet content about you. This occurs with your express permission for a
          specific, given purpose.
        </p>

        <h2>6. Data retention</h2>
        <p>
          We will retain your information for as long as your account is active or as needed to
          provide you the Services. If you wish to cancel your account or request that we no longer
          use your information to provide you the Services, you may delete your account (this will
          be done by Viking Marketing&apos;s customer care team). If you delete your account, your
          Data will no longer be stored in our servers. While we try to delete your Data from our
          servers as quickly as possible, please be aware that there may be a delay from the time
          you delete your account to the time that your Data is removed, and that some of your Data
          may continue to exist for a period in backup copies.
        </p>
        <p>
          At the conclusion of a campaign or upon written request by the Client, Viking Marketing
          will securely delete or return all customer data provided for that campaign, unless
          retention is required by applicable law or for legitimate business purposes such as fraud
          prevention or dispute resolution. Deleted data will be removed from active systems and,
          within a commercially reasonable period, from backup systems.
        </p>

        <h2>7. Changes to this privacy policy</h2>
        <p>
          If we decide to make material changes to our Privacy Policy, we will notify you by email
          through the primary email address specified in your account and/or post those changes to
          this Privacy Policy on the website homepage prior to the changes taking effect. You are
          responsible for ensuring we have an up-to-date active and deliverable email address for
          you.
        </p>
        <p>
          You are also responsible for regularly reviewing the Privacy Policy and related
          documents. We reserve the right to modify this Privacy Policy at any time. No amendment
          to or modification of this Policy will be binding unless in writing and signed by a duly
          authorized representative of Viking Marketing Online, LLC., or posted to the site by a
          duly authorized representative of Viking Marketing Online, LLC.
        </p>
        <p>
          In the event that Viking Marketing Online, LLC. goes through a business transition, such
          as a merger, an acquisition by another company, or a sale of a portion of its assets,
          users&apos; personally identifiable information will, in most instances, be part of the
          assets transferred. Users will be notified via prominent notice on the site for 30 days
          after a change of ownership or control of their personally identifiable information. If,
          as a result of the business transition, a user&apos;s personally identifiable information
          will be used in a manner different from that stated at the time of collection, users will
          be given a choice consistent with our notification of changes section.
        </p>

        <h2>8. GDPR — Your rights if you are in the EU or UK</h2>
        <p>
          If you reside in the European Union (&quot;EU&quot;), United Kingdom, Lichtenstein,
          Norway, Iceland or Switzerland, you may have additional rights with respect to your
          personally identifiable information (otherwise known as Personal Data). These rights may
          include rights under the EU&apos;s General Data Protection Regulation (&quot;GDPR&quot;),
          if you are a resident of the EU, United Kingdom, Lichtenstein, Norway or Iceland.
          &quot;Personal Data&quot; is any data that relates to an identified or identifiable
          natural person. Examples of Personal Data include identifiers such as name, location
          data, and unique online identifiers.
        </p>
        <p>
          In addition to the principles, practices and policies set forth above in this Privacy
          Policy, Viking Marketing Online, LLC. has adopted the following principles to govern its
          collection and processing of Personal Data:
        </p>
        <ul>
          <li>Personal Data shall be processed lawfully, fairly, and in a transparent manner.</li>
          <li>
            The Personal Data collected will only be those specifically required to fulfill Viking
            Marketing&apos;s obligations to deliver the Viking Marketing service.
          </li>
          <li>
            Personal Data shall only be retained for as long as it is required to fulfill
            contractual requirements.
          </li>
          <li>
            Personal Data shall be adequate, relevant, and limited to what is necessary in relation
            to the purposes for which they are collected and/or processed. Personal Data shall be
            accurate and, where necessary, kept up to date.
          </li>
          <li>
            The data subject has the right to request from Viking Marketing access to and
            rectification or erasure of their Personal Data, to object to or request restriction of
            processing concerning the data, or to the right to data portability. In each case such
            a request must be put in writing to Viking Marketing.
          </li>
        </ul>

        <h2>9. California Consumer Privacy Act (CCPA)</h2>
        <p>
          Effective on January 1, 2020, the California Consumer Privacy Act (CCPA) allows
          California residents to obtain certain information collected by the business with whom
          they have established business relationships.
        </p>
        <p>
          If you are a California resident, you may exercise certain rights to access, restrict, or
          delete your personal information by submitting a request through this link.
        </p>

        <h2>10. Community</h2>
        <p>
          Our Services may include publicly accessible community services such as blogs, forums,
          and wikis. Please be aware that any information you provide in these areas may be read,
          collected, and used by others who access them. Your posts on these communities may remain
          even after you cancel your account.
        </p>

        <h2>11. Questions, complaints and contacts</h2>
        <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
        <p>
          General enquiries: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p>
          Support and privacy requests: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p>Or by US mail at:</p>
        <p>
          Viking Marketing Online, LLC. Attn: Privacy Officer 4240 S Arizona Ave #1063 Chandler, AZ
          85248
        </p>
      </LegalPage>
    </>
  );
}
