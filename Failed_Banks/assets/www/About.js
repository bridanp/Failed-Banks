/*
 * JS for About generated by Appery.io
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

function About_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar_77': 'About_mobilenavbar_77',
        'mobilenavbaritem_78': 'About_mobilenavbaritem_78',
        'mobilenavbaritem_79': 'About_mobilenavbaritem_79',
        'mobilenavbaritem_80': 'About_mobilenavbaritem_80',
        'mobilegrid_89': 'About_mobilegrid_89',
        'mobilegridcell_90': 'About_mobilegridcell_90',
        'mobilelabel_97': 'About_mobilelabel_97',
        'mobilegridcell_92': 'About_mobilegridcell_92',
        'mobilelabel_98': 'About_mobilelabel_98',
        'mobilegridcell_94': 'About_mobilegridcell_94',
        'mobilelabel_99': 'About_mobilelabel_99',
        'mobilegridcell_95': 'About_mobilegridcell_95',
        'mobilegridcell_96': 'About_mobilegridcell_96'
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

    Apperyio.mappings["About_get_banks_clone_1_onbeforesend_mapping_0"] = {
        "homeScreen": "About",
        "directions": [

        {
            "from_name": "limit",
            "from_type": "LOCAL_STORAGE",

            "to_name": "get_banks_clone_1",
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

            "to_name": "get_banks_clone_1",
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

    Apperyio.mappings["About_get_banks_clone_1_onsuccess_mapping_0"] = {
        "homeScreen": "About",
        "directions": []
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.get_banks_clone_1 = Apperyio.datasources.get_banks_clone_1 = new Apperyio.DataSource(FailedBanksDB_FailedBanksComp_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["About_get_banks_clone_1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("About");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["About_get_banks_clone_1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'About';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var About_onLoad = function() {
            About_elementsExtraJS();

            localStorage.setItem('limit', 1);
            localStorage.setItem('skip', 0);
            localStorage.setItem('total', 536);
            Apperyio('prevButton').hide();
            try {
                get_banks_clone_1.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            About_deviceEvents();
            About_windowEvents();
            About_elementsEvents();
        };

    // screen window events


    function About_windowEvents() {

        $('#About').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function About_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function About_elementsExtraJS() {
        // screen (About) extra code

    };

    // screen elements handler


    function About_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#About_mobileheader [name="mobilenavbaritem_78"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('About', {
                        reverse: false
                    });

                }
            },
        }, '#About_mobileheader [name="mobilenavbaritem_78"]');
        $(document).off("click", '#About_mobileheader [name="mobilenavbaritem_79"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('startScreen', {
                        reverse: false
                    });

                }
            },
        }, '#About_mobileheader [name="mobilenavbaritem_79"]');
        $(document).off("click", '#About_mobileheader [name="mobilenavbaritem_80"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('About', {
                        reverse: false
                    });

                }
            },
        }, '#About_mobileheader [name="mobilenavbaritem_80"]');

    };

    $(document).off("pagebeforeshow", "#About").on("pagebeforeshow", "#About", function(event, ui) {
        Apperyio.CurrentScreen = "About";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    About_onLoad();
};

$(document).off("pagecreate", "#About").on("pagecreate", "#About", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    About_js();
});