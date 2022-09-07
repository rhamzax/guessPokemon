const regionBound = 
[
    {
        id: 1,
        title: "Kanto",
        start: 1,
        end:151,
    },
    {
        id: 2,
        title: "Johto",
        start: 152,
        end: 251,
    },
    {
        id: 3,
        title: "Hoenn",
        start: 252,
        end:386,
    },
    {
        id: 4,
        title: "Sinnoh",
        start: 387,
        end:493,
    },
    {
        id: 5,
        title: "Unova",
        start: 494,
        end: 649,
    },
    {
        id: 6,
        title: "Kalos",
        start: 650,
        end: 721,
    },
    {
        id: 7,
        title: "Alola",
        start: 722,
        end:809,
    },
    {
        id: 8,
        title: "Galar",
        start: 810,
        end: 898,
    },
    {
        id: 9,
        title: "All Regions",
        start: 1,
        end: 898,
    },
]

function randomNum(start, end){
    return Math.floor(Math.random() * (end-start)) + start;
}