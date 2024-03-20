const app = angular.module('myApp', []);

app.controller('homeCtrl', ['$scope', function($scope) {

    $scope.hello = 'hello';

    $scope.myIndex = 0;

    $scope.selections = [];

    $scope.selectTeam = function(test) {
        console.log('team selected', test);
        $scope.myIndex+=2;
        $scope.selections.push(test.name)
        $scope.tournament.push(test)
    }

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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/northwestern.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/duquesne.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/washington-st.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/nebraska.svg"
        },
        {
            "name": "Texas A&M",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/texas-am.svg"
        },
        {
            "name": "Wisconsin",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/wisconsin.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/mississippi-st.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/grand-canyon.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/clemson.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/dayton.svg"
        },
        {
            "name": "Nevada",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/nevada.svg"
        },
        {
            "name": "Arizona",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/arizona.svg"
        },
        {
            "name": "Long Beach St.",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/long-beach-st.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/utah-st.svg"
        },
        {
            "name": "TCU",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/tcu.svg"
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
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/tennessee.svg"
        },
        {
            "name": "Saint Peter's",
            "logo": "https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgd/saint-peters.svg"
        }
    ];


 
}]);