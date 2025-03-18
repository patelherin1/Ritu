<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HBD Love</title>
    <link rel="stylesheet" href="./file/default.css" type="text/css">

    <!-- JavaScript Files -->
    <script src="./file/jquery.min.js"></script>
    <script src="./file/jscex.min.js"></script>
    <script src="./file/jscex-async.min.js"></script>
    <script src="./file/jscex-parser.js"></script>
    <script src="./file/jscex-jquery.min.js"></script>
    <script src="./file/jscex-builderbase.min.js"></script>
    <script src="./file/jscex-async-powerpack.min.js"></script>
    <script src="./file/love.js" charset="utf-8"></script>

    <script>
        function playAudio() {
            var audio = document.getElementById("myAudio");
            if (audio) {
                audio.play();
            }
        }
    </script>
</head>
<body>

    <div id="main">
        <div id="error">
            <a href="http://www.google.cn/chrome/">Chrome</a> /
            <a href="http://firefox.com.cn/download/">Firefox</a>
        </div>

        <audio autoplay id="myAudio">
            <source src="aud.mp3" type="audio/mp3">
            <embed height="100" width="100" src="aud.mp3">
        </audio>

        <div id="wrap">
            <div id="text">
                <div id="code">
                    <span class="say">My favourite Ritu 🥰</span><br>
                    <span class="say">My Beautiful golu-molu 🥰</span><br>
                    <span class="say">My little panda 🐼</span><br>
                    <span class="say">My Best Friend Forever 🥰</span><br>
                    <span class="say">You're MY CLOSEST EVER ❤️</span><br>
                    <span class="say">You’re my blessing from the universe.</span><br>
                    <span class="say">I believe that miracles do happen. 🥺</span><br>
                    <span class="say">I’ll always be grateful for the day I found you. ❤️</span><br>
                    <span class="say">You have a heart that is truly gold. ❤️</span><br>
                    <span class="say">Thank you for being the best part of my life. 🥰</span><br>
                </div>
            </div>

            <div id="message-box"></div>
            <div id="clock-box">
                <span class="STYLE1">❤️</span>
                <div id="clock"></div>
                <canvas id="canvas" width="1100" height="680"></canvas>
            </div>
        </div>
    </div>

    <script>
        (function() {
            var canvas = document.getElementById("canvas");

            if (!canvas || !canvas.getContext) {
                document.getElementById("error").style.display = "block";
                return false;
            }

            var ctx = canvas.getContext("2d");
            var width = canvas.width;
            var height = canvas.height;

            function drawHeart(x, y, size, color) {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.bezierCurveTo(x - size, y - size, x - size * 2, y + size, x, y + size * 2);
                ctx.bezierCurveTo(x + size * 2, y + size, x + size, y - size, x, y);
                ctx.fill();
            }

            function animateHearts() {
                ctx.clearRect(0, 0, width, height);
                for (var i = 0; i < 10; i++) {
                    var x = Math.random() * width;
                    var y = Math.random() * height;
                    var size = Math.random() * 30 + 10;
                    var colors = ["#FF0000", "#FF1493", "#DC143C", "#C71585"];
                    var color = colors[Math.floor(Math.random() * colors.length)];
                    drawHeart(x, y, size, color);
                }
                requestAnimationFrame(animateHearts);
            }

            animateHearts();
        })();
    </script>

</body>
</html>
