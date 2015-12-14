<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Baseline</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="dist/styles/main.css">
		
		<style>
		body {
			font-family: Helvetica;
			font-size: 13px;
		}

		div.callout {
			height: 60px;
			width: 200px;
			float: left;
		}

		div.callout {
			background-color: #444;
			background-image: -moz-linear-gradient(top, #444, #444);
			position: relative;
			color: #ccc;
			padding: 10px;
			border-radius: 3px;
			box-shadow: 0px 0px 20px #999;
			margin: 25px;
			min-height: 50px;
			border: 1px solid #333;
			text-shadow: 0 0 1px #000;
	
			/*box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;*/
		}

		.callout::before {
			content: "";
			width: 0px;
			height: 0px;
			border: 0.8em solid transparent;
			position: absolute;
		}

		.callout.top::before {
			left: 45%;
			bottom: -20px;
			border-top: 10px solid #444;
		}

		.callout.bottom::before {
			left: 45%;
			top: -20px;
			border-bottom: 10px solid #444;
		}

		.callout.left::before {
			right: -20px;
			top: 40%;
			border-left: 10px solid #444;
		}

		.callout.right::before {
			left: -20px;
			top: 40%;
			border-right: 10px solid #444;
		}

		.callout.top-left::before {
			left: 7px;
			bottom: -20px;
			border-top: 10px solid #444;
		}

		.callout.top-right::before {
			right: 7px;
			bottom: -20px;
			border-top: 10px solid #444;
		}
		</style>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

				<div class="fullpage">
					<div class="outer">
						<div class="inner">
							<p>Vertical Align</p>
						</div>
					</div>			
				</div>
				
				
				<div class="callout top">Your Favourite HTML,CSS,JS Playground!</div>
				<div class="callout bottom">Your Favourite HTML,CSS,JS Playground!</div>
				<div class="callout left">Your Favourite HTML,CSS,JS Playground!</div>
				<div class="callout right">Your Favourite HTML,CSS,JS Playground!</div>
				<div class="callout top-left">Your Favourite HTML,CSS,JS Playground!</div>
				<div class="callout top-right">Your Favourite HTML,CSS,JS Playground!</div>

        <script src="dist/scripts/jquery.js"></script>
		<script src="dist/scripts/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script></script>
    </body>
</html>