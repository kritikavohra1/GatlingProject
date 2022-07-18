var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "428",
        "ok": "-",
        "ko": "428"
    },
    "maxResponseTime": {
        "total": "542",
        "ok": "-",
        "ko": "542"
    },
    "meanResponseTime": {
        "total": "480",
        "ok": "-",
        "ko": "480"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "percentiles1": {
        "total": "478",
        "ok": "-",
        "ko": "478"
    },
    "percentiles2": {
        "total": "483",
        "ok": "-",
        "ko": "483"
    },
    "percentiles3": {
        "total": "530",
        "ok": "-",
        "ko": "530"
    },
    "percentiles4": {
        "total": "540",
        "ok": "-",
        "ko": "540"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_create-user-req-b03b0": {
        type: "REQUEST",
        name: "Create User Request",
path: "Create User Request",
pathFormatted: "req_create-user-req-b03b0",
stats: {
    "name": "Create User Request",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "428",
        "ok": "-",
        "ko": "428"
    },
    "maxResponseTime": {
        "total": "542",
        "ok": "-",
        "ko": "542"
    },
    "meanResponseTime": {
        "total": "480",
        "ok": "-",
        "ko": "480"
    },
    "standardDeviation": {
        "total": "37",
        "ok": "-",
        "ko": "37"
    },
    "percentiles1": {
        "total": "478",
        "ok": "-",
        "ko": "478"
    },
    "percentiles2": {
        "total": "483",
        "ok": "-",
        "ko": "483"
    },
    "percentiles3": {
        "total": "530",
        "ok": "-",
        "ko": "530"
    },
    "percentiles4": {
        "total": "540",
        "ok": "-",
        "ko": "540"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 5,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
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
