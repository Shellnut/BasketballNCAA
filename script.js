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
    $scope.tournament = [
        {
            "name": "UConn",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/uconn.svg"
        },
        {
            "name": "Stetson",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/stetson.svg"
        },
        {
            "name": "Fla. Atlantic",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/fla-atlantic.svg"
        },
        {
            "name": "Northwestern",
            "logo": "https://static.wikia.nocookie.net/ncaa-athletics/images/7/72/Northwestern_Wildcats.jpg/revision/latest?cb=20180311044308"
        },
        {
            "name": "San Diego St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/san-diego-st.svg"
        },
        {
            "name": "UAB",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/uab.svg"
        },
        {
            "name": "Auburn",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/auburn.svg"
        },
        {
            "name": "Yale Bulldogs",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/yale.svg"
        },
        {
            "name": "BYU",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/byu.svg"
        },
        {
            "name": "Duquesne",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Duquesne_Dukes_logo.svg/1843px-Duquesne_Dukes_logo.svg.png"
        },
        {
            "name": "Illinois",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/illinois.svg"
        },
        {
            "name": "Morehead St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/morehead-st.svg"
        },
        {
            "name": "Washington St.",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Washington_State_Cougars_logo.svg/1200px-Washington_State_Cougars_logo.svg.png"
        },
        {
            "name": "Drake",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/drake.svg"
        },
        {
            "name": "Iowa St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/iowa-st.svg"
        },
        {
            "name": "South Dakota St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/south-dakota-st.svg"
        },
        {
            "name": "Houston",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Houston_Cougars_primary_logo.svg/630px-Houston_Cougars_primary_logo.svg.png"
        },
        {
            "name": "Longwood",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/longwood.svg"
        },
        {
            "name": "Nebraska",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nebraska_Cornhuskers_logo%2C_1992%E2%80%932003.svg/987px-Nebraska_Cornhuskers_logo%2C_1992%E2%80%932003.svg.png"
        },
        {
            "name": "Texas A&M",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/texas-am.svg"
        },
        {
            "name": "Wisconsin",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/1200px-Wisconsin_Badgers_logo.svg.png"
        },
        {
            "name": "James Madison",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/james-madison.svg"
        },
        {
            "name": "Duke",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/300px-Duke_Athletics_logo.svg.png"
        },
        {
            "name": "Vermont",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/vermont.svg"
        },
        {
            "name": "Texas Tech",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/texas-tech.svg"
        },
        {
            "name": "NC State",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/north-carolina-st.svg"
        },
        {
            "name": "Kentucky",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/kentucky.svg"
        },
        {
            "name": "Oakland",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/oakland.svg"
        },
        {
            "name": "Florida",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/florida.svg"
        },
        {
            "name": "Colorado St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/colorado-st.svg"
        },
        {
            "name": "Marquette",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/marquette.svg"
        },
        {
            "name": "Western Ky.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/western-ky.svg"
        },
        {
            "name": "North Carolina",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/north-carolina.svg"
        },
        {
            "name": "Wagner",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/wagner.svg"
        },
        {
            "name": "Mississippi St.",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mississippi_State_Bulldogs_logo.svg/2560px-Mississippi_State_Bulldogs_logo.svg.png"
        },
        {
            "name": "Michigan St.",
            "logo": "https://1000marcas.net/wp-content/uploads/2020/03/michigan-state-logo-1-600x480.png"
        },
        {
            "name": "Saint Mary's (CA)",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/st-marys-ca.svg"
        },
        {
            "name": "Grand Canyon",
            "logo": "https://pbs.twimg.com/media/CH5TDubUkAA_Hg6.jpg"
        },
        {
            "name": "Alabama",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/alabama.svg"
        },
        {
            "name": "Charleston So.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/charleston-so.svg"
        },
        {
            "name": "Clemson",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clemson_Tigers_logo.svg/1071px-Clemson_Tigers_logo.svg.png"
        },
        {
            "name": "New Mexico",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/new-mexico.svg"
        },
        {
            "name": "Baylor",
            "logo": "https://i.pinimg.com/originals/f9/1a/eb/f91aeba79685857c8b2757abcc20748a.png"
        },
        {
            "name": "Colgate",
            "logo": "https://www.colgate.edu/sites/default/files/2020-10/Col_Athletics_C_RGB_500_0.png"
        },
        {
            "name": "Dayton",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dayton_Flyers_logo.svg/1200px-Dayton_Flyers_logo.svg.png"
        },
        {
            "name": "Nevada",
            "logo": "https://upload.wikimedia.org/wikipedia/en/2/21/Nevada_Wolf_Pack_logo.svg"
        },
        {
            "name": "Arizona",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/arizona.svg"
        },
        {
            "name": "Long Beach St.",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/2/29/Long_Beach_State_Athletics_logo.svg"
        },
        {
            "name": "Purdue",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/purdue.svg"
        },
        {
            "name": "Grambling",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/grambling.svg"
        },
        {
            "name": "Utah St.",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Utah_State_Aggies_logo.svg/640px-Utah_State_Aggies_logo.svg.png"
        },
        {
            "name": "TCU",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TCU_Horned_Frogs_logo.svg/1200px-TCU_Horned_Frogs_logo.svg.png"
        },
        {
            "name": "Gonzaga",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/gonzaga.svg"
        },
        {
            "name": "McNeese",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/mcneese-st.svg"
        },
        {
            "name": "Kansas",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/kansas.svg"
        },
        {
            "name": "Samford",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/samford.svg"
        },
        {
            "name": "South Carolina",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/south-carolina.svg"
        },
        {
            "name": "Oregon",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/oregon.svg"
        },
        {
            "name": "Creighton",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/creighton.svg"
        },
        {
            "name": "Akron",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/akron.svg"
        },
        {
            "name": "Texas",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Texas_Longhorns_logo.svg/1200px-Texas_Longhorns_logo.svg.png"
        },
        {
            "name": "Colorado",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/colorado.svg"
        },
        {
            "name": "Tennessee",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tennessee_Volunteers_logo.svg/2048px-Tennessee_Volunteers_logo.svg.png"
        },
        {
            "name": "Saint Peter's",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/saint-peters.svg"
        }
    ];


 
}]);