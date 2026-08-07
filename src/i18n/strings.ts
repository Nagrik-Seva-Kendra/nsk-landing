export type Language = "en" | "hi";

function t<E extends string, H extends string>(en: E, hi: H) {
  return { en, hi };
}

export const strings = {
  brandName: t("Nagrik Seva Kendra", "नागरिक सेवा केंद्र"),
  brandProduct: t("Sampada", "सम्पदा"),

  navFeatures: t("Features", "सुविधाएं"),
  navSecurity: t("Security & Trust", "सुरक्षा व भरोसा"),
  navTestimonials: t("Testimonials", "प्रशंसापत्र"),
  navContact: t("Contact", "संपर्क"),
  navCta: t("Try Now", "अभी आज़माएं"),

  heroKicker: t("Official guideline rates · 52 districts · Madhya Pradesh", "सरकारी गाइडलाइन दरें · 52 जिले · मध्य प्रदेश"),
  heroTitle: t(
    "Property records, finally as trustworthy as they should be.",
    "संपत्ति रिकॉर्ड — आखिरकार उतने ही भरोसेमंद, जितने होने चाहिए।",
  ),
  heroSub: t(
    "Sampada brings official collector guideline rates and every major deed into one clear, bilingual portal — so citizens and professionals stop guessing and start knowing.",
    "सम्पदा सरकारी कलेक्टर गाइडलाइन दरों और हर प्रमुख विलेख को एक स्पष्ट, द्विभाषी पोर्टल पर लाता है — ताकि नागरिक और पेशेवर अंदाज़ा लगाना बंद करें और सटीक जानकारी पाएं।",
  ),
  heroCtaPrimary: t("Try Now — it's free", "अभी आज़माएं — मुफ़्त"),
  heroCtaSecondary: t("See how it works", "यह कैसे काम करता है"),
  heroNote: t("Free to get started. Takes less than a minute.", "शुरू करना मुफ़्त है। एक मिनट से भी कम समय लगता है।"),

  statsTitle: t("Built on real records, not estimates", "अनुमान नहीं, असली रिकॉर्ड पर आधारित"),
  stat1Value: t("52", "52"),
  stat1Label: t("districts covered", "जिले कवर किए गए"),
  stat2Value: t("2.4L+", "2.4L+"),
  stat2Label: t("verified property records", "सत्यापित संपत्ति रिकॉर्ड"),
  stat3Value: t("2015–2027", "2015–2027"),
  stat3Label: t("sessions of guideline data", "सत्रों का गाइडलाइन डेटा"),
  stat4Value: t("EN / हिं", "EN / हिं"),
  stat4Label: t("fully bilingual, always", "पूरी तरह द्विभाषी, हमेशा"),

  featuresKicker: t("Everything you need", "आपकी हर ज़रूरत"),
  featuresTitle: t("Everything you need for property & registry", "संपत्ति और रजिस्ट्री के लिए सब कुछ"),
  featuresSub: t(
    "One portal, from checking a rate to holding the finished deed.",
    "एक पोर्टल, दर जांचने से लेकर तैयार विलेख हाथ में पाने तक।",
  ),

  featGuidelineTitle: t("Guideline Rates", "गाइडलाइन दरें"),
  featGuidelineDesc: t("Official collector rate circulars for every district, from the 2015-2016 session to 2026-2027, added as they're notified.", "हर जिले के लिए सरकारी कलेक्टर दर परिपत्र, 2015-2016 सत्र से 2026-2027 तक, अधिसूचित होते ही जोड़े जाते हैं।"),
  featDeedsTitle: t("Deeds & Instruments", "विलेख व दस्तावेज़"),
  featDeedsDesc: t("Sale, lease, partition, gift and more — explained in plain language.", "विक्रय, पट्टा, विभाजन, दान व अन्य — सरल भाषा में समझाए गए।"),
  featDeedMgmtTitle: t("Deed Management", "विलेख प्रबंधन"),
  featDeedMgmtDesc: t("Create, print and manage your deeds from one dashboard.", "एक डैशबोर्ड से अपने विलेख बनाएं, प्रिंट करें और प्रबंधित करें।"),
  featDocsTitle: t("Document Scanning", "दस्तावेज़ स्कैनिंग"),
  featDocsDesc: t("Scan and attach supporting documents right from your phone or desktop.", "अपने फोन या डेस्कटॉप से सहायक दस्तावेज़ स्कैन करें और जोड़ें।"),
  featTeamTitle: t("Team & Employees", "टीम व कर्मचारी"),
  featTeamDesc: t("Manage staff access across offices with role-based permissions.", "भूमिका-आधारित अनुमतियों के साथ कार्यालयों में स्टाफ़ पहुंच प्रबंधित करें।"),
  featBilingualTitle: t("Bilingual by default", "स्वाभाविक रूप से द्विभाषी"),
  featBilingualDesc: t("Every page, every field, in English and Hindi — no translation guesswork.", "हर पेज, हर फ़ील्ड, अंग्रेज़ी और हिंदी में — अनुवाद का कोई अंदाज़ा नहीं।"),

  securityKicker: t("Security & privacy", "सुरक्षा व निजता"),
  securityTitle: t("Records you can trust, protected the way they deserve", "ऐसे रिकॉर्ड जिन पर भरोसा हो, वैसी ही सुरक्षा के साथ"),
  sec1Title: t("Official data sources", "सरकारी डेटा स्रोत"),
  sec1Desc: t("Rates and formats sourced from published collector guidelines.", "दरें और प्रारूप प्रकाशित कलेक्टर गाइडलाइन से लिए गए।"),
  sec2Title: t("Encrypted access", "एन्क्रिप्टेड एक्सेस"),
  sec2Desc: t("Your account and documents are protected in transit and at rest.", "आपका खाता और दस्तावेज़ ट्रांज़िट व स्टोरेज में सुरक्षित हैं।"),
  sec3Title: t("Role-based permissions", "भूमिका-आधारित अनुमतियां"),
  sec3Desc: t("Every staff member sees only what their role allows.", "हर स्टाफ़ सदस्य केवल वही देखता है जो उसकी भूमिका अनुमति देती है।"),
  sec4Title: t("Local support, always on", "स्थानीय सहायता, हमेशा उपलब्ध"),
  sec4Desc: t("A real office in Gwalior, reachable by phone and WhatsApp.", "ग्वालियर में एक वास्तविक कार्यालय, फोन व व्हाट्सएप पर उपलब्ध।"),

  testimonialsTitle: t("What our clients say", "हमारे क्लाइंट्स क्या कहते हैं"),
  testimonialsSub: t(
    "Real experiences from citizens who used our guideline-rate and deed services.",
    "हमारी गाइडलाइन-दर और विलेख सेवाओं का उपयोग करने वाले नागरिकों के वास्तविक अनुभव।",
  ),
  t1Name: t("Rajeev Sharma", "राजीव शर्मा"),
  t1Role: t("Property buyer, Gwalior", "संपत्ति खरीदार, ग्वालियर"),
  t1Quote: t(
    "I found the exact collector rate for my plot in two minutes — something that used to take a full day at the office.",
    "मुझे अपने प्लॉट की सही कलेक्टर दर दो मिनट में मिल गई — जो पहले दफ़्तर में पूरा दिन लेती थी।",
  ),
  t2Name: t("Anita Verma", "अनिता वर्मा"),
  t2Role: t("Deed consultant", "विलेख सलाहकार"),
  t2Quote: t(
    "The bilingual deed explanations make it easy to guide clients who are more comfortable in Hindi.",
    "द्विभाषी विलेख विवरण उन क्लाइंट्स को समझाना आसान बनाते हैं जो हिंदी में सहज हैं।",
  ),
  t3Name: t("Manoj Tiwari", "मनोज तिवारी"),
  t3Role: t("Small business owner", "छोटे व्यवसाय के मालिक"),
  t3Quote: t(
    "Managing my documents and deeds from one dashboard has saved me multiple trips to the registrar's office.",
    "एक ही डैशबोर्ड से अपने दस्तावेज़ और विलेख प्रबंधित करने से रजिस्ट्रार दफ़्तर के कई चक्कर बच गए।",
  ),

  quoteText: t(
    "“Every citizen deserves to know the true value of their property, in their own language, without middlemen.”",
    "“हर नागरिक को अपनी संपत्ति का सही मूल्य, अपनी ही भाषा में, बिचौलियों के बिना जानने का हक़ है।”",
  ),
  quoteAuthor: t("Nagrik Seva Kendra Team", "नागरिक सेवा केंद्र टीम"),
  quoteRole: t("Gwalior, Madhya Pradesh", "ग्वालियर, मध्य प्रदेश"),

  ctaTitle: t("Ready to get started with Sampada?", "सम्पदा के साथ शुरुआत करने के लिए तैयार हैं?"),
  ctaSub: t("Create your free account — it takes less than a minute.", "अपना मुफ़्त खाता बनाएं — एक मिनट से भी कम समय लगता है।"),
  ctaButton: t("Try Now", "अभी आज़माएं"),

  footTagline: t(
    "Official guideline rates & property deeds, in one trusted, bilingual portal.",
    "सरकारी गाइडलाइन दरें व संपत्ति विलेख, एक विश्वसनीय, द्विभाषी पोर्टल पर।",
  ),
  footProduct: t("Product", "उत्पाद"),
  footCompany: t("Company", "कंपनी"),
  footLegal: t("Legal", "कानूनी"),
  footContact: t("Contact", "संपर्क"),
  footPrivacy: t("Privacy Policy", "गोपनीयता नीति"),
  footTerms: t("Terms of Service", "सेवा की शर्तें"),
  footRights: t("All rights reserved.", "सर्वाधिकार सुरक्षित।"),

  brandSub: t(
    "G-11,12 Millenium Plaza, University Road,\nGovindpuri, Gwalior, M.P.",
    "G-11,12 मिलेनियम प्लाज़ा, यूनिवर्सिटी रोड,\nगोविंदपुरी, ग्वालियर, म.प्र.",
  ),
  phone: t("78984 75648", "78984 75648"),
  email: t("anujshrm325@gmail.com", "anujshrm325@gmail.com"),
} as const;

export type StringKey = keyof typeof strings;
