var Tname = 'Tournament Name';
var tn = 'SomethingWentWrong';
var rName = '-oOoops';
var uName = 'Your Name Here';
var iRound = 3;
var maxTn = 10;
var eW = false;



function getTn() {
    if (confirm("Pleaase click OK if you are sitting on EW position")) {
        eW = true;
    } else {
        txt = "You pressed Cancel!";
    }
};

function getEW() {
    var tn = prompt("Please enter your current table number.", "1");
    return tn;
};

function startJitsi() {
    var eW = confirm("Pleaase click OK if you are sitting on EW position");
    console.log(eW);
    var tn = prompt("Please enter your current table number.", "1");
    var tn = document.getElementById("tNumber").value;
    console.log("This is the starting table number: ", tn);
    var tn = parseInt(tn) + iRound;
    if (tn > maxTn) {
        var tn = tn - maxTn;
    }

    console.log("This is the current table number: ", tn);


    var Tname = document.getElementById("tName").value;
    console.log("This is the tournament name: " + Tname);

    var rName = tn + "-" + Tname;
    console.log('This is the link: ' + rName);

    var uName = document.getElementById("name").value;
    var audOnl = document.getElementById("noVideo");
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
            userInfo: {
                displayName: uName,
            },
        },

    };

    var interfaceConfig = {
        DEFAULT_BACKGROUND: '#474747',
        DEFAULT_LOCAL_DISPLAY_NAME: uName,
        DEFAULT_LOGO_URL: 'images/icon.png',
        DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Bridge Player',
        DEFAULT_WELCOME_PAGE_LOGO_URL: 'images/icon.png',
        BRAND_WATERMARK_LINK: '',
        CLOSE_PAGE_GUEST_HINT: false,
        JITSI_WATERMARK_LINK: 'https://bridgebase.com',
    };

    api = new JitsiMeetExternalAPI(domain, options);
    console.log(uName);

}