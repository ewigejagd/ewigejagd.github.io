---
layout: post
title: Test build
author: Dorios
subtitle: Build to test template
tags: [Build]
comments: true
updated: false
eso:
    class: Hüter
    race:  Nord
    attributes:
        magicka:  0
        health:   0
        stamina: 64
    skillbar:
        front: [442,706,445,685,716,513]
        back:  [417,732,725,713,682,718]
    mundus: Krieger
    armor:
        light:  1
        medium: 5
        heavy:  1
    races:
        title: Mein Favorit ist der Nord
        data:  [Nord,Khajiit,Dunkelelf,Rothwardone,Waldelf,Kaiserlicher]
    skills:
#       skill_active:
#           title: Aktive Fertigkeiten
#           data:
        skill_passive:
            title: Passive Fertigkeiten
            data:
                0:
                    name: Dunkle Magie
                    skills:
                        252: Unheiliges Wissen
                        251: Blutmagie
                        250: Persistenz
                        253: Ausnutzen
                1:
                    name: Daedrische Beschwörung
                    skills:
                        254: Fels der Macht
                        257: Daedrischer Schutz
                        256: Meisterbeschwörer
                2:
                    name: Sturmrufen
                    skills:
                        258: Kondensator
                        259: Ladung
                        260: Amplitude
                        261: Magieexperte
                3:
                    name: Waffe mit Schild
                    skills:
                        197: Bollwerk
                        194: Waffe mit Schild
                        196: Tödliche Wucht
                        195: Geschosse abwehren
                        198: Geübte Defensive
                4:
                    name: Heilungsstab
                    skills:
                        246: Essenzdieb
                        247: Wiederherstellungsexperte
                        245: Kreislauf des Lebens
                        230: Absorbieren
                5:
                    name: Schwere Rüstung
                    skills:
                        229: Entschlossenheit
                        225: Konstitution
                        228: Koloss
                        226: Beleben
                        227: Flinke Heilung
                6:
                    name: Unerschrockene 
                    skills:
                        631: Unerschrockenes Gebet
                        632: Unerschrockener Eifer
#       skill_alternative:
#           title: Alternative Fertigkeiten
#           data:
    equipments:
        equipment_general:
            title: Allgemeine Ausrüstung
            info: Diese Ausrüstung wird in 4er-Verliesen und Raids genutzt
            data:
                0:
                    name: Leiste 1 Haupthand
                    type: Axt
                    trait: Nirngeschliffen
                    glyph: Glyphe
                    poison: Gift
                    setname: Tödlicher Stoß
                    setid: 132
                1:
                    name: Leiste 1 Nebenhand
                    type: Dolch
                    trait: Geschärft
                    glyph: Glyphe
                    poison: Gift
                    setname: Tödlicher Stoß
                    setid: 132
                2:
                    name: Leiste 2 Haupthand
                    type: Bogen
                    trait: Erfüllt
                    glyph: Glyphe der Waffenkraft
                    setname: Mahlstrom
                    setid: 73
                3:
                    name: Leiste 2 Nebenhand
                    type: Bogen
                    trait: Erfüllt
                    glyph: Glyphe der Waffenkraft
                    setname: Mahlstrom
                    setid: 73
                4:
                    name: Halskette
                    trait: Blutdüstig
                    glyph: Glyphe der Waffenkraft
                    setname: Tödlicher Stoß
                    setid: 132
                5:
                    name: Ring 1
                    trait: Blutdüstig/Erfüllt
                    glyph: Glyphe der Waffenkraft
                    setname: Tödlicher Stoß
                    setid: 132
                6:
                    name: Ring 2
                    trait: Blutdüstig/Erfüllt
                    glyph: Glyphe der Waffenkraft
                    setname: Tödlicher Stoß
                    setid: 132
                7:
                    name: Kopf
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Selene
                    setid: 176
                8:
                    name: Schultern
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Selene
                    setid: 176
                9:
                    name: Brust
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Waffen von Relequen
                    setid: 332
                10:
                    name: Gürtel
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Waffen von Relequen
                    setid: 332
                11:
                    name: Beine
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Waffen von Relequen
                    setid: 332
                12:
                    name: Hände
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Waffen von Relequen
                    setid: 332
                13:
                    name: Füße
                    trait: Göttlich
                    glyph: Glyphe der maximalen Ausdauer
                    setname: Waffen von Relequen
                    setid: 332
    cps:
        cp_810:
            title: 810 Championpunkte
            data:
                        # Unangreif Magieschi Resistent FokusMitt Abgehärte FokusLeic Elevertei Dickhäuti VerteiExp FokusSchw Bastion   SchnelErh
                warrior: [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
                        # Kriegsher FokusZers Absauger  Sprinter  Tenazität Arkanist  Mondkalb  Gesund    Schatten  Verdorben SchattSch Gelenkigk
                thief:   [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
                        # Magieeros Elfenblut Gesegnet  Elemexper Stabexper ExpPhyWaf Waffmeist BersHiebe Traumatur Kräftig   Durchdrin PräziSchl
                mage:    [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#       cp_600:
#           title: 600 Championpunkte
#           data:
#                       # Unangreif Magieschi Resistent FokusMitt Abgehärte FokusLeic Elevertei Dickhäuti VerteiExp FokusSchw Bastion   SchnelErh
#               warrior: [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#                       # Kriegsher FokusZers Absauger  Sprinter  Tenazität Arkanist  Mondkalb  Gesund    Schatten  Verdorben SchattSch Gelenkigk
#               thief:   [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#                   # Magieeros Elfenblut Gesegnet  Elemexper Stabexper ExpPhyWaf Waffmeist BersHiebe Traumatur Kräftig   Durchdrin PräziSchl
#               mage:    [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#       cp_300:
#           title: 300 Championpunkte
#           data:
#                       # Unangreif Magieschi Resistent FokusMitt Abgehärte FokusLeic Elevertei Dickhäuti VerteiExp FokusSchw Bastion   SchnelErh
#               warrior: [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#                       # Kriegsher FokusZers Absauger  Sprinter  Tenazität Arkanist  Mondkalb  Gesund    Schatten  Verdorben SchattSch Gelenkigk
#               thief:   [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
#                       # Magieeros Elfenblut Gesegnet  Elemexper Stabexper ExpPhyWaf Waffmeist BersHiebe Traumatur Kräftig   Durchdrin PräziSchl
#               mage:    [    1    ,    2    ,    3    ,    4    ,    5    ,    6    ,    7    ,    8    ,    9    ,   10    ,   11    ,   12    ]
    rotations:
        rotation_single:
            title: Einzelschaden
            data:
                - Kampfbeginn - Nachladende Falle > S > WW
                - Rotation - Nachladende Falle und Endloser Hagel immer neu legen sobald ausgelaufen und in der restlichen Zeit die linke Maustaste zerschmettern beim LightAttacks machen, das wars!
        rotation_group:
            title: Gruppenschaden
            data:
                - Kampfbeginn - Krallen des Lebens
                - Rotation - L > L > L > L > usw. falls abgelaufen Krallen des Lebens > W
#   consumables:
    updatehistory:
        update24:
            title: Änderungen mit Update 24
            data:
                - Hier stehen die möglichen Änderungen mit Update 24
                - Weitere Infos
        update23:
            title: Änderungen mit Update 24
            data:
                - Hier stehen die möglichen Änderungen mit Update 23
                - Weitere Infos
    comment:
        title: Einsteigerfreundlich mit gutem Schaden, aber...
        data: Man kann den Werwolf nicht in jeder Situation gut spielen, zbsp. im neuen Sonnenspitz wo die Drachen nicht immer am Boden sind. Ohne ein Ziel zum drauf einschlagen verwandelt Ihr euch zurück. Jedoch vor allem für Einsteiger, die schnell auf guten Schaden kommen wollen ist der Werwolf eine sehr gute Option.
---

<div class="eso-widgets-build">
    {% include eso_classrace.html %}

    {% include eso_attributes.html %}

    {% include eso_skillbar.html skillbar=page.eso.skillbar.front %}

    {% include eso_skillbar.html skillbar=page.eso.skillbar.back %}
    
    {% include eso_mundus.html %}

    {% include eso_armor.html %}
</div>

<div class="eso-widgets-info">

    <!-- Rassenwahl -->
    {% include eso_races.html %}

    <!-- Fertigkeiten -->
    {% include eso_skills.html %}

    <!-- Ausrüstung -->
    {% include eso_equipments.html %}

    <!-- Championpunkte -->
    {% include eso_cps.html %}

    <!-- Rotation -->
    {% include eso_rotations.html %}

    <!-- Verbrauchsgüter -->
    {% include eso_consumables.html %}

    <!-- Updateverlauf -->
    {% include eso_updatehistory.html %}

    <!-- Persönlicher Kommentar -->
    {% include eso_comment.html %}

</div>
