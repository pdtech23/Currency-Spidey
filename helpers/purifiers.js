const getCurrID = (check) => {
    const patterns = {
        USD: /U.?S.?D|^U.?S.?A?|United ?States/gmi,
        EUR: /E.?U.?R.?O?/gmi,
        GBP: /G.?B.?P?|Sterling|British/gmi,
        CHF: /C.?H.?F|Swiss|Franc/gmi,
        AED: /U.?A.?E|Emirates|A.?E.?D|Dubai/gmi,
        SAR: /S.?A.?R|Saudia?/gmi,
        KWD: /K.?W.?D|Kuwaiti?/gmi,
        AUD: /A.?U.?D|Australian?/gmi,
        QAR: /Q.?A.?R|Qatari?/gmi,
        LBP: /L.?B.?P|Lebanese|Lebanon/gmi,
        JOD: /J.?O.?D|Jordan(ian)?/gmi,
        CAD: /C.?A.?D|Canadi?an?/gmi,
        DKK: /D.?K.?K|Danish|Denmarks?/gmi,
        JPY: /J.?P.?Y|Japan(ese)?|Yen/gmi,
        BHD: /B.?H.?D|Bahraini?/gmi,
        SEK: /S.?E.?K|Swidi?e?sh/gmi, // A bank misspelled it
        NOK: /N.?O.?K|Norw(ay)?(egian)?/gmi,
        OMR: /O.?M.?R|Omani?/gmi
    };

    for (let i = 0; i < Object.keys(patterns).length; i++){
        if (patterns[Object.keys(patterns)[i]].test(check))
            return Object.keys(patterns)[i];
    }

    return 'N/A';
};

const toFloat = (value) => {
    return parseFloat(value);
};

module.exports = {
    getCurrID,
    toFloat
};

