package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._



class ApiTest1 extends Simulation{

  //protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api/users")

  //scenario
  val scn = scenario("Get API Request Demo")
    .exec(
      http("Get Single User")
        .get("/2")
        .check(
          status.is(200),
          jsonPath("$.data.first_name").is("Janet"))
    )
    .pause(1)

  //setUp
  setUp(
    scn.inject(rampUsers(10).during(5))
      .protocols(httpProtocol)
  )


}
