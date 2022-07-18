package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation1 extends Simulation {

	val httpProtocol = http
		.baseUrl("https://opensource-demo.orangehrmlive.com")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0")

	val headers_0 = Map(
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "none",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Origin" -> "https://opensource-demo.orangehrmlive.com",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_2 = Map(
		"Accept" -> "*/*",
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"X-Requested-With" -> "XMLHttpRequest")

	val headers_4 = Map(
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")



	val scn = scenario("RecordedSimulation1")
		.exec(http("Login Page")
			.get("/")
			.headers(headers_0)
			.check(bodyBytes.is(RawFileBody("com/gatling/tests/recordedsimulation1/0000_response.html"))))
		.pause(22)
		.exec(http("Login with valid creds")
			.post("/index.php/auth/validateCredentials")
			.headers(headers_1)
			.formParam("actionID", "")
			.formParam("hdnUserTimeZoneOffset", "5.5")
			.formParam("installation", "")
			.formParam("_csrf_token", "85ffb9837979bebb5c47e1c2498af55b")
			.formParam("txtUsername", "Admin")
			.formParam("txtPassword", "admin123")
			.formParam("Submit", "LOGIN")
			.check(bodyBytes.is(RawFileBody("com/gatling/tests/recordedsimulation1/0001_response.html"))))
		.pause(2)
		.exec(http("Logout")
			.get("/index.php/dashboard/employeeDistribution")
			.headers(headers_2)
			.resources(http("request_3")
			.get("/index.php/dashboard/pendingLeaveRequests")
			.headers(headers_2)
			.check(bodyBytes.is(RawFileBody("com/gatling/tests/recordedsimulation1/0003_response.html"))))
			.check(bodyBytes.is(RawFileBody("com/gatling/tests/recordedsimulation1/0002_response.html"))))
		.pause(17)
		.exec(http("request_4")
			.get("/index.php/auth/logout")
			.headers(headers_4)
			.check(bodyBytes.is(RawFileBody("com/gatling/tests/recordedsimulation1/0004_response.html"))))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}