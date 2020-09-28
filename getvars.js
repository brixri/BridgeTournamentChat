function eW() {
    if (confirm("Pleaase click OK if you are sitting on EW position")) {
        var ew = true;
        NS = "True";
    } else {
        NS = "Stoj";
    }
    console.log(NS);
};

function tableNumber() {
    var tn = prompt("Please enter your current table number.", "1");
    console.log(tn);
    return (tn);
};

function nextRoundcheck() {
    if (ew = true) {
        tn = tn + rI;


    };

    if (tn > tMax) {
        tn = tn - tMax;
    }

    console.log(tn);
};

function startJitsi() {

    console.log("This is the current table number: ", tn);


    var Tname = "AGBC";
    console.log("This is the tournament name: " + Tname);

    var rName = tn + "-" + Tname;
    console.log('This is the link: ' + rName);

    var audOnl = true;
    const domain = 'meet.jit.si';
    const options = {
        roomName: rName,
        width: 700,
        height: 700,
        configOverwrite: {
            enableNoisyMicDetection: true,
            startAudioOnly: audOnl,
            enableWelcomePage: false,
            enableClosePage: true,
            disableInviteFunctions: true,

        },

    };



    api = new JitsiMeetExternalAPI(domain, options);


};