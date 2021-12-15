$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/JobSearchTest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cJOB TITLE\u003e\" in job title field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cLOCATION\u003e\" in location field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cDISTANCE\u003e\" in the distance field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cMINIMUM SALARY\u003e\" data in the minimum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cMAXIMUM SALARY\u003e\" data in the maximum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"\u003cSALARY TYPE\u003e\" salary type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"\u003cJOB TYPE\u003e\" job type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"\u003cRESULT\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "JOB TITLE",
        "LOCATION",
        "DISTANCE",
        "MINIMUM SALARY",
        "MAXIMUM SALARY",
        "SALARY TYPE",
        "JOB TYPE",
        "RESULT"
      ],
      "line": 20,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;1"
    },
    {
      "cells": [
        "Software Tester",
        "Crawley",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Software Tester jobs in Crawley"
      ],
      "line": 21,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2"
    },
    {
      "cells": [
        "Software Automation Tester",
        "Harrow",
        "up to 15 miles",
        "30000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Software Automation Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;3"
    },
    {
      "cells": [
        "Manual Software Tester",
        "West Sussex",
        "up to 7 miles",
        "30000",
        "60000",
        "Per annum",
        "Any",
        "Manual Software Tester jobs in West Sussex"
      ],
      "line": 23,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;4"
    },
    {
      "cells": [
        "Retail Manager",
        "Horley",
        "up to 25 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Retail Manager jobs in Horley"
      ],
      "line": 24,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "HA1 1AB",
        "up to 10 miles",
        "300",
        "400",
        "Per day",
        "Contract",
        "Contract Automation Tester jobs in HA1 1AB"
      ],
      "line": 25,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;6"
    },
    {
      "cells": [
        "Research Scientist",
        "SS12 0NY",
        "up to 50 miles",
        "500",
        "800",
        "Per day",
        "Contract",
        "Contract Research Scientist jobs in SS12 0NY"
      ],
      "line": 26,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;7"
    },
    {
      "cells": [
        "Software Developer",
        "London",
        "up to 35 miles",
        "45000",
        "75000",
        "Per annum",
        "Permanent",
        "Permanent Software Developer jobs in London"
      ],
      "line": 27,
      "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35277282100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 3100504000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Crawley\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Software Tester jobs in Crawley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 705046200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Crawley",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 205038000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 407921300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 271387500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 647382100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 109142200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 64868600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 101035600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 123374900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Tester jobs in Crawley",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 8143615100,
  "status": "passed"
});
formatter.after({
  "duration": 1766054200,
  "status": "passed"
});
formatter.before({
  "duration": 8121430800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 443236900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Automation Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Harrow\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 15 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Software Automation Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 654204900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 149989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 111401800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 421860600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 251331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 99394200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 65495700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 108841900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 144563400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Automation Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 7013377600,
  "status": "passed"
});
formatter.after({
  "duration": 900525500,
  "status": "passed"
});
formatter.before({
  "duration": 6442291400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 420427200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Manual Software Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"West Sussex\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 7 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"60000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Any\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Manual Software Tester jobs in West Sussex\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Manual Software Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 596724800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West Sussex",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 140628800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 103999900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 197289500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 439628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 95064800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 71341000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 63731900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 126397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manual Software Tester jobs in West Sussex",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 5915256500,
  "status": "passed"
});
formatter.after({
  "duration": 1197663900,
  "status": "passed"
});
formatter.before({
  "duration": 5895244900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 493603500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Retail Manager\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"Horley\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 25 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"30000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Retail Manager jobs in Horley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Retail Manager",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 329273100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Horley",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 321723100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 105550100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 162318100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 397886000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 140022100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 116102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 91357900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 126398600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Retail Manager jobs in Horley",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6564811200,
  "status": "passed"
});
formatter.after({
  "duration": 1135129800,
  "status": "passed"
});
formatter.before({
  "duration": 6150097300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 380765900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Automation Tester\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"HA1 1AB\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 10 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"300\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"400\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Automation Tester jobs in HA1 1AB\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 165837800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1AB",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 113652500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 100496400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 1181921600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (245, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 370px;\" cd_frame_id_\u003d\"6c2faede6e009858a4fef0ecd81b3d95\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1f4d0b6f713b7a151509b93ef7b64f88, clickElement {id\u003d70199a35-ea68-40d6-9b88-f5b2c3b9abd5}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:60629}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60629/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (1f4d0b6f713b7a151509b93ef7b64f88)] -\u003e id: toggle-hp-search]\nSession ID: 1f4d0b6f713b7a151509b93ef7b64f88\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:28)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOption(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobSearchTestSteps.iClickOnTheMoreSearchOptionLink(JobSearchTestSteps.java:32)\r\n\tat ✽.And I click on the More Search Option Link(src/test/java/resources/featurefile/JobSearchTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Automation Tester jobs in HA1 1AB",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1193850500,
  "status": "passed"
});
formatter.before({
  "duration": 7309489500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 379938500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Research Scientist\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"SS12 0NY\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 50 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"500\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"800\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Contract Research Scientist jobs in SS12 0NY\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Research Scientist",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 590622600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS12 0NY",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 140690400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 166911600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 453197700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 223738500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 87155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 107351100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 101565400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 144305600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Research Scientist jobs in SS12 0NY",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 7009872100,
  "status": "passed"
});
formatter.after({
  "duration": 1075550800,
  "status": "passed"
});
formatter.before({
  "duration": 8565210300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I accept cookies",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 414188100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should be ablt to search job successfully",
  "description": "",
  "id": "job-search-test;verify-user-should-be-ablt-to-search-job-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I enter \"Software Developer\" in job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"London\" in location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"up to 35 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the More Search Option Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"45000\" data in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"75000\" data in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the \"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the \"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Result \"Permanent Software Developer jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Software Developer",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInJobTitleField(String)"
});
formatter.result({
  "duration": 562094400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterInLocationField(String)"
});
formatter.result({
  "duration": 188417000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchTestSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 206796600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 204654500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 364335900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 9
    }
  ],
  "location": "JobSearchTestSteps.iEnterDataInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 128191600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheSalaryType(String)"
});
formatter.result({
  "duration": 61886600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchTestSteps.iSelectTheJobType(String)"
});
formatter.result({
  "duration": 92615800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 128663600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Developer jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 6464147900,
  "status": "passed"
});
formatter.after({
  "duration": 1054477900,
  "status": "passed"
});
});