/*******************************************************************************
 * Copyright (c) 2016 Deutsche Automobil Treuhand GmbH. All rights reserved.
 ******************************************************************************/
var appProperties = {
    common: {
        hosts: ["gold.dat.de", "www.dat.de"],
        countries: {
            AT: "austria",
            BG: "bulgaria",
            CZ: "czech",
            DE: "germany",
            ES: "spain",
            FR: "france",
            GR: "greece",
            HU: "hungary",
            IT: "italy",
            NL: "netherlands",
            PL: "poland",
            RO: "romania",
            RU: "russia",
            SK: "slovakia",
            TR: "turkey"
        },
        languages: {
            bg_BG: "bulgarian",
            cs_CZ: "czech",
            de_DE: "german",
            en_US: "english (US)",
            es_ES: "spanish",
            fr_FR: "french",
            hu_HU: "hungarian",
            nl_NL: "dutch",
            it_IT: "italian",
            pl_PL: "polish",
            ro_RO: "romanian",
            ru_RU: "russian",
            sk_SK: "slovak",
            tr_TR: "turkish"
        }
    },
    identify: {
        pages: ['model selection', 'equipment selection', 'vehicle summary', 'vehicle data']
    },
    calculatePro: {
        variants: [
            'calculatePro',
            'calculateExpert'
        ],
        pages: {
            'model': '/vehicleSelection/model.htm',
            'eventList': '/eventList/eventList.html',
            'contractOpening': '/vehicleRepairOnline/contractOpening.html',
            'activityRelatedData': '/vehicleRepairOnline/activityRelatedData.html',
            'graphicSelectionPage': '/grapaselservice/GraphicalPartSelectionPage.html',
            'calculationResult': '/vehicleRepairOnline/calculationResult.html',
            'printAndSend': '/vehicleRepairOnline/printAndSend.html',
            'companyData': '/vehicleRepairOnline/companyData.html',
            'settings': '/vehicleRepairOnline/settings.html'
        }
    },
    valuateFL: {
        actions: ["showEventList", "createDossier", "changeDossier", "importDossier"],
        dossierTypes: ["evaluation", "historical evaluation", "compare"],
        pages: {
            evaluation: ["model selection", "equipment selection", "hgv platforms selection", "equipment selection (hgv platform)", "vehicle condition", "mounted tires evaluation", "not mounted tires evaluation", "hgv platforms evaluation", "new vehicle price", "vehicle data (from new vehicle price)", "evaluation", "vehicle data (from evaluation)", "residual value forecast", "vehicle data (from residual value forecast)", "historical evaluation", "vehicle data (from historical evaluation)"],
            historicalEvaluation: ["contract opening", "model selection", "equipment selection", "historical evaluation", "vehicle data (from historical evaluation)"],
            compare: ["compare preferences", "compare models track", "compare models national", "compare models international", "equipment selection", "compare result", "charts"]
        }
    },
    valuateNG: {
        variants: {
            "valuateNG.pro": "valuatePro",
            "valuateNG.expert": "valuateExpert",
            "valuateNG.expertPartner": "valuateExpertPartner",
            "valuateNG.expertPlusPartner": "valuateExpertPlusPartner"
        },
        pages: {
            overview: ["overview.eventlist", "overview.dashboard"],
            overviewExpert: ["overview.eventlist"],
            valuation: ["valuation.create", "valuation.model", "valuation.ownerContract", "valuation.equipment", "valuation.truckbody", "valuation.condition", "valuation.truckbodyValuation", "valuation.valuation", "valuation.calculation", "valuation.webscan"],
            valuationExpert: ["valuation.create", "valuation.contractOpening", "valuation.model", "valuation.equipment", "valuation.truckbody", "valuation.condition", "valuation.truckbodyValuation", "valuation.historyValuation", "valuation.valueDefinition", "valuation.webscan"],
            procurementOffer: ["procurementOffer.offer", "procurementOffer.customer", "procurementOffer.data", "procurement.procurement", "procurement.customer", "procurement.webscan", "procurement.calculation"],
            admission: ["admission.customer", "admission.equipment", "admission.condition", "admission.valuation", "admission.compare", "admission.admission", "admission.calculation"],
            planData: ["planData.planData", "planData.actualRepairCost"],
            salesPreparation: ["salesPreparation.general", "salesPreparation.equipment", "salesPreparation.properties", "salesPreparation.pictures", "salesPreparation.bank", "salesPreparation.control", "salesPreparation.decorationPreview"],
            salesOffer: ["salesOffer.calculation", "salesOffer.offer", "salesOffer.customer", "salesOffer.bank"],
            reservation: ["reservation.reservation", "reservation.customer"],
            sales: ["sales.sales", "sales.calculation", "sales.customer", "sales.warranty"],
            basecheck: ["basecheck.general", "basecheck.baseCheck", "basecheck.requiredPictures", "basecheck.specialassesments", "basecheck.valueDefinition"],
            leasingReturn: ["leasingReturn.general", "leasingReturn.leasingReturn", "leasingReturn.requiredPictures", "leasingReturn.specialassesments", "leasingReturn.valueDefinition"],
            conditionReport: ["conditionReport.general", "conditionReport.conditionReport", "conditionReport.requiredPictures", "conditionReport.valueDefinition"],
            valuationExpertise: ["valuationExpertise.general", "valuationExpertise.valuationExpertise", "valuationExpertise.valueDefinition"],
            estimationCertificate: ["estimationCertificate.general", "estimationCertificate.estimationCertificate", "estimationCertificate.valueDefinition"],
            compile: ["compile.compile"],
            masterData: ["masterData.entryPage"],
            systemOptions: ["systemOptions.entryPage"],
            userSettings: ["userSettings.userSettingsPage"]
        }
    }
};

var vNgPageLists = {
    "valuateNG.pro": [appProperties.valuateNG.pages.overview, appProperties.valuateNG.pages.valuation, appProperties.valuateNG.pages.procurementOffer, appProperties.valuateNG.pages.admission, appProperties.valuateNG.pages.planData, appProperties.valuateNG.pages.salesPreparation, appProperties.valuateNG.pages.salesOffer, appProperties.valuateNG.pages.reservation, appProperties.valuateNG.pages.sales, appProperties.valuateNG.pages.masterData, appProperties.valuateNG.pages.systemOptions, appProperties.valuateNG.pages.userSettings],
    "valuateNG.expert": [appProperties.valuateNG.pages.overviewExpert, appProperties.valuateNG.pages.valuationExpert, appProperties.valuateNG.pages.compile, appProperties.valuateNG.pages.masterData, appProperties.valuateNG.pages.systemOptions, appProperties.valuateNG.pages.userSettings],
    "valuateNG.expertPartner": [appProperties.valuateNG.pages.overviewExpert, appProperties.valuateNG.pages.valuationExpert, appProperties.valuateNG.pages.basecheck, appProperties.valuateNG.pages.leasingReturn, appProperties.valuateNG.pages.conditionReport, appProperties.valuateNG.pages.compile, appProperties.valuateNG.pages.masterData, appProperties.valuateNG.pages.systemOptions, appProperties.valuateNG.pages.userSettings],
    "valuateNG.expertPlusPartner": [appProperties.valuateNG.pages.overviewExpert, appProperties.valuateNG.pages.valuationExpert, appProperties.valuateNG.pages.basecheck, appProperties.valuateNG.pages.leasingReturn, appProperties.valuateNG.pages.conditionReport, appProperties.valuateNG.pages.valuationExpertise, appProperties.valuateNG.pages.estimationCertificate, appProperties.valuateNG.pages.compile, appProperties.valuateNG.pages.masterData, appProperties.valuateNG.pages.systemOptions, appProperties.valuateNG.pages.userSettings]
};

var appFunctions = {
    storeUserData: function(id) {
        if (window.localStorage) localStorage.setItem("userData" + id, JSON.stringify(storeObject()));
        else alert("Can't save settings. LocalStorage is not supported. Use '/scripts/userData.js' instead.")
    },
    clearUserData: function(id) {
        if (window.localStorage && localStorage.getItem("userData" + id) == null)
            alert("You haven't stored any settings on localStorage.");
        else if (confirm('Do you really want to delete your settings from localStorage?'))
            localStorage.removeItem("userData" + id);
    },
    loadUserData: function(id) {
        if (window.localStorage && localStorage.getItem("userData" + id) != null) {
            userData = JSON.parse(localStorage.getItem("userData" + id));
            return true;
        }
        else {
            return false;
        }
    },
    resizeFunc: function() {
        if ($(window).width() <= 930) {
            if ($("#logo").css("display") != "none") $("#logo").css("display", "none");
        }
        else {
            if ($("#logo").css("display") == "none") $("#logo").css("display", "");
        }
    },
    toggleOutputRendering: function() {
        if ($("#orPlain").prop("checked")) {
            $("#txtOut").css("display", "block");
            $("#iframeTV").css("display", "none");
        }
        else if ($("#orTv").prop("checked")) {
            $("#txtOut").css("display", "none");
            $("#iframeTV").css("display", "block");
        }
    },
    addHost: function() {
        var host = prompt("Enter Host:", "gold.dat.de");
        if (host != null)
            $("#selHosts").append("<option value='" + host + "'>" + host + "</option>");
    },
    removeHost: function() {
        var bool = false;
        $.each(appProperties.common.hosts, function (index, value) {
            if (value == $("#selHosts option:selected").val()) {
                alert("Error: deleting pre-defined hosts is forbidden.");
                bool = true;
            }
        });
        if (!bool)
            if (confirm('Do you really want to delete the host "' + $("#selHosts option:selected").val() + '" from the list?'))
                $("#selHosts option:selected").remove();
    },
    displayContainer: function(id) {
        active = id;
        $("#div_credentials").css("display", active == 1 ? '' : 'none');
        $("#div_integration").css("display", active == 2 ? '' : 'none');
        $("#div_response").css("display", active == 3 ? '' : 'none');
    },
    prepareIframeForTreeview: function(iframeid) {
        var tcScript = document.getElementById(iframeid).contentWindow.document.createElement('script');
        $(tcScript).append('function toggle(id) { if(document.getElementById("chk"+id).checked) document.getElementById("ul"+id).style.display = "block"; else document.getElementById("ul"+id).style.display = "none"; }\n');
        $("#" + iframeid).contents().find("body").append(tcScript);
        $("#" + iframeid).contents().find("head").append($('<style>.attr { color: #993333; font-size:0.9em; }\n body { font-size:1em; }\n ul { font-family: monospace; padding: 0px; list-style: none; }\n ul li { padding: 0px; margin-left: 25px; }\n input[type=checkbox]:before { content:""; display:inline-block; width:12px; height:12px; background-image:url("http://' + location.hostname + ':' + location.port + '/gfx/plus.png"); }\n input[type=checkbox]:checked:before { background-image:url("http://' + location.hostname + ':' + location.port + '/gfx/minus.png"); }​</style>'));
    },
    resetIframe: function(iframeid) {
        subId = 0;
        if($("#" + iframeid).contents().find("body").children()[1])
            $("#" + iframeid).contents().find("body").children()[1].parentNode.removeChild($("#" + iframeid).contents().find("body").children()[1]);
    },
    clrFrame: function() { $("#iframeFL").attr("src",""); },
    handleFileOpen: function(evt) {
        $.ajax("dossiers/" + document.getElementById("inpVxsFile").files[0].name)
            .done(function (data) {
                $("#txtInput").val(data)
            })
            .fail(function (a, b, c) {
                if (c == "Not Found") alert("Error: dossier files must lay in applications /dossiers subdirectory.");
                else alert("Error: " + c + ".");
                $("#txtInput").val("");
            });
    },
    quitAppl: function() {
        if (confirm("Back to main menu?"))
            window.location = "index.html";
    },
    formatRecursive: function(rootEl, indent) {
        var output = "", dent = "";
        for (var d = 0; d < indent; d++) dent += "\t";
        for (var i = 0; i < rootEl.childNodes.length; i++) {

            var attr = "", openTagInner="";
            var elem = rootEl.childNodes[i];

            if(elem.nodeType!==1) continue;

            if (elem.attributes)
                for (var j = 0; j < elem.attributes.length; j++)
                    attr += " " + elem.attributes[j].nodeName + "=\"" + elem.attributes[j].nodeValue + "\"";

            openTagInner = elem.nodeName + attr;

            if (elem.firstElementChild !== null)
                output +=  dent + "<" + openTagInner + ">\n" + this.formatRecursive(elem, indent+1) + dent + "</" + elem.nodeName + ">\n";

            else {
                if (elem.textContent)
                    output += dent + "<" + openTagInner + ">" + elem.textContent + "</" + elem.nodeName + ">\n";
                else
                    output += dent + "<" + openTagInner + "/>\n"
            }
        }
        return output;
    },
    formatRecursive2: function (rootEl) {
        var output = "<ul>";
        for (var i = 0; i < rootEl.childNodes.length; i++) {
            var attr = "";
            var elem = rootEl.childNodes[i];
            if(elem.nodeType!==1) continue;
            var node = elem.nodeName.indexOf(":") > -1 ? elem.nodeName.split(":")[1] : elem.nodeName;

            if (elem.attributes.length > 0) {
                attr += "[";
                for (var j = 0; j < elem.attributes.length; j++)
                    attr += (attr.length > 1 ? "; " : "") + "@" + elem.attributes[j].nodeName + "=\"" + elem.attributes[j].nodeValue + "\"";
                attr += "]";
            }
            if (elem.firstElementChild !== null) {
                output += "<li>" +
                    "<input type='checkbox' id='chk" + subId + "' onchange='toggle(" + subId + ")'>" +
                    "<label>" + node + "</label>" +
                    "<ul id='ul" + subId++ + "' style='display:none'>" + this.formatRecursive2(elem) + "</ul></li>";
            }
            else {
                if (elem.textContent)
                    output += "<li>" +
                        "<input class='spacer' type='checkbox' style='visibility:hidden'>" +
                        "<label><u>" + node + "</u>: " + elem.textContent + " " + "<span class='attr'>" + attr + "</span></label>" +
                        "</li>";
                else
                    output += "<li>" +
                        "\n<input class='spacer' type='checkbox' style='visibility:hidden'>" +
                        "<label><u>" + node + "</u>: <span style='color: lightgrey'>undefined</span></label></li>";
            }
        }
        return output + "</ul>"
    }
};