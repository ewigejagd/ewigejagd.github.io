var pledges = {

    data : {
        startdate: new Date("2020-02-17"),
        maj: {
            startpledge: "sc2",
            pledges: ["sc2", "bc1", "fg2", "sc1", "dc2", "eh1", "ws2", "fg1", "bc2", "dc1", "eh2", "ws1"],
        },
        glirion: {
            startpledge: "dfk",
            pledges: ["dfk", "vom", "coh2", "coa1", "ti", "bh", "ac", "sw", "coa2", "coh1", "vf", "blc"],
        },
        urgarlag: {
            startpledge: "fv",
            pledges: ["fv", "mgf", "lom", "icp", "rom", "wgt", "cos", "brf", "frh", "fl", "scp", "mhk", "mos", "dom"],
        }
    },

    getDungeonDetailsById: function(dungeonId, sectionId, callback) {
        var url = "https://ewigejagd.github.io/esodb/dungeon-de/" + dungeonId + ".js";
        fetch(url)
           .then(response => response.json())
           .then(json => callback(dungeonId, sectionId, json))
           .catch(error => callback(dungeonId, sectionId, null));
    },

    getDungeonIdByPledge: function(npc, daysfromnow) {
        var pledgeorder = null;
        switch (npc) {
            case "maj":
                pledgeorder = pledges.data.maj;
                break;
            case "glirion":
                pledgeorder = pledges.data.glirion;
                break;
            case "urgarlag":
                pledgeorder = pledges.data.urgarlag;
                break;
        }
        var date = new Date(new Date().getTime() + (86400000 * daysfromnow));
        var diff = parseInt((date.getTime() - pledges.data.startdate.getTime()) / (24 * 3600 * 1000));
        var indexStart = pledgeorder.pledges.indexOf(pledgeorder.startpledge);
        var indexRaw = diff % pledgeorder.pledges.length;
        var index = (indexStart + indexRaw) % pledgeorder.pledges.length;
        return pledgeorder.pledges[index];
    },

    load: function() {
        var headers = document.getElementsByTagName('h2')
        for (var i = 0, len = headers.length; len > i; i++) {
            var id = headers[i].getAttribute("id");
            var daysfromnow = parseInt(headers[i].getAttribute("daysfromnow"));
            var date = new Date(new Date().getTime() + (86400000 * daysfromnow));

            document.getElementById(id).innerHTML = "Gelöbnisse, " + date.toLocaleDateString('de-DE', { month: '2-digit', day: '2-digit' });
        }

        var sections = document.getElementsByTagName('section')
        for (var i = 0, len = sections.length; len > i; i++) {
            var sectionId = sections[i].getAttribute("id");
            var npc = sections[i].getAttribute("npc");
            var daysfromnow = parseInt(sections[i].getAttribute("daysfromnow"));

            var dungeonId = pledges.getDungeonIdByPledge(npc, daysfromnow);
            pledges.getDungeonDetailsById(dungeonId, sectionId, (dungeonId, sectionId, json) => {
                if (json !== null) {
                    document.getElementById(sectionId + "-image").style = "background-image:url("+json.image+")";
                    document.getElementById(sectionId + "-name").innerHTML = json.name;
                    document.getElementById(sectionId + "-npc").innerHTML = json.npc;
                    document.getElementById(sectionId + "-monster").innerHTML = json.set.monster.name;
                    document.getElementById(sectionId + "-monster").href = "https://www.elderscrollsbote.de/set=" + json.set.monster.id;
                    document.getElementById(sectionId + "-light").innerHTML = json.set.light.name;
                    document.getElementById(sectionId + "-light").href = "https://www.elderscrollsbote.de/set=" + json.set.light.id;
                    document.getElementById(sectionId + "-medium").innerHTML = json.set.medium.name;
                    document.getElementById(sectionId + "-medium").href = "https://www.elderscrollsbote.de/set=" + json.set.medium.id;
                    document.getElementById(sectionId + "-heavy").innerHTML = json.set.heavy.name;
                    document.getElementById(sectionId + "-heavy").href = "https://www.elderscrollsbote.de/set=" + json.set.heavy.id;
                } else {
                    document.getElementById(sectionId + "-name").innerHTML = dungeonId;
                }
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', pledges.load);