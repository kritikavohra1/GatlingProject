var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2787",
        "ok": "2787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1783",
        "ok": "1783",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "481",
        "ok": "481",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1733",
        "ok": "1733",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2030",
        "ok": "2030",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2569",
        "ok": "2569",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2743",
        "ok": "2743",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
        "ko": "-"
    }
},
contents: {
"req_get-single-user-27e62": {
        type: "REQUEST",
        name: "Get Single User",
path: "Get Single User",
pathFormatted: "req_get-single-user-27e62",
stats: {
    "name": "Get Single User",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1095",
        "ok": "1095",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2787",
        "ok": "2787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1783",
        "ok": "1783",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "481",
        "ok": "481",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1733",
        "ok": "1733",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2030",
        "ok": "2030",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2569",
        "ok": "2569",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2743",
        "ok": "2743",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
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
