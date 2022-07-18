package com.gatling.tests.api

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostPutDeleteAPIDemo extends Simulation{

  // protocol
  val httpProtocol = http
    .baseUrl("https://reqres.in/api/")

  // scenario
  val createUserScn = scenario("Create User")
    .exec(
      http("Create User Request")
        .post("/users")
        .header("content-type", "application/json")
        .asJson
        .body(RawFileBody("src/test/resources/user.json")).asJson
//        .body(StringBody(
//          """
//            |{
//            |    "name": "John",
//            |    "job": "leader"
//            |}
//            |""".stripMargin)).asJson
        .check(
          status is 201,
          jsonPath("$.name") is "John"
        )
    )
    .pause(1)



  val updateUserScn = scenario("Update User")
    .exec(
      http("Update User Request")
        .put("/users/2")
        .body(RawFileBody("src/test/resources/user.json")).asJson
        .check(
          status is 200,
          jsonPath("$.name") is "John"
        )
    )
    .pause(1)

  val deleteUserScn = scenario("Delete User")
    .exec(
      http("Delete User Request")
        .delete("/users/2")
        .check(status is 204)
    )
    .pause(1)

  // setup
  setUp(
    createUserScn.inject(rampUsers(10).during(5)),
    updateUserScn.inject(rampUsers(5).during(3)),
    deleteUserScn.inject(rampUsers(3).during(2))
  ).protocols(httpProtocol)

}
