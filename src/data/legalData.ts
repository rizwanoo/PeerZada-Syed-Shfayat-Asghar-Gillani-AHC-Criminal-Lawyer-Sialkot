import { PracticeArea, LegalArticle } from '../types';

export const ADVOCATE_INFO = {
  fullName: 'PeerZada SYED SHFAYAT ASGHAR GILLANI AHC',
  honorific: 'PeerZada',
  shortName: 'Syed Shfayat Asghar Gillani',
  designation: 'Advocate High Court (AHC)',
  position: "Chairman — Pakistan Lawyer's Company",
  profession: 'Criminal Lawyer / Advocate',
  fatherName: 'Syed Asghar Hussain Shah Gelani',
  ancestralHouse: 'Al Syed House, Pasrur, Sialkot District, Punjab',
  barCouncilEnrollment: 'Punjab Bar Council Enrolled Advocate',
  city: 'Sialkot',
  province: 'Punjab',
  country: 'Pakistan',
  phone: '0302-6609073',
  phoneIntl: '+923026609073',
  whatsappUrl: 'https://wa.me/923026609073',
  social: {
    facebook: 'https://www.facebook.com/ha.prince.14/',
    youtube: 'https://www.youtube.com/@PakistanLawyersCompany',
    instagramPrimary: 'https://www.instagram.com/asgheradv/',
    instagramSecondary: 'https://www.instagram.com/syedshfayatasghar/',
    districtBarSialkot: 'https://www.facebook.com/sialkot.dba',
  },
  communityAudience: '8.5K+ Followers · Digital Legal Community',
  heroPhoto: '/hero_lawyer.jpg',
  heroPhotoFallback: '/hero_lawyer.jpg',
  courtRobePhoto: '/about_advocate.jpg',
  gallery: [
    {
      src: '/about_advocate.jpg',
      title: 'PeerZada Syed Shfayat Asghar Gillani AHC',
      subtitle: 'Official High Court Robes — Chairman Pakistan Lawyer’s Company',
      category: 'Advocate Robes',
    },
    {
      src: '/hero_lawyer.jpg',
      title: 'Advocate Chambers & Law Library',
      subtitle: 'Official Portrait — Chairman Pakistan Lawyer’s Company Sialkot',
      category: 'Advocate Profile',
    },
    {
      src: '/images/sialkot_district_courts_1793446383546.jpg',
      title: 'District & Sessions Courts, Sialkot',
      subtitle: 'Historic judicial complex where Advocate Gillani conducts trial proceedings',
      category: 'Courtroom Presence',
    },
    {
      src: '/images/chambers_law_library_1793446383491.jpg',
      title: 'Advocate Legal Chambers & Law Library',
      subtitle: 'PLD, PCLJ, and Supreme Court precedent research archives',
      category: 'Legal Research',
    },
    {
      src: '/images/criminal_trial_brief_1793446385336.jpg',
      title: 'Criminal Trial Case Files & Briefs',
      subtitle: 'Preparation of PPC defense, cross-examination notes, and bail petitions',
      category: 'Trial Preparation',
    },
    {
      src: '/images/courtroom_bench_view_1793446384812.jpg',
      title: 'Courtroom Judicial Bench & Bar Barricade',
      subtitle: 'Trial advocacy representation before learned Sessions & High Court benches',
      category: 'Judicial Forum',
    },
  ],
  storyMilestones: [
    {
      year: 'Heritage & Roots',
      title: 'Syed Family Heritage in Sialkot & Pasrur',
      desc: 'Hailing from Al Syed House, Pasrur, Sialkot District. Son of Syed Asghar Hussain Shah Gelani, bringing familial dignity and steadfast commitment to public service.',
    },
    {
      year: 'Bar Enrolment',
      title: 'Punjab Bar Council & High Court Standing',
      desc: 'Formally enrolled with the Punjab Bar Council and admitted as Advocate High Court (AHC), granting jurisdiction before the subordinate and superior courts of Punjab.',
    },
    {
      year: 'Leadership',
      title: 'Chairman — Pakistan Lawyer’s Company (PLC)',
      desc: 'Established Pakistan Lawyer’s Company as a premier legal organization dedicated to ethical criminal advocacy, public rights, and institutional legal assistance.',
    },
    {
      year: 'Community Reach',
      title: 'Digital Legal Outreach & YouTube Channel',
      desc: 'Pioneered digital legal literacy with 8.5K+ followers on Facebook and YouTube channel broadcasts under Pakistan Lawyer’s Company, educating citizens on their statutory rights.',
    },
  ],
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'criminal-defence',
    number: '01',
    title: 'Criminal Defence',
    tagline: 'Strategic defense representation in trials under the Pakistan Penal Code (PPC).',
    description:
      'Comprehensive legal defense for individuals accused of offenses under criminal law. Every defense strategy is constructed through strict evidentiary analysis, legal precedents, and procedural scrutiny.',
    context:
      'In criminal jurisprudence, the prosecution bears the burden of proving every element of an alleged offense beyond reasonable doubt. Our practice focuses on dissecting the prosecution’s case, questioning inconsistencies, and asserting fundamental constitutional rights.',
    stages: [
      'Pre-trial factual examination & case theory development',
      'Scrutiny of prosecution witness statements under Section 161 CrPC',
      'Rigorous cross-examination during trial proceedings',
      'Closing legal arguments based on superior court judgments',
    ],
    keyProvisions: ['Pakistan Penal Code (PPC)', 'Code of Criminal Procedure (CrPC)', 'Qanun-e-Shahadat Order 1984'],
    clientConsiderations: [
      'Early legal counsel avoids unintentional admissions',
      'Document preservation and independent corroboration are critical',
      'No outcome is ever guaranteed; thorough preparation governs trial success',
    ],
  },
  {
    id: 'bail-matters',
    number: '02',
    title: 'Bail Matters & Personal Liberty',
    tagline: 'Pre-arrest, post-arrest, interim, and protective bail petitions across judicial forums.',
    description:
      'Swift, procedural representation to secure and safeguard personal freedom through statutory bail petitions before Magistrates, Courts of Session, and the High Court.',
    context:
      'The grant of bail is an essential mechanism preventing unwarranted detention before guilt is established. Under Section 498 CrPC (pre-arrest bail), petitioners must demonstrate mala fide intent or ulterior motives behind the registration of cases.',
    stages: [
      'Immediate protective / transit bail applications',
      'Pre-arrest bail petitions (anticipatory relief against imminent arrest)',
      'Post-arrest bail petitions under Section 497 CrPC',
      'Bail confirmation arguments and high court appellate revisions',
    ],
    keyProvisions: ['Section 497 CrPC (Post-Arrest)', 'Section 498 CrPC (Pre-Arrest / Anticipatory)', 'Section 498-A CrPC'],
    clientConsiderations: [
      'Time is of the essence when arrest is anticipated',
      'Demonstrating potential mala fide or lack of reasonable grounds',
      'Strict adherence to court conditions and surety execution',
    ],
  },
  {
    id: 'fir-proceedings',
    number: '03',
    title: 'FIR & Criminal Proceedings',
    tagline: 'Quashment of frivolous FIRs, Section 22-A/22-B petitions, and investigation oversight.',
    description:
      'Legal remedies concerning the registration, challenge, and scrutiny of First Information Reports (FIR) and police investigations.',
    context:
      'A criminal proceeding often begins with an FIR under Section 154 CrPC. When an FIR is registered without lawful justification, or when police authorities unlawfully refuse to record genuine grievances, statutory remedies must be invoked.',
    stages: [
      'Petitions under Section 22-A & 22-B CrPC before Ex-Officio Justice of Peace',
      'Quashment of FIR petitions under Section 561-A CrPC before the High Court',
      'Monitoring police investigation procedures and Section 161 statements',
      'Challenging improper police challan submissions under Section 173 CrPC',
    ],
    keyProvisions: ['Section 154 CrPC', 'Section 173 CrPC (Police Challan)', 'Section 22-A & 22-B CrPC', 'Section 561-A CrPC (Quashment)'],
    clientConsiderations: [
      'Obtaining certified copies of FIR immediately is essential',
      'Establishing civil dispute masquerading as criminal offense',
      'Avoiding unauthorized informal police negotiations without counsel',
    ],
  },
  {
    id: 'criminal-litigation',
    number: '04',
    title: 'Criminal Litigation & Evidence Analysis',
    tagline: 'Meticulous trial advocacy, forensic review, and cross-examination of prosecution witnesses.',
    description:
      'Active litigation conducted within the criminal courts. Focused on the precision of evidentiary law, medical jurisprudence, and forensic records.',
    context:
      'A trial is decided upon the crucible of cross-examination and legal admissibility. Cross-examination is the primary legal tool to expose manufactured narratives, memory lapses, and contradictions with previous police statements.',
    stages: [
      'Framing of formal charges and legal objections',
      'Substantive cross-examination of complainant and prosecution witnesses',
      'Examination of medical, ballistic, and forensic expert testimony',
      'Accused statement under Section 342 CrPC and defense witness presentation',
    ],
    keyProvisions: ['Qanun-e-Shahadat Order 1984', 'Section 342 CrPC (Statement of Accused)', 'Section 265-D / 242 CrPC (Charge Framing)'],
    clientConsiderations: [
      'Contradictions between ocular and medical evidence can be decisive',
      'Every question during cross-examination requires deliberate strategic intent',
      'Full disclosure between client and advocate ensures uncompromised defense',
    ],
  },
  {
    id: 'court-representation',
    number: '05',
    title: 'Court Representation & Advocacy',
    tagline: 'Appearance before Judicial Magistrates, Sessions Judges, and the High Court of Punjab.',
    description:
      'Professional courtroom advocacy grounded in decorum, procedural law, and deep respect for the administration of justice in Pakistan.',
    context:
      'Appearing before criminal benches requires comprehensive mastery of both statutory law and reported case law of the Supreme Court and High Courts. We represent clients across judicial hierarchies.',
    stages: [
      'Judicial remand hearings and police custody objections',
      'Summary and regular trials before Judicial Magistrates',
      'Sessions Trials before Additional Sessions and Sessions Judges',
      'Criminal revisions, appeals, and constitutional petitions',
    ],
    keyProvisions: ['Judicial Remand Sections 167 CrPC', 'Appellate Provisions Sections 410 & 417 CrPC', 'Revisionary Jurisdiction Sections 435 & 439 CrPC'],
    clientConsiderations: [
      'Courts prioritize orderly documentation and punctuality',
      'Procedural compliance protects against adverse default orders',
      'Professional representation projects confidence and institutional credibility',
    ],
  },
  {
    id: 'legal-consultation',
    number: '06',
    title: 'Confidential Criminal Advisory',
    tagline: 'Objective case assessment, risk analysis, and strategic roadmap prior to court proceedings.',
    description:
      'Structured legal advisory designed to provide clients with a clear, sober assessment of their legal position, potential risks, and lawful courses of action.',
    context:
      'Uncertainty is often the greatest burden during criminal legal exposure. Our advisory consultations review facts without sugarcoating, outlining lawful defenses, anticipated timelines, and procedural options.',
    stages: [
      'Preliminary confidential review of available documents and allegations',
      'Evaluation of statutory charges and penal liabilities under the PPC',
      'Risk mitigation and lawful response preparation',
      'Formulation of strategic litigation roadmap',
    ],
    keyProvisions: ['Advocate-Client Privilege', 'Legal Ethics & Bar Conduct Rules', 'Statutory Limitation Safeguards'],
    clientConsiderations: [
      'Strict confidentiality is maintained for all preliminary consultations',
      'Clients receive candid legal reality rather than false guarantees',
      'Early legal insight prevents irreversible procedural blunders',
    ],
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'understanding-bail-law-pakistan',
    title: 'Understanding Pre-Arrest vs. Post-Arrest Bail in Pakistan',
    date: 'October 2026',
    category: 'Criminal Procedure',
    readTime: '6 min read',
    summary:
      'An analytical overview of Sections 497 and 498 of the Code of Criminal Procedure (CrPC), outlining statutory requirements, judicial discretion, and constitutional liberty principles.',
    content: [
      'Personal liberty is one of the most fundamental rights protected under Article 9 of the Constitution of Islamic Republic of Pakistan. When an individual faces the immediate threat of deprivation of this liberty through criminal prosecution, the law provides statutory remedies through bail.',
      'Pre-arrest bail, governed principally under Section 498 CrPC, is an extraordinary judicial remedy. The superior courts of Pakistan have established that to obtain anticipatory protection against arrest, the petitioner must demonstrate not only a prima facie case for bail on merits, but critically, the presence of mala fide intention, ulterior motive, or harassment on the part of the complainant or police.',
      'In contrast, post-arrest bail under Section 497 CrPC operates after the accused has been taken into judicial custody. Here, offenses are broadly categorized into bailable and non-bailable, and further sub-divided into those falling within the prohibitory clause (punishable with death, imprisonment for life, or imprisonment for 10 years). Even within the prohibitory clause, the law recognizes exceptions such as statutory delay in trial, tender age, gender, or severe medical illness.',
      'Understanding these distinctions ensures that petitioners approach the appropriate court with complete documentation and sound legal grounds rather than emotional appeals.',
    ],
    practicalTips: [
      'Never wait until actual police custody to seek pre-arrest bail if an FIR is already registered or imminent.',
      'Collect documentary proof of any existing enmity or dispute that substantiates mala fide intentions.',
      'Ensure prompt availability of dependable sureties who fulfill local judicial verification standards in Sialkot.',
    ],
  },
  {
    id: 'what-to-do-when-fir-lodged',
    title: 'What to Do When an FIR Is Registered: Legal Steps & Pitfalls',
    date: 'September 2026',
    category: 'First Response',
    readTime: '5 min read',
    summary:
      'A practical legal guide detailing the lawful steps an accused person or their family should take immediately upon discovering the registration of an FIR.',
    content: [
      'The registration of a First Information Report (FIR) under Section 154 CrPC puts the formal machinery of the state into motion. For the accused and their family, this moment often brings panic, which unfortunately leads to critical missteps such as fleeing unlawfully or engaging in unauthorized back-channel negotiations.',
      'The first lawful step is to obtain a certified copy of the FIR from the concerned police station or via court application. Reviewing the exact penal sections invoked (e.g. theft, assault, fraud, or hurt under the Pakistan Penal Code) determines whether the alleged offense is cognizable, bailable, or non-bailable.',
      'Simultaneously, the accused should immediately consult qualified legal counsel to evaluate whether pre-arrest bail should be moved before the Sessions Court. Attempting to evade police without court protection leaves the individual vulnerable to physical remand and involuntary custodial statements.',
      'If the FIR is demonstrably false and stems from a pure civil transaction, legal remedies such as challenging the investigation before higher police officers or filing for quashment under Section 561-A CrPC may be pursued.',
    ],
    practicalTips: [
      'Obtain the complete text of the FIR immediately; do not rely on verbal hearsay from third parties.',
      'Refrain from signing blank papers or making unguided statements to investigating officers.',
      'Engage an advocate to accompany or advise throughout any police summons or inquiry.',
    ],
  },
  {
    id: 'section-22a-22b-explained',
    title: 'The Role of Section 22-A & 22-B Petitions in Criminal Justice',
    date: 'August 2026',
    category: 'Judicial Remedies',
    readTime: '5 min read',
    summary:
      'Examining the jurisdiction of the Ex-Officio Justice of Peace (Sessions and Additional Sessions Judges) to redress police inaction or abuse of authority.',
    content: [
      'Sections 22-A and 22-B of the Code of Criminal Procedure empower Sessions Judges and Additional Sessions Judges to act as Ex-Officio Justices of Peace. This statutory provision acts as a crucial check on arbitrary police conduct across Punjab and Pakistan.',
      'Commonly, citizens turn to Section 22-A petitions when the local police refuse to register a genuine FIR regarding a cognizable offense, or conversely, when the police engage in unlawful harassment or fail to conduct an impartial investigation.',
      'While the Justice of Peace cannot usurp the investigative powers of the police or dictate conclusions, they hold the authority to direct the Station House Officer (SHO) to record the statement of the aggrieved person under Section 154 CrPC, or to instruct supervisory officers to ensure an unbiased investigation.',
      'Proper drafting of a Section 22-A petition requires placing prior written complaints before the Superintendent of Police on record, demonstrating that administrative remedies were attempted prior to invoking judicial intervention.',
    ],
    practicalTips: [
      'Always serve a formal written application to the District Police Officer (DPO) / SP before filing under Section 22-A.',
      'Maintain postal receipts or receiving stamps as verifiable proof of prior intimation.',
      'Focus the petition on clear cognizable elements rather than generalized grievances.',
    ],
  },
  {
    id: 'rights-during-investigation',
    title: 'Constitutional Rights of the Accused During Police Investigation',
    date: 'July 2026',
    category: 'Constitutional Protections',
    readTime: '7 min read',
    summary:
      'An analysis of procedural protections guaranteed by Articles 10, 10-A, and 14 of the Constitution of Pakistan alongside statutory police limits.',
    content: [
      'Under the Pakistani legal framework, an accused individual does not forfeit their constitutional humanity upon arrest. Article 10 guarantees the right to be informed of the grounds of arrest without delay and the right to consult and be defended by a legal practitioner of choice.',
      'Furthermore, Article 10-A enshrines the fundamental right to a fair trial and due process in any determination of criminal liability. Article 14 establishes the inviolability of human dignity and expressly prohibits torture for extracting confessions.',
      'Statutorily, police officers cannot detain an accused in custody for more than 24 hours without producing them before the nearest Judicial Magistrate (Section 61 CrPC). During physical remand proceedings, the magistrate must record specific judicial reasons for authorizing remand rather than acting mechanically.',
      'Any confession made directly to a police officer while in custody is inadmissible in evidence under Article 38 of the Qanun-e-Shahadat Order 1984, protecting citizens against coerced admissions.',
    ],
    practicalTips: [
      'Request immediate production before the Judicial Magistrate if detained beyond statutory limits.',
      'Insist on a medical examination if any physical force or coercion has been applied in custody.',
      'Remember that legal counsel is permitted to meet and confer with the client during judicial custody.',
    ],
  },
];

export const SIALKOT_LEGAL_OVERVIEW = {
  jurisdiction: 'Courts of Sialkot & Lahore High Court',
  headquarters: 'District Courts Complex, Sialkot, Punjab',
  policeStations: 'Covering Urban & Rural Circles of Sialkot District (Civil Lines, Kotwali, Pasrur, Daska, Sambrial)',
  barAffiliation: 'District Bar Association Sialkot (DBA Sialkot)',
};
