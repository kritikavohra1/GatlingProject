package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputerDatabase extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en-US;q=0.9,en;q=0.8")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36")



	val scn = scenario("ComputerDatabase")
		.exec(http("ComputersDatabasePage")
			.get("/computers"))
		.pause(1)
		.exec(http("NewComputersPage")
			.get("/computers/new"))
		.pause(1)
		.exec(http("CreateNewComputer")
			.post("/computers")
			.formParam("name", "MyComputer1")
			.formParam("introduced", "2022-07-15")
			.formParam("discontinued", "2022-07-16")
			.formParam("company", "1"))
		.pause(1)
		.exec(http("FilterComputer")
			.get("/computers?f=MyComputer1"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}