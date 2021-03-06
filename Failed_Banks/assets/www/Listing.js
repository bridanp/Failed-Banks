/*
 * JS for Listing generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '8656a248-f7bf-41c0-8b4e-c3f0dd08ee31';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Listing",
    "location": "Listing.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "About",
    "location": "About.html"
}];

function Listing_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar_77': 'Listing_mobilenavbar_77',
        'mobilenavbaritem_78': 'Listing_mobilenavbaritem_78',
        'mobilenavbaritem_79': 'Listing_mobilenavbaritem_79',
        'mobilenavbaritem_80': 'Listing_mobilenavbaritem_80',
        'mobilegrid_3': 'Listing_mobilegrid_3',
        'mobilegridcell_4': 'Listing_mobilegridcell_4',
        'mobilelabel_8': 'Listing_mobilelabel_8',
        'mobilegridcell_5': 'Listing_mobilegridcell_5',
        'mobilelink_81': 'Listing_mobilelink_81',
        'mobilegrid_13': 'Listing_mobilegrid_13',
        'mobilegridcell_14': 'Listing_mobilegridcell_14',
        'mobilelabel_18': 'Listing_mobilelabel_18',
        'mobilegridcell_15': 'Listing_mobilegridcell_15',
        'mobilelabel_acqrbank': 'Listing_mobilelabel_acqrbank',
        'mobilegrid_20': 'Listing_mobilegrid_20',
        'mobilegridcell_21': 'Listing_mobilegridcell_21',
        'mobilelabel_25': 'Listing_mobilelabel_25',
        'mobilegridcell_22': 'Listing_mobilegridcell_22',
        'mobilelabel_acqdate': 'Listing_mobilelabel_acqdate',
        'mobilegrid_29': 'Listing_mobilegrid_29',
        'mobilegridcell_30': 'Listing_mobilegridcell_30',
        'mobilelabel_34': 'Listing_mobilelabel_34',
        'mobilegridcell_31': 'Listing_mobilegridcell_31',
        'mobilelabel_city': 'Listing_mobilelabel_city',
        'mobilegrid_50': 'Listing_mobilegrid_50',
        'State': 'Listing_State',
        'mobilelabel_55': 'Listing_mobilelabel_55',
        'mobilegridcell_52': 'Listing_mobilegridcell_52',
        'mobilelabel_state': 'Listing_mobilelabel_state',
        'mobilegrid_36': 'Listing_mobilegrid_36',
        'mobilegridcell_37': 'Listing_mobilegridcell_37',
        'mobilelabel_41': 'Listing_mobilelabel_41',
        'mobilegridcell_38': 'Listing_mobilegridcell_38',
        'mobilelabel_cert': 'Listing_mobilelabel_cert',
        'mobilegrid_63': 'Listing_mobilegrid_63',
        'mobilegridcell_64': 'Listing_mobilegridcell_64',
        'prevButton': 'Listing_prevButton',
        'mobilegridcell_65': 'Listing_mobilegridcell_65',
        'nextButton': 'Listing_nextButton',
        'mobilegrid_83': 'Listing_mobilegrid_83',
        'mobilegridcell_84': 'Listing_mobilegridcell_84',
        'html_88': 'Listing_html_88'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Listing_get_banks_onsuccess_mapping_0"] = {
        "homeScreen": "Listing",
        "directions": [

        {
            "from_name": "get_banks",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Listing",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][0]['Acquiring_Institution']",
                "target": "$['mobilelabel_acqrbank:text']"

            },

            {

                "source": "$['body'][0]['Closing_Date']",
                "target": "$['mobilelabel_acqdate:text']"

            },

            {

                "source": "$['body'][0]['City']",
                "target": "$['mobilelabel_city:text']"

            },

            {

                "source": "$['body'][0]['ST']",
                "target": "$['mobilelabel_state:text']"

            },

            {

                "source": "$['body'][0]['CERT']",
                "target": "$['mobilelabel_cert:text']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobilegrid_3']"

            },

            {

                "source": "$['body'][i]['Link']",
                "target": "$['mobilegrid_3']['mobilelink_81:url']"

            },

            {

                "source": "$['body'][i]['Bank_Name']",
                "target": "$['mobilegrid_3']['mobilelink_81:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Listing_get_banks_onbeforesend_mapping_0"] = {
        "homeScreen": "Listing",
        "directions": [

        {
            "from_name": "limit",
            "from_type": "LOCAL_STORAGE",

            "to_name": "get_banks",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['limit']"

            }

            ]
        },

        {
            "from_name": "skip",
            "from_type": "LOCAL_STORAGE",

            "to_name": "get_banks",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['skip']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.get_banks = Apperyio.datasources.get_banks = new Apperyio.DataSource(FailedBanksDB_FailedBanksComp_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Listing_get_banks_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Listing");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Listing_get_banks_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Listing';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Listing_onLoad = function() {
            Listing_elementsExtraJS();

            localStorage.setItem('limit', 1);
            localStorage.setItem('skip', 0);
            localStorage.setItem('total', 536);
            Apperyio('prevButton').hide();
            try {
                get_banks.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            Listing_deviceEvents();
            Listing_windowEvents();
            Listing_elementsEvents();
        };

    // screen window events


    function Listing_windowEvents() {

        $('#Listing').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Listing_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Listing_elementsExtraJS() {
        // screen (Listing) extra code

    };

    // screen elements handler


    function Listing_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Listing_mobileheader [name="mobilenavbaritem_78"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Listing', {
                        reverse: false
                    });

                }
            },
        }, '#Listing_mobileheader [name="mobilenavbaritem_78"]');
        $(document).off("click", '#Listing_mobileheader [name="mobilenavbaritem_79"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });

                }
            },
        }, '#Listing_mobileheader [name="mobilenavbaritem_79"]');
        $(document).off("click", '#Listing_mobileheader [name="mobilenavbaritem_80"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('About', {
                        reverse: false
                    });

                }
            },
        }, '#Listing_mobileheader [name="mobilenavbaritem_80"]');

        $(document).off("click", '#Listing_mobilecontainer [name="prevButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var skip = parseInt(localStorage.getItem('skip'));
                    var limit = parseInt(localStorage.getItem('limit'));
                    var total = parseInt(localStorage.getItem('total'));
                    if (limit + skip > 0) {
                        localStorage.setItem('skip', skip - limit);
                        get_banks.execute({});
                        if (skip - limit === 0) {
                            Apperyio('prevButton').hide();
                        }
                        if (skip - limit < total - limit) {
                            Apperyio('nextButton').show();
                        }
                    };

                }
            },
        }, '#Listing_mobilecontainer [name="prevButton"]');

        $(document).off("click", '#Listing_mobilecontainer [name="nextButton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var skip = parseInt(localStorage.getItem('skip'));
                    var limit = parseInt(localStorage.getItem('limit'));
                    var total = parseInt(localStorage.getItem('total'));
                    if (limit + skip < total) {
                        localStorage.setItem('skip', limit + skip);
                        get_banks.execute({});
                        if (limit + skip == limit) {
                            Apperyio('prevButton').show();
                        }
                        if (limit + skip == total - limit) {
                            Apperyio('nextButton').hide();
                        }
                    };

                }
            },
        }, '#Listing_mobilecontainer [name="nextButton"]');

    };

    $(document).off("pagebeforeshow", "#Listing").on("pagebeforeshow", "#Listing", function(event, ui) {
        Apperyio.CurrentScreen = "Listing";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Listing_onLoad();
};

$(document).off("pagecreate", "#Listing").on("pagecreate", "#Listing", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Listing_js();
});