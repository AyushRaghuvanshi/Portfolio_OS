// AyushOS content — Experience / Career.
// Edit the text between the backticks below. Same markdown format as before.
// Avoid typing a backtick ` or the sequence ${ in the text.
window.DC_CONTENT = window.DC_CONTENT || {};
window.DC_CONTENT.experience = String.raw`
# Experience / Career — newest first.
#
# Start each role with "## Job Title · Company".
# Then optional fields:
#   date: Jan 2024 – Present · New York, US · Remote
#   tag:  current        <- only the current role; gives the glowing dot + "current" pill
# Then one "- " bullet per line. Wrap **important bits** in double-asterisks to bold them.
# A bullet may wrap onto following lines.

## Founding Software Developer · Benefi Global
date: Jan 2024 – Present · New York, US · Remote
tag: current
- Developed a SwiftUI application using MVVM architecture and protocol-oriented programming.
- Implemented BM25 search algorithm, reducing response time by 87% (from 1.5s to 200ms).
- Created a GitHub Actions workflow for automated backend deployment using Terraform,
optimizing AWS infrastructure management.
- Migrated backend from monolithic to microservices architecture.
- Built scalable async processing pipelines with Kafka and AWS SQS, supporting cross-service
communication, queue-based background workloads, failure retries, and reliable processing across the
microservices ecosystem.
- Engineered the payout infrastructure using Stripe Connect, enabling funds to move from platform-held
balances to eligible nonprofit organization accounts, while maintaining payout ledgers, transaction
reconciliation, idempotency, and withdrawal status tracking.
- Engineered the charity portal onboarding and verification system, combining organization domain
validation, OTP authentication, Plaid Identity Verification, watchlist screening webhooks, and
multi-organization workspace access for verified representatives.
- Played a critical role across a 20-service engineering ecosystem, making major contributions to 12
services and fully leading 7 services end-to-end, including architecture, development, deployment,
production fixes, and cross-service coordination.

## Software Engineer Intern · Finplex
date: Sep 2023 – Nov 2023 · Bengaluru, IN · Remote
- Collaborated closely with the ONDC team to seamlessly integrate and deploy ONDC REST APIs, driving a 40% increase in transaction processing speed.
- Leveraged Google Maps API geolocation to capture user locations and enable real-time order tracking, resulting in a 30% increase in live orders.
- Implemented CLEAN Architecture with Domain-Driven Development and Bloc State Management to increase scalability by 50%.
- Enhanced app scalability and language adaptability through industry-level techniques like Dependency Injection and Localization.
- Technologies: **Flutter**, **ONDC**, Google Maps, Bloc, CLEAN Architecture

## Software Developer Intern · Fibo
date: Jun – Jul 2023 · Bangalore, IN · Remote
- Developed a step tracker using native Android step tracking functionality, optimizing speed through native code and Flutter method channels.
- Managed end-to-end app deployment: internal testing, beta releases, and production rollout.
- Technologies: **Flutter**, **Kotlin**, Android Native, Method Channels

## Software Developer Intern · Pickit Live
date: Feb – Jun 2023 · New Delhi, IN · Remote
- Implemented robust state management in the app using **GetX** for scalable and maintainable code.
- Contributed to UI and feature development across app modules.
- Technologies: **Flutter**, **GetX**
`;
