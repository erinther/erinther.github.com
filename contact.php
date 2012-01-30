<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="generator" content="Movabletype" />
    <meta name="keywords" content="marginpad,design,oslo,norsk,norge,web design,web development, webutvikler,php5,kohana,css,xhtml,jquery" />
    <meta name="description" content="Margin pad" />

    <title>MarginPad: Web design & development</title>

<link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection" /> 
<link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print" /> 
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection" /> 

<!--[if IE]><link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection" /> 
<![endif]--> 
<script type="text/javascript" src="js/jquery/jquery-1.3.2.pack.js"></script>


  </head>

<body id="contact" class="sub-page sub-contact">

<div id="main-wrapper" class="wrapper">

<?php include_once('/home/erinther/public_html/marginpad/header.php') ?>


    <div id ="content-wrapper" class="wrapper clearfix">
        <div class="container ">
             <div id="content-container"  class="span-24  column clearfix showgrid ">

  <form action="feedback.php"  method="post" class="span-14 column clearfix">
 <fieldset>
 <div class="span-7 column clearfix"><label for="name">Name:</label><br /> <input type="text" id="name" name="name" /></div>
 <div class="span-7  last column clearfix"><label for="email">Email:</label><br /><input type="text" id="email" name="email" /></div>
  <div class="clear"></div>
  <label for="topic">
    What do you want to tell us about?
  </label><br />
  <input type="text" id="topic" name="topic" /><br />
  <label for="comments">
    Comment:
  </label><br />
  <textarea id="comments" name="comments" rows="5" cols="30"></textarea><br />
  <button type="submit">Send</button>
 </fieldset>
</form>

            </div><!-- end #content-container  .span-24 -->

        </div><!-- end .container -->   
    </div><!-- end #content-wrapper -->




  <?php include_once('/home/erinther/public_html/marginpad/footer.php') ?>  



</div><!-- end #Main-Wrapper -->

</body>
</html>