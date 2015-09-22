function OnStart()
{

 





{
  lay = app.CreateLayout( "linear", "VCenter,FillXY" );

   web = app.CreateWebView( 1.0, 1.0);
   web.SetBackColor( "#FF3B6363" );
   lay.AddChild( web );


}


  


   app.AddLayout( lay );

{


   web.LoadUrl( "file:///sdcard/DroidScript/CrazzyMCPE%20App%20/CrazzyMCPE_US.html" );
}
app.SetScreenMode( "full" )





  
  
 

  app.EnableBackKey( false );
}

function OnBack() 
{
  var yesNo = app.CreateYesNoDialog( "Close?" );
  yesNo.SetOnTouch( yesNo_OnTouch );
}

function yesNo_OnTouch( result )
{
  if( result=="Yes" ) app.Exit();













app.SetOrientation( "Vertical" );
//Adds the popUp
  app.ShowPopup( "Version de desarrollador 0.0.1 Build 1", "Bottom,Short" );




  app.SetOrientation( "Landscape" );

  lay = app.CreateLayout( "Linear", "Vertical" );
  txt = app.CreateText( "Hello" );
  txt.SetTextSize( 32 );
  lay.AddChild( txt );
  app.AddLayout( lay );

    
         

function btn2_OnTouch() 
{ 
    notify1.SetMessage( "An Update!", "Updated Title", "Updated Details" ); 
    notify1.Notify();         
} 





}






























































