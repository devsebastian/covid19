import * as React from 'react'

export var yesAnswerTitle = {
    "english": "Yes",
    "hindi": "हाँ",
    "malayalam": "അതെ / ഉണ്ട്"
}

export var noAnswerTitle = {
    "english": "No",
    "hindi": "नहीं",
    "malayalam": "ഇല്ല"
}

export var nextButtonTitle = {
    "english": "Next",
    "hindi": "अगला",
    "malayalam": "അടുത്തത്"
}

export var previousButtonTitle = {
    "english": "Previous",
    "hindi": "पूर्व",
    "malayalam": "മുമ്പത്തെ"
}

export var answerOptionsMessage = {
    "english": "Answer Options",
    "hindi": "कृपया जवाब दें",
    "malayalam": "ഉത്തരം ഓപ്ഷനുകൾ"
}

export var questions = {
    hindi: [
        <div>क्या आपने किसी उच्च जोखिम वाले देश / भारतीय राज्य की <b>यात्रा</b> की है या किसी ऐसे व्यक्ति <b>के संपर्क में</b> है जो पिछले 14 दिनों में बीमार या उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा कर चुका है?</div>,
        "क्या आप पिछले 14 दिनों के भीतर प्रयोगशाला द्वारा पुष्टि की गई एक COVID​​-19 रोगी के निकट संपर्क में हैं?",
        "क्या आपको बुखार है?",
        "क्या आपको खांसी है?",
        "क्या आपको सांस लेने में तकलीफ है?",
        "क्या आपके पास एक पुरानी बीमारी है (हृदय, फेफड़े, या गुर्दा रोग, मधुमेह) या इम्यूनो कॉम्प्रोमाइज्ड हैं (कैंसर, एचआईवी, ऑटोइम्यून रोग)"
    ],
    malayalam: [
        <div>കഴിഞ്ഞ 14 ദിവസത്തിനുള്ളിൽ നിങ്ങൾ ഉയർന്ന അപകടസാധ്യതയുള്ള രാജ്യത്തിലേക്കോ ഇന്ത്യൻ സംസ്ഥാനത്തിലേക്കോ യാത്ര ചെയ്തിട്ടുണ്ടോ അല്ലെങ്കിൽ അസുഖമുള്ള ഒരാളുമായി സമ്പർക്കം പുലർത്തിയിട്ടുണ്ടോ?</div>,
        "കഴിഞ്ഞ 14 ദിവസത്തിനുള്ളിൽ COVID-19 സ്ഥിരീകരിച്ച രോഗിയുമായി നിങ്ങൾ അടുത്ത ബന്ധത്തിലാണോ?",
        "നിങ്ങൾക്ക് പനി ഉണ്ടോ?",
        "നിങ്ങൾക്ക് ചുമ ഉണ്ടോ?",
        "ശ്വസിക്കുന്നതിൽ നിങ്ങൾക്ക് തടസമുണ്ടോ?",
        "നിങ്ങൾക്ക് ഒരു വിട്ടുമാറാത്ത രോഗമുണ്ടോ (ഹൃദയം, ശ്വാസകോശം, അല്ലെങ്കിൽ വൃക്കരോഗം, പ്രമേഹം) അല്ലെങ്കിൽ രോഗപ്രതിരോധശേഷിയില്ലാത്തവരാണോ (കാൻസർ, എച്ച്ഐവി, സ്വയം രോഗപ്രതിരോധ രോഗം)"
    ],
    english: [
        <div>Have you <b>traveled to</b> a high-risk country / Indian state or been <b>in contact with</b> someone who is ill and has traveled to a high risk country / Indian state in the last 14 days?</div>,
        "Have you been in close contact with a laboratory confirmed COVID-19 patient within the past 14 days?",
        "Do you have fever?",
        "Do you have cough?",
        "Do you have trouble in breathing?",
        "Do you have a chronic Illness (Heart, Lung, or Kidney Disease, Diabetes) or are immunocompromised (Cancer, HIV, Autoimmune Disease)"
    ],
}

export var CDCmessage = {
    "english": "According to the CDC and WHO guidelines, you are unlikely to have COVID-19.",
    "hindi": "CDC और WHO के दिशानिर्देशों के अनुसार, आपके पास COVID-19 होने की संभावना नहीं है।",
    "malayalam": "സിഡിസി, ഡബ്ല്യുഎച്ച്ഒ മാർഗ്ഗനിർദ്ദേശങ്ങൾ അനുസരിച്ച്, നിങ്ങൾക്ക് COVID-19 ഉണ്ടാകാൻ സാധ്യതയില്ല."
}

export var warningTextOne = {
    "english": "In case your symptoms change, please take the self-assessment again or contact any healthcare facility near you.",
    "hindi": "यदि आपके लक्षण बदल जाते हैं, तो कृपया फिर से स्व-मूल्यांकन करें या अपने आस-पास किसी भी स्वास्थ्य सुविधा से संपर्क करें।",
    "malayalam": "നിങ്ങളുടെ ലക്ഷണങ്ങൾ മാറുകയാണെങ്കിൽ, ദയവായി വീണ്ടും സ്വയം വിലയിരുത്തൽ നടത്തുക അല്ലെങ്കിൽ നിങ്ങളുടെ അടുത്തുള്ള ഏതെങ്കിലും ആരോഗ്യ പരിപാലന കേന്ദ്രവുമായി ബന്ധപ്പെടുക."
}

export var helplineNumbers = {
    "english": "helpline numbers",
    "hindi": "हेल्पलाइन नंबर",
    "malayalam": "ഹെൽപ്പ്ലൈൻ നമ്പറുകൾ"
}

export var warningTextTwo = {
    "english": <div>In case you suspect a positive case, please <a href="tel:1075"><b>call 1075</b></a> or report to a nearby healthcare facility</div>,
    "hindi": <div>यदि आपको सकारात्मक मामले में संदेह है, तो कृपया <a href="tel:1075"><b>1075 पर कॉल करें</b></a> या किसी नजदीकी स्वास्थ्य सुविधा की रिपोर्ट करें</div>,
    "malayalam": <div>ഒരു പോസിറ്റീവ് കേസ് എന്ന് നിങ്ങൾ സംശയിക്കുന്നുവെങ്കിൽ, ദയവായി 1075 ൽ വിളിക്കുക അല്ലെങ്കിൽ അടുത്തുള്ള ആരോഗ്യ പരിരക്ഷാ കേന്ദ്രത്തിൽ റിപ്പോർട്ട് ചെയ്യുക</div>
}

export var medicalAdvice = {
    "english": "*This is not a medical advice",
    "hindi": "*यह चिकित्सकीय सलाह नहीं है",
    "malayalam": "*ഇതൊരു വിദഗ്ധ വൈദ്യ ഉപദേശമല്ല"
}


export var intro = {
    "english": "This web app is a COVID-19 Self Assessment Tool.",
    "hindi": "यह वेब ऐप एक COVID-19 सेल्फ असेसमेंट टूल है।",
    "malayalam": "ഈ വെബ് അപ്ലിക്കേഷൻ ഒരു COVID-19 സ്വയം വിലയിരുത്തൽ ആണ്."
}

export var startButtonTitle = {
    "english": "Start",
    "hindi": "शुरू करें",
    "malayalam": "നമുക്ക് തുടങ്ങാം"
}

export var locationConditionalLabel = {
    "english": "Which country / Indian state did you travel?",
    "hindi": "आपने किस देश / भारतीय राज्य की यात्रा की?",
    "malayalam": "ഏത് രാജ്യമാണ് / ഇന്ത്യൻ സംസ്ഥാനമാണ് നിങ്ങൾ യാത്ര ചെയ്തത്?"
}

export var bodyTemperatureConditionalLabel = {
    "english": "Body temperature (°F)",
    "hindi": "शरीर का तापमान (° F)",
    "malayalam": "ശരീര താപനില (° F)"
}

export var countryWarning = {
    "english": "DO not attend work and self-quarantine for 14 days after leaving the country",
    "hindi": "देश छोड़ने वाले दिन से लेकर 14 दिनों तक काम में शामिल न हों और स्व-संगरोध करे",
    "malayalam": "രാജ്യം വിട്ട് 14 ദിവസത്തേക്ക് ജോലിയിലും സ്വയം കപ്പല്വിലക്കിലും പങ്കെടുക്കരുത്"
}

export var riskWarning = {
    "english": "Based on the assessment, you are at risk for COVID-19",
    "hindi": "मूल्यांकन के आधार पर, आपको COVID-19 से खतरा है",
    "malayalam": "വിലയിരുത്തലിനെ അടിസ്ഥാനമാക്കി, നിങ്ങൾക്ക് COVID-19 അപകടസാധ്യതയുണ്ട്"
}

export var faqTitle = {
    "english": "FAQ",
    "hindi": "सामान्य प्रश्न",
    "malayalam": "പതിവുചോദ്യങ്ങൾ"
}

export var transportationTitle = {
    "english": "Transportation to isolation ward",
    "hindi": "आइसोलेशन वार्ड के लिए परिवहन",
    "malayalam": "ഐസലേഷന് വാർഡിലേക്കുള്ള യാത്ര"
}

export var assistanceTitle = {
    "english": "For any assistance",
    "hindi": "किसी भी प्रकार की सहायता के लिए",
    "malayalam": "കൂടുതൽ സഹായത്തിനായി"
}