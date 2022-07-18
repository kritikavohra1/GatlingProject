package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SearchAndEditComputer extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources()
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36")

	val search = exec(http("Home")
		.get("/computers")
		.resources(http("Search")
			.get("/assets/css/main.css"),
			http("Select")
				.get("/assets/css/bootstrap.min.css")))
		.pause(2)
		.exec(http("request_3")
			.get("/computers?f=ACE")
			.resources(http("request_4")
				.get("/assets/css/main.css"),
				http("request_5")
					.get("/assets/css/bootstrap.min.css")))
		.pause(3)
		.exec(http("request_6")
			.get("/computers/381")
			.resources(http("request_7")
				.get("/assets/css/main.css"),
				http("request_8")
					.get("/assets/css/bootstrap.min.css")))
		.pause(4)

	val edit = exec(http("request_9")
		.post("/computers/381")
		.formParam("name", "ACE")
		.formParam("introduced", "2010-12-10")
		.formParam("discontinued", "2022-10-12")
		.formParam("company", "2"))
		.pause(4)


	val scn = scenario("SearchAndEditComputer").exec(search, edit)

//	val users = scenario("Users").exec(search)
//
//	val admins = scenario("Admins").exec(search, edit)

//	setUp(
//		users.inject(rampUsers(10).during(10)),
//		admins.inject(rampUsers(4).during(10))
//	).protocols(httpProtocol)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)

}