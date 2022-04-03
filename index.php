<?php
    include "template-parts/head.php";
?>
<body>

    <nav id="menu">

        <a id="back"></a>
        <a id="next" href="#scene2"></a>
        <h3 id="location">Hoofdstuk 1: De Ochtend</h3>
        <div id="progress"></div>
    </nav>
    <main>
        <div class="phone">
            <div class="textBlock">
                <h2>Een energiek kijkje in de dag is alleen te bekijken op een pc of mac vanaf 1200px. Durf jij de stap te nemen?</h2>
            </div>
        </div>
        <div class="icons">

        </div>
        <div id="cover">
            <img id="startImage" src="img/start.png" alt="start">
            <h1>EEN ENERGIEK KIJKJE IN DE DAG</h1>
            <p>Voordat je begint vragen we je deze story zo eerlijk mogelijk in te vullen. Dit resulteert in een realistische ervaring en eindresultaat.</p>
            <h2>Veel plezier!</h2>
            <button class="keuzes" id="start">Start de dag</button>
        </div>
        <div id="wrapper">    
            <div id="scene1" class="scenes">
                <div class="container">
                    <div class="textBlock">
                        <h2>Je wordt wakker. Het is donker op je kamer. Wat doe je?</h2>
                    </div>
                    <button class="keuzes" id="keuze1" alt="1">Je besluit het gordijn open te maken</button>
                    <button class="keuzes" id="keuze2" alt="2">Je besluit het licht aan te doen</button>
                </div>
            </div>
        </div>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>