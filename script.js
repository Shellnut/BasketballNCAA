const app = angular.module('myApp', []);

app.controller('homeCtrl', ['$scope', function($scope) {

    // Initiate values
    $scope.myIndex = 0;
    $scope.selections32 = [];
    $scope.selections16 = [];
    $scope.selections8 = [];
    $scope.selections4 = [];
    $scope.selections2 = [];
    $scope.selections1 = [];
    $scope.currentRound = 'Round of 64';
    $scope.winner;

    // Select team function
    $scope.selectTeam = async function(winner, loser, index) {

        // Stop the count!!
        if (index<126) {
            $scope.myIndex+=2;
        }

        // winner and loser info for bracket
        var info = {
            winner: winner.name,
            loser: loser.name
        };

        // this array determines the matchups
        $scope.tournament.push(winner);

        // this logic determines what the current round title should be
        if (index < 62) {
            $scope.currentRound = 'Round of 64';
        }
        else if (index >= 62 && index < 94) {
            $scope.currentRound = 'Round of 32';        
        }
        else if (index >= 94 && index < 110) {
            $scope.currentRound = 'Sweet 16';
        }
        else if (index >= 110 && index < 118) {
            $scope.currentRound = 'Elite 8';
        }
        else if (index >= 118 && index < 122) {
            $scope.currentRound = 'Final 4';
        }
        else if (index >= 122 && index < 124) {
            $scope.currentRound = 'Championship';
        }

        // This logic shows a pretty JSON summary at the bottom
        if (index < 64) {
            $scope.selections32.push(info)
        }
        else if (index >= 64 && index < 96) {
            $scope.selections16.push(info)
        }
        else if (index >= 96 && index < 112) {
            $scope.selections8.push(info)
        }
        else if (index >= 112 && index < 120) {
            $scope.selections4.push(info)
        }
        else if (index >= 120 && index < 124) {
            $scope.selections2.push(info)
        }
        else if (index >= 124 && index < 126) {
            $scope.winner = winner;
            $scope.selections1.push(info)
        }

    }

    // Tournament data. This is a slim version of schoolData.js

    var teams2025 = [
        "Auburn",
        "Alabama St.",
        "Louisville",
        "Creighton",
        "Michigan",
        "UC San Diego",
        "Texas A&M",
        "Yale Bulldogs",
        "Ole Miss",
        "Texas",
        "Iowa St.",
        "Lipscomb",
        "Marquette",
        "New Mexico",
        "Michigan St.",
        "Bryant",
        "Duke",
        "American",
        "Mississippi St.",
        "Baylor",
        "Oregon",
        "Liberty",
        "Arizona",
        "Akron",
        "BYU",
        "VCU",
        "Wisconsin",
        "Montana",
        "Saint Mary's (CA)",
        "Vanderbilt",
        "Alabama",
        "Robert Morris",
        "Florida",
        "Norfolk St.",
        "UConn",
        "Oklahoma",
        "Memphis",
        "Colorado St.",
        "Maryland",
        "Grand Canyon",
        "Missouri",
        "Drake",
        "Texas Tech",
        "UNCW",
        "Kansas",
        "Arkansas",
        "St. John's (NY)",
        "Omaha",
        "Houston",
        "SIUE",
        "Gonzaga",
        "Georgia",
        "Clemson",
        "McNeese",
        "Purdue",
        "High Point",
        "Illinois",
        "San Diego St.",
        "Kentucky",
        "Troy",
        "UCLA",
        "Utah St.",
        "Tennessee",
        "Wofford"
    ];

    $scope.tournament = []

    for (var i=0; i<teams2025.length; i++) {

        var team = teams2025[i]

        console.log(team);

        var logo = '';

        try {
            logo = schoolData.filter(val => val.ncaa_name === teams2025[i])[0].logos
        } catch (e) {
            console.log('1st attempt: cant find ', team, e)
        }

        if (!logo) {
            try {
                logo = schoolData.filter(val => val.reference_name === teams2025[i])[0].logos
            } catch (e) {
                console.log('2nd attempt: cant find ', team, e)
            }
        }

        $scope.tournament.push({
            "name": teams2025[i],
            "logo": logo
        })
    }

 
}]);