/*
 * Service settings
 */
var FailedBanksDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54c1b943e4b023aa09a950c4"
}

/*
 * Services
 */
InAppBrowserService = new Apperyio.InAppBrowser({});

var FailedBanksDB_FailedBanksComp_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/FailedBanksComp',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': FailedBanksDB_settings
});

var FailedBanksDB_FailedBanks_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/FailedBanksComp',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': FailedBanksDB_settings
});