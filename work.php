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
<script type="text/javascript" src="js/jquery/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/jquery/plugins/jquery.taconite.js"></script>
<script type="text/javascript" src="js/dfsmooth/smooth.pack.js"></script>
<!-- <script type="text/javascript" src="js/tooltip/script.js"></script> -->
<script type="text/javascript" src="js/jquery/plugins/stepcarousel.js"></script>
<script language="JavaScript" type="text/javascript">
//<![CDATA[
$(document).ready(function() {
	
	  
   //Start Image Loading
   $(".screen-more a").click( function() {
   	$(this).siblings("a").removeClass("selected-screen").end().addClass("screen-selected");
   	var screenURL = $(this).attr("href");
   	$.get(screenURL);	
   	return false;
    });
    //End Image Loading
    
   //Start Extending Taconite
  $.fn.replaceAndFadeIn = function(newContentElements) {
    return this.each(function() {
        $(this).empty().hide().append(newContentElements).fadeIn('fast');
    });
};

    //End Extending Taconite   
});
//]]>
</script>

		<script type="text/javascript">

		stepcarousel.setup({
			galleryid: 'step', //id of carousel DIV
			beltclass: 'scrolling', //class of inner "belt" DIV containing all the panel DIVs
			panelclass: 'box-scroll', //class of panel DIVs each holding content
			autostep: {enable:false, moveby:1, pause:10000},
			panelbehavior: {speed:500, wraparound:true, persist:true},
			defaultbuttons: {enable: true, moveby: 1, leftnav: ['images/design/arrow_left.png', -5, 50], rightnav: ['images/design/arrow_right.png', -20, 50]},
			contenttype: ['inline'] //content setting ['inline'] or ['external', 'path_to_external_file']
		})

		</script>

  </head>

<body id="work" class="sub-page sub-work">

<div id="main-wrapper" class="wrapper">
     <a name="top"></a>
     
<?php include_once('/home/erinther/public_html/marginpad/header.php') ?>


    <div id="intro-wrapper" class="wrapper clearfix">
        <div class="container">    
        
          <div id="intro-selvaag" class="screen-intro screen-first span-24 column clearfix">
              <a name="screen1"></a>
            <div id="details-selvaag"  class="span-6 details column clearfix">
                 <h3>Meglerhuset Selvaag</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>concept</li> <li>design</li><li>xhtml</li> <li>css</li><li>javascript</li>                    
                   </ul>
                   <p class="scroll"><a href="#screen2">Next</a></p>
                 </div><!-- end #details  .span-6 -->
             <div id="screen-selvaag"  class="span-18 last screen column clearfix">
                 <img src="images/screenshots/selvaag/intro.jpg" alt="Selvaag" width="710" />
              </div><!-- end .Screen -->    
          </div><!-- end .Screen-intro --> <div class="clear"></div>
          

          <a name="screen2"></a>
          
         <div id="intro-beepad" class="screen-intro span-24 column clearfix">
            
            <div id="details-beepad"  class="span-6 details column clearfix">                 
                  <h3>Beepad</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>concept</li> <li>design</li><li>xhtml</li> <li>css</li><li>javascript</li> <li>cms integration (mt & elgg)</li>                   
                   </ul>
                   <p class="pagination screen-more">more screenshots: <br /><br />                  
                     <a href="beepad-screen1.xml">1</a>
                     <a href="beepad-screen2.xml">2</a>
                     <a href="beepad-screen3.xml">3</a>
                     <a href="beepad-screen4.xml">4</a> 
                     <a href="beepad-screen0.xml">&lsaquo;&lsaquo;</a>                                          
                     
                    </p><br />
                   <p class="scroll">
                     <a href="#top" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen3">Next</a>
                   </p>                
                 </div><!-- end #details  .span-6 -->
             <div id="screen-beepad"  class="span-18 last screen  column clearfix"> 
               <div id="beepad-screens" class="has-screens clearfix">                               
                  <img src="images/screenshots/beepad/intro.jpg" alt="Beepad" width="710" />
                </div><!-- end .Has-Screens -->          
              </div><!-- end .Screen -->             
            </div><!-- end .Screen-intro --> <div class="clear"></div>

                   <a name="screen3"></a>
          
          <div id="intro-skatt" class="screen-intro span-24 column clearfix">

            <div id="details-skatt"  class="span-6 details column clearfix"> 
                  <h3 >Nei til skattelister</h3>
                  <p class="feedback"><strong>Feedback:</strong><br />NeiTilSkattelisten.no er den en av de vakreste nettsidene jeg har sett p&aring;
                   lenge.Den er ryddig og pen og budskapet er enkelt &aring; forst&aring;... Det er  nok til at jeg
   kjenner en t&aring;re i &oslash;yekroken.<br /><a href="http://www.kjernedryss.no/den-vakreste-nettsiden/article174-7.html">Martin Gjesdal </a></p>
                   <ul class="list-vertical clearfix work-details">
                    <li>concept</li> <li>design</li><li>xhtml</li> <li>css</li><li>javascript</li> <li>cms integration (echo)</li>                   
                   </ul>
                   
                    <p class="scroll">
                     <a href="#screen2" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen4">Next</a>
                   </p>                     
                 </div><!-- end #details  .span-6 -->
                 
             <div id="screen-skatt"  class="span-18 last screen column clearfix">                    
                 <img src="images/screenshots/skatt/intro.jpg" alt="Nei til skattelister" width="710" />
              </div><!-- end .Screen -->  
                                    
         </div><!-- end .Screen-intro --> <div class="clear"></div>   

         
         
               <a name="screen4"></a>
         
         <div id="intro-rfid" class="screen-intro span-24 column clearfix">
              <div id="details-rfid"  class="span-6 details column clearfix">
                 <h3>GS1: Rfid</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>xhtml</li> <li>css</li><li>javascript</li> <li>cms integration (echo)</li>                  
                   </ul>
                   
                   <p class="pagination screen-more">more screenshots: <br /><br />                  
                     <a href="rfid-screen1.xml">1</a>
                     <a href="rfid-screen0.xml">&lsaquo;&lsaquo;</a>                                          
                     
                    </p><br />                   
                   <p class="scroll">
                     <a href="#screen3" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen5">Next</a>
                   </p>  
               </div><!-- end #details  .span-6 -->
                 <div id="screen-rfid"  class="span-18 last screen column clearfix">
                 <img src="images/screenshots/gs1/intro.jpg" alt="GS1: Rfid" width="710" />
                 </div><!-- end .Screen -->    
                 </div><!-- end .Screen-intro --> <div class="clear"></div>
                 
                 
          
          
              <a name="screen5"></a>

         <div id="intro-tenders" class="screen-intro span-24 column clearfix">
              <div id="details-tenders"  class="span-6 details column clearfix">         
                 <h3>Tenders magazine</h3>
                   <ul class="list-vertical clearfix work-details">
                   <li>concept</li> <li>xhtml</li> <li>css</li><li>javascript</li> <li>cms integration (echo)</li>                  
                   </ul>
                   <p class="scroll">
                     <a href="#screen4" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen6">Next</a>
                   </p>                    
              </div><!-- end #details  .span-6 -->
             <div id="screen-tenders"  class="span-18 last screen column clearfix">                   
                <img src="images/screenshots/tenders/intro.jpg" alt="Tenders Magazine"  width="710" />
              </div><!-- end .Screen -->    
              </div><!-- end .Screen-intro --> <div class="clear"></div>
          
          
                                <a name="screen6"></a>


         <div id="intro-skier" class="screen-intro span-24 column clearfix">
              <div id="details-skier"  class="span-6 details column clearfix">             
                 <h3>Skier</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>xhtml</li> <li>css</li><li>javascript</li> <li>photo album</a><li>cms integration (echo)</li>                  
                   </ul>
                   <p class="scroll">
                     <a href="#screen5" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen7">Next</a>
                   </p>                    
              </div><!-- end #details  .span-6 -->   
             <div id="screen-skier"  class="span-18 last screen column clearfix">                                 
              <img src="images/screenshots/skier/intro.jpg" alt="Skier"  width="710"/>
              </div><!-- end .Screen -->                
          </div><!-- end .Screen-intro --> <div class="clear"></div> 
          
          
                            <a name="screen7"></a>
          
          <div id="intro-hertz" class="screen-intro span-24 column clearfix">
              <div id="details-hertz"  class="span-6 details column clearfix">               
                 <h3>Hertz lease</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>xhtml</li> <li>css</li><li>javascript</li> <li>photo album</li><li>cms integration (echo)</li>                  
                   </ul>
                   <p class="scroll">
                     <a href="#screen6" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen8">Next</a>
                   </p>                    
              </div><!-- end #details  .span-6 -->   
             <div id="screen-hertz"  class="span-18 last screen column clearfix">                     
                 <img src="images/screenshots/hertz/intro.jpg" alt="Hertz Lease" width="710" />             
              </div><!-- end .Screen --> 
                 
         </div><!-- end .Screen-intro --> <div class="clear"></div>
         
         
                <a name="screen8"></a>

         <div id="intro-nce" class="screen-intro span-24 column clearfix">
              <div id="details-nce"  class="span-6 details column clearfix">            
                 <h3>NCE Aquaculture</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>concept</li><li>xhtml</li> <li>css</li><li>javascript</li> <li>cms integration (echo)</li>                  
                   </ul>
                   <p class="scroll">
                     <a href="#screen7" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen9">Next</a>
                   </p>                    
              </div><!-- end #details  .span-6 -->   
             <div id="screen-nce"  class="span-18 last screen column clearfix">                     
               <img src="images/screenshots/nce/intro.jpg" alt="NCE Aquaculture"  width="710"/>
              </div><!-- end .Screen -->                
          </div><!-- end .Screen-intro --> <div class="clear"></div>   

                   
                          <a name="screen9"></a>

         <div id="intro-elkonor" class="screen-intro screen-last span-24 column clearfix">
              <div id="details-elkonor"  class="span-6 details column clearfix">            
                 <h3 id="screenlast">Elkonor</h3>
                   <ul class="list-vertical clearfix work-details">
                    <li>xhtml</li> <li>css</li><li>javascript</li><li>photo album</li> <li>cms integration (echo)</li>                  
                   </ul>
                   <p class="scroll">
                     <a href="#screen8" >Prev</a><a href="#top" class="goTop">Top</a><a href="#screen10" >Next</a>
                   </p>                    
              </div><!-- end #details  .span-6 -->   
             <div id="screen-elkonor"  class="span-18 last screen screen-last column clearfix">                    
                  <img src="images/screenshots/elkonor/intro.jpg" alt="Elkonor"  width="710" />
              </div><!-- end .Screen -->               
          </div><!-- end .Screen-intro --> <div class="clear"></div>  

          
          
                   
                 
        </div><!-- end .container  -->
    </div><!-- end #Intro-wrapper -->         
          
  
                         

    <div id="extra-wrapper" class="wrapper clearfix">
        <div class="container">
            <div class="span-24 clearfix column">
                     <p class="scroll">
                     <a href="#screen9" >Prev</a><a href="#top" class="goTop">Top</a>
                   </p> 
              </div>
                <div class="clear"></div>
            <div id="extra" class="span-24 column clearfix" >

                <div class="clear"></div>
                <a name="screen10"></a>
               <div id="step" class=" stepcarousel span-24 column clearfix"> 
                 <div class="scrolling ">
                 
                 

              <div class="span-24 last column clearfix box-widget box-scroll">

                <div class="span-5 prepend-2 column clearfix box-widget box-works-small">
	                <h3><span>Norlandia</span></h3>                 
	                <p>Norlandia hotels, portals, omsorg, horten catring, booking service. All types of work including desgin and cms integration </p>
               </div><!-- end widget-box -->                
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Askerdagen</span></h3>                 
	                <p>Several websites as Harsem, ekteskapsbevaring, dental. Works done includes javascript,newsletter, photoalbums and other   </p>
               </div><!-- end widget-box -->               
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Skattebetaler forening</span></h3>                 
	                <p>Various projects: newsletters, cms integration, design, javascript</p>
               </div><!-- end widget-box -->              

               
               <div class="span-5 last append-2 column clearfix box-widget box-works-small">
	                <h3><span>Norsk musikkr&aring;d</span></h3>                 
	                <p>newsletters, javascript, cms integration </p>
               </div><!-- end widget-box --> 
	                
	                
               </div><!-- end box-scroll --> 
               
               
            <div class="span-24 last column clearfix box-widget box-scroll">

                
                <div class="span-5 prepend-2 column clearfix box-widget box-works-small">
	                <h3><span>Norlandia</span></h3>                 
	                <p>Norlandia hotels, portals, omsorg, horten catring, booking service. All types of work including desgin and cms integration </p>
               </div><!-- end widget-box -->                
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Askerdagen</span></h3>                 
	                <p>Several websites as Harsem, ekteskapsbevaring, dental. Works done includes javascript,newsletter, photoalbums and other   </p>
               </div><!-- end widget-box -->               
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Skattebetaler forening</span></h3>                 
	                <p>Various projects: newsletters, cms integration, design, javascript</p>
               </div><!-- end widget-box -->              

               
               <div class="span-5 last append-2 column clearfix box-widget box-works-small">
	                <h3><span>Norsk musikkr&aring;d</span></h3>                 
	                <p>newsletters, javascript, cms integration </p>
               </div><!-- end widget-box --> 
	                
	                
               </div><!-- end box-scroll --> 

               
                             
                <div class="span-24 last column clearfix box-widget box-scroll">

                   
                <div class="span-5 prepend-2 column clearfix box-widget box-works-small">
	                <h3><span>Norlandia</span></h3>                 
	                <p>Norlandia hotels, portals, omsorg, horten catring, booking service. All types of work including desgin and cms integration </p>
               </div><!-- end widget-box -->                
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Askerdagen</span></h3>                 
	                <p>Several websites as Harsem, ekteskapsbevaring, dental. Works done includes javascript,newsletter, photoalbums and other   </p>
               </div><!-- end widget-box -->               
               <div class="span-5 column clearfix box-widget box-works-small">
	                <h3><span>Skattebetaler forening</span></h3>                 
	                <p>Various projects: newsletters, cms integration, design, javascript</p>
               </div><!-- end widget-box -->              

               
               <div class="span-5 last append-2 column clearfix box-widget box-works-small">
	                <h3><span>Norsk musikkr&aring;d</span></h3>                 
	                <p>newsletters, javascript, cms integration </p>
               </div><!-- end widget-box --> 
	                
	                
               </div><!-- end box-scroll --> 
               
                              
                 </div><!-- end Scrolling panel -->
                </div ><!-- end stepcarousel -->
                           <div class="clear"></div> 
                                    
               

               

            </div><!-- end #Extra .span-24 -->
        </div><!-- end .container  -->
    </div><!-- end #Extra-wrapper -->


    
  <?php include_once('/home/erinther/public_html/marginpad/footer.php') ?>  
        
</div><!-- end #Main-Wrapper -->



</body>
</html>