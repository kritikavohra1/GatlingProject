var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "931",
        "ok": "931",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "560",
        "ok": "560",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles1": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles2": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "percentiles3": {
        "total": "925",
        "ok": "925",
        "ko": "-"
    },
    "percentiles4": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_goto----page--f299a": {
        type: "REQUEST",
        name: "Goto /#{page}",
path: "Goto /#{page}",
pathFormatted: "req_goto----page--f299a",
stats: {
    "name": "Goto /#{page}",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "931",
        "ok": "931",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "906",
        "ok": "906",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles1": {
        "total": "907",
        "ok": "907",
        "ko": "-"
    },
    "percentiles2": {
        "total": "919",
        "ok": "919",
        "ko": "-"
    },
    "percentiles3": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "percentiles4": {
        "total": "931",
        "ok": "931",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_goto----page--r-48685": {
        type: "REQUEST",
        name: "Goto /#{page} Redirect 1",
path: "Goto /#{page} Redirect 1",
pathFormatted: "req_goto----page--r-48685",
stats: {
    "name": "Goto /#{page} Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "213",
        "ok": "213",
        "ko": "-"
    },
    "percentiles2": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles3": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "percentiles4": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
