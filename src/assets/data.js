import * as React from 'react'

export var faq = [
    "How to self quarantine? ",
    "Guidelines on use of masks",
    "Advisory on social distancing",
    "understanding COVID-19 (for kids)",
    "COVID-19 management videos"
]


export var yesButton = {
    "english": "Yes",
    "hindi": "हाँ"
}

export var noButton = {
    "english": "No",
    "hindi": "नहीं"
}

export var nextButton = {
    "english": "Next",
    "hindi": "अगला"
}

export var previousButton = {
    "english": "Previous",
    "hindi": "पूर्व"
}


export function getQuestions(locationInput, temperatureInput) {
    return {
        hindi: [
            {
                question: <div>क्या आपने किसी उच्च जोखिम वाले देश / भारतीय राज्य की <b>यात्रा</b> की है या किसी ऐसे व्यक्ति <b>के संपर्क में</b> है जो पिछले 14 दिनों में बीमार या उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा कर चुका है?</div>,
                conditional: locationInput
            }, {
                question: "क्या आपने किसी उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा की है या किसी ऐसे व्यक्ति के संपर्क में है जो पिछले 14 दिनों में बीमार या उच्च जोखिम वाले देश / भारतीय राज्य की यात्रा कर चुका है?"
            }, {
                question: "क्या आपको बुखार है?",
                conditional: temperatureInput
            }, {
                question: "क्या आपको खांसी है?"
            }, {
                question: "क्या आपको सांस में तकलीफ है?"
            }, {
                question: "क्या आपके पास एक पुरानी बीमारी है (हृदय, फेफड़े, या गुर्दा रोग, मधुमेह) या इम्यूनो कॉम्प्रोमाइज्ड हैं (कैंसर, एचआईवी, ऑटोइम्यून रोग)"
            }
        ],
        english: [
            {
                question: <div>Have you <b>traveled</b> to a high-risk country / Indian state or been <b>in contact with</b> someone who is ill and has traveled to a high risk country / Indian state in the last 14 days?</div>,
                conditional: locationInput,
            }, {
                question: "Have you been in close contact with a laboratory confirmed COVID-19 patient within the past 14 days?"
            }, {
                question: "Do you have fever?",
                conditional: temperatureInput
            }, {
                question: "Do you have cough?"
            }, {
                question: "Do you have shortness in breath??"
            }, {
                question: "Do you have a chronic Illness (Heart, Lung, or Kidney Disease, Diabetes) or are immunocompromised (Cancer, HIV, Autoimmune Disease)"
            }
        ]
    }
}