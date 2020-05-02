<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String n1="htc desire 620g";
String na;
int id,pr;
try
{
Connection conn=null;
PreparedStatement pst=null;

Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");

conn=DriverManager.getConnection("Jdbc:Odbc:pro");

pst=conn.prepareStatement("select * from products where name=?");
pst.setString(1,n1);

ResultSet rs=pst.executeQuery();
if(rs.next())
{
na=rs.getString(1);
id=rs.getInt(4);
pr=rs.getInt(5);
session.setAttribute("na",na);
session.setAttribute("id",id);
session.setAttribute("pr",pr);
}
conn.close();
pst.close();
}

catch(Exception e)
{
out.println("SEARCH FAILED="+e);
}
%>










<script type="text/javascript" src="stmenu.js"></script><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns="http://www.w3.org/TR/REC-html40">
<%
String n=(String)session.getAttribute("name");
String p=(String)session.getAttribute("pass");
String pna=(String)session.getAttribute("na");
int pid=(Integer)session.getAttribute("id");
int ppr=(Integer)session.getAttribute("pr");
%>

<body text="#FFFFFF" bgcolor="#008080" background="blue-polygon-28641-1366x768.jpg">

<H1>ONL!NE B@zzAR</H1>
<HR color="#FFFFFF" size="3">

<font size=4 color=white>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><b>&nbsp; WELCOME

 <%out.println(n);%>
<script type="text/javascript">
<!--
stm_bm(["menu61b2",980,"","blank.gif",0,"","",0,0,250,0,1000,1,0,0,"","",0,0,1,2,"default","hand","",1,25],this);
stm_bp("p0",[0,4,0,0,1,1,15,0,100,"",-2,"",-2,50,0,0,"#799BD8","transparent","",3,0,0,"#000000","",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"",-1,-1,0,"transparent","",0,"","","","",20,20,20,20,20,20,20,20]);
stm_ai("p0i0",[0,"Home","","",-1,-1,0,"userindex.jsp","_self","","","icon_01a.gif","icon_02b.gif",15,15,0,"","",0,0,0,0,1,"#FFFFF7",0,"#FFFFF7",0,"","",2,2,3,1,"#FFFFFF","#999999","#666666","#3ac6e1","bold 7pt Verdana","bold 7pt Verdana",0,0,"","","","",0,0,0],100,0);
stm_aix("p0i1","p0i0",[0,"ELECTRONICS","","",-1,-1,0,"#","_self","","","icon_01a.gif","icon_02b.gif",15,15,0,"","",-1,-1,0,0,1,"#FFFFF7",0,"#FFFFF7",0,"","",3,3,1,1,"#FFFFFF","#0099FF"],100,0);
stm_bp("p1",[1,4,0,1,1,1,5,10,100,"progid:DXImageTransform.Microsoft.Iris(irisStyle=plus,motion=in,enabled=0,Duration=0.50)",-2,"progid:DXImageTransform.Microsoft.Iris(irisStyle=plus,motion=out,enabled=0,Duration=0.50)",-2,60,0,0,"#799BD8","#FFFFFF","",3,1,1,"#FFFFFF"]);
stm_aix("p1i0","p0i0",[0,"mobiLES","","",-1,-1,0,"#","_self","","","icon_02c.gif","icon_02c.gif",5,18,0,"060420arrow2.gif","060420arrow3.gif",10,5,0,0,1,"#FFFFF7",1,"#99FFFF",0,"","",3,3,0,0,"#FFFFCC","#FFFFCC","#3ac6e1","#05646E"],0,18);
stm_bpx("p2","p1",[1,2,-30,10,1,1,5,0,100,"progid:DXImageTransform.Microsoft.Iris(irisStyle=star,motion=in,enabled=0,Duration=0.50)",-2,"progid:DXImageTransform.Microsoft.Iris(irisStyle=star,motion=out,enabled=0,Duration=0.50)"]);
stm_aix("p2i0","p1i0",[0,"HTC","","",-1,-1,0,"htc_mobiles.jsp","_self","","","icon_02d.gif","icon_02d.gif",5,5,0,"","",0,0,0,0,1,"#FFFFF7",1,"#99FFFF",0,"","",3,3,0,0,"#FFFFCC","#CCCC00"],80,0);
stm_aix("p2i1","p2i0",[0,"SAMSUNG","","",-1,-1,0,""],80,0);
stm_aix("p2i2","p2i1",[0,"APPLE"],80,0);
stm_aix("p2i3","p2i1",[0,"MICROmax"],80,0);
stm_aix("p2i4","p2i1",[0,"NOKIA"],80,0);
stm_aix("p2i5","p2i1",[0,"LAVA"],80,0);
stm_aix("p2i6","p2i1",[0,"KARBonn"],80,0);
stm_ep();
stm_aix("p1i1","p1i0",[0,"LAPTOPS"],0,18);
stm_bpx("p3","p2",[]);
stm_aix("p3i0","p0i0",[0,"SONY","","",-1,-1,0,"#","_self","","","icon_02d.gif","icon_02d.gif",5,5,0,"","",0,0,0,0,1,"#FFFFF7",1,"#99FFFF",0,"","",3,3,0,0,"#FFFFCC","#CCCC00","#3ac6e1","#000000"],80,18);
stm_aix("p3i1","p3i0",[0,"SAMSUNG"],80,18);
stm_aix("p3i2","p3i0",[0,"LENOVO"],80,18);
stm_aix("p3i3","p3i0",[0,"HCL"],80,18);
stm_aix("p3i4","p3i0",[0,"APPLE"],80,18);
stm_aix("p3i5","p3i0",[0,"ASUS"],80,18);
stm_ep();
stm_aix("p1i2","p1i0",[0,"TV"],0,18);
stm_bpx("p4","p2",[]);
stm_aix("p4i0","p0i0",[0,"SONY","","",-1,-1,0,"","_self","","","icon_02d.gif","icon_02d.gif",5,5,0,"","",0,0,0,0,1,"#FFFFF7",1,"#99FFFF",0,"","",3,3,0,0,"#FFFFCC","#CCCC00","#3ac6e1",""],80,0);
stm_aix("p4i1","p2i1",[],80,0);
stm_aix("p4i2","p2i1",[0,"PHILLIPS"],80,0);
stm_aix("p4i3","p2i1",[0,"LG"],80,0);
stm_aix("p4i4","p2i1",[0,"TOSHIBA"],80,0);
stm_aix("p4i5","p2i1",[0,"VIDEOCON"],80,0);
stm_ep();
stm_aix("p1i3","p1i0",[0,"TABletS"],0,18);
stm_bpx("p5","p2",[]);
stm_aix("p5i0","p2i1",[0,"SONY"],80,0);
stm_aix("p5i1","p2i2",[],80,0);
stm_aix("p5i2","p2i1",[],80,0);
stm_aix("p5i3","p2i1",[0,"MICROMAX"],80,0);
stm_ep();
stm_aix("p1i4","p1i0",[0,"VIDeO gaMES"],0,18);
stm_bpx("p6","p2",[]);
stm_aix("p6i0","p2i1",[0,"PSP"],80,0);
stm_aix("p6i1","p2i1",[0,"NINTENDO"],80,0);
stm_aix("p6i2","p2i1",[0,"XBOx"],80,0);
stm_ep();
stm_aix("p1i5","p1i0",[0,"AccESSOriES"],0,18);
stm_bpx("p7","p2",[]);
stm_aix("p7i0","p2i1",[0,"CHARGERS"],80,0);
stm_aix("p7i1","p2i1",[0,"HEADPHONES"],80,0);
stm_aix("p7i2","p2i1",[0,"MEMORY CARDS"],80,0);
stm_aix("p7i3","p2i1",[0,"PEN DRIVES"],80,0);
stm_ep();
stm_ep();
stm_aix("p0i2","p0i1",[0,"APPAREL"],100,0);
stm_bpx("p8","p1",[]);
stm_aix("p8i0","p2i0",[0,"MEN","","",-1,-1,0,"#","_self","","","icon_02c.gif","icon_02c.gif",5,18,0,"060420arrow2.gif","060420arrow3.gif",10,5,0,0,1,"#FFFFF7",1,"#3ac6e1",0,"","",3,0],0,18);
stm_bpx("p9","p2",[]);
stm_aix("p9i0","p8i0",[0,"SHIRT","","",-1,-1,0,"mens_shirts.jsp","_self","","","icon_02d.gif","icon_02d.gif",5,5,0,"","",0,0],0,18);
stm_aix("p9i1","p9i0",[0,"TROUSERS"],0,18);
stm_aix("p9i2","p9i0",[0,"SUITS"],0,18);
stm_aix("p9i3","p9i0",[0,"SWEATERS"],0,18);
stm_aix("p9i4","p9i0",[0,"SWEAT SHIRTS"],0,18);
stm_ep();
stm_aix("p8i1","p8i0",[0,"WOMEN"],0,18);
stm_bpx("p10","p2",[]);
stm_aix("p10i0","p9i0",[0,"TOPS"],0,18);
stm_aix("p10i1","p9i1",[],0,18);
stm_aix("p10i2","p9i0",[0,"ONE PIECE\'s"],0,18);
stm_aix("p10i3","p9i3",[],0,18);
stm_aix("p10i4","p9i0",[0,"SHALLS"],0,18);
stm_ep();
stm_aix("p8i2","p8i0",[0,"CHILDREN"],0,18);
stm_bpx("p11","p2",[]);
stm_aix("p11i0","p9i0",[0,"SHIRTS"],0,18);
stm_aix("p11i1","p9i0",[0,"PANTS"],0,18);
stm_aix("p11i2","p9i0",[0,"JEANS"],0,18);
stm_ep();
stm_ep();
stm_aix("p0i3","p0i1",[0,"BOOKS"],100,0);
stm_bpx("p12","p1",[1,4,0,1,1,1,5,0]);
stm_aix("p12i0","p9i0",[0,"FICTION","","",-1,-1,0,"#","_self","","","icon_02c.gif","icon_02c.gif",5,18],150,18);
stm_aix("p12i1","p12i0",[0,"SPIRITUAL"],150,18);
stm_aix("p12i2","p12i0",[0,"POEMS"],150,18);
stm_aix("p12i3","p12i0",[0,"FOR CHILDREN"],150,18);
stm_aix("p12i4","p12i0",[0,"ENCYCLOPAEDIA"],150,18);
stm_aix("p12i5","p12i0",[0,"NON FICTION","","",-1,-1,0,""],150,0);
stm_ep();
stm_aix("p0i4","p0i1",[0,"OTHERS"],100,0);
stm_bpx("p13","p12",[]);
stm_aix("p13i0","p12i0",[0,"WATCHES"],100,18);
stm_aix("p13i1","p12i0",[0,"BELTS"],100,18);
stm_ep();
stm_aix("p0i5","p0i1",[0,"About","","",-1,-1,0,"about.jsp","_self","","","icon_01a.gif","icon_02b.gif",15,15,0,"","",0,0],100,0);
stm_ep();
stm_sc(1,["transparent","transparent","","",3,3,0,0,"#FFFFF7","#000000","up_disabled.gif","up_enabled.gif",7,9,0,"down_disabled.gif","down_enabled.gif",7,9,0,0,200]);
stm_em();
//-->
function con()
{
alert("Are You Sure You Want To Continue");
}
function buy()
{
var uname=document.getElementById("un");
uname.type="text";
var pass=document.getElementById("ps");
pass.type="password";
var sub=document.getElementById("sub");
sub.type="submit";
}
function addtocart()
{
var uname2=document.getElementById("un2");
uname2.type="text";
var pass2=document.getElementById("ps2");
pass2.type="password";
var sub2=document.getElementById("su");
sub2.type="submit";
}

</script>



</b></i>



<hr color="#ffffff" size=3>

</font>
<h3>HTC Desire 620 g&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
<h3>
<span style="position: absolute; left: 193; top: 185">
<img border="0" src="img/htc/HTC%20Desire%20620G%20dual%20sim%20-%20Full%20phone%20specifications_files/lg_htc.gif" width="92" height="22"></span></h3>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
ModelName:<% out.println(pna);%>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Product Id :<% out.println(pid);%></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<b> <input type="submit" value="BUY NOW" onclick="buy()"></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
Price : Rs.<% out.println(ppr);%> </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="submit" value="Add to Cart" onclick="addtocart()"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

<form method="Post" action="http://localhost:8888/examples/buy.jsp">
<input type="hidden" name="bun"  id="un" value="username" size="20"><br>
<input type="hidden" name="bps" id="ps" value="password"&nbsp;<br>
<input type="hidden" value="Submit" id="sub">  
</form>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<form method="Post" action="http://localhost:8888/examples/addtocart.jsp">
<input type="hidden" name="cun" id="un2" value="username"> <br>
<input type="hidden" name="cps" id="ps2" value="password"><br>
<input type="hidden" value="SUBMIT" id="su" >
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 </form> </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<p>&nbsp;
</p>
<p>
<span style="position: absolute; left: 18; top: 186">
<img border="0" src="img/htc/HTC%20Desire%20620G%20dual%20sim%20-%20Full%20phone%20specifications_files/htc-desire-620g.jpg" width="154" height="199"></span>&nbsp;<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;SPECIFICATIONS&nbsp;&nbsp;
</b> </p>
<table cellSpacing="0" width="692" height="108">
  <tr>
    <th rowSpan="5" scope="row" width="69" height="106">General</th>
    <td class="ttl" width="154" height="19"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    2G Network</b></td>
    <td class="nfo" width="463" height="19"><b>GSM 850 / 900 / 1800 / 1900 - SIM 1 
    &amp; SIM 2</b></td>
  </tr>
  <tr>
    <td class="ttl" width="154" height="19"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    3G Network</b></td>
    <td class="nfo" width="463" height="19"><b>HSDPA 900 / 2100 </b> </td>
  </tr>
  <tr>
    <td class="ttl" width="154" height="19"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    SIM</b></td>
    <td class="nfo" width="463" height="19"><b>Dual SIM (Micro-SIM, dual stand-by)</b></td>
  </tr>
  <tr>
    <td class="ttl" width="154" height="19"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Status</b><hr></td>
    <td class="nfo" width="463" height="19"><b>Coming soon. Exp. release 2014, 
    December</b><hr></td>
  </tr>
  <tr>
    <td class="ttl" width="154" height="22">&nbsp;</td>
    <td class="nfo" width="463" height="22">&nbsp;</td>
  </tr>
</table>
<table cellSpacing="0" width="691">
  <tr>
    <th rowSpan="2" scope="row" width="68">Body</th>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Dimensions</b></td>
    <td class="nfo" width="464"><b>150.1 x 72.7 x 9.6 mm (5.91 x 2.86 x 0.38 in)</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Weight</b><hr></td>
    <td class="nfo" width="464"><b>160 g (5.64 oz)</b><hr></td>
  </tr>
</table>
<table cellSpacing="0" width="692">
  <tr>
    <th rowSpan="4" scope="row" width="67">Display</th>
    <td class="ttl" width="154"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Type</b></td>
    <td class="nfo" width="465"><b>Capacitive touchscreen, 16M colors</b></td>
  </tr>
  <tr>
    <td class="ttl" width="154"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Size</b></td>
    <td class="nfo" width="465"><b>720 x 1280 pixels, 5.0 inches (~294 ppi pixel 
    density)</b></td>
  </tr>
  <tr>
    <td class="ttl" width="154"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multitouch</b><hr></td>
    <td class="nfo" width="465"><b>Yes</b><hr></td>
  </tr>
  <tr>
    <td class="ttl" width="154">&nbsp;</td>
    <td class="nfo" width="465">&nbsp;</td>
  </tr>
</table>
<table cellSpacing="0" width="690">
  <tr>
    <th rowSpan="3" scope="row" width="67">Sound</th>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alert types</b></td>
    <td class="nfo" width="464"><b>Vibration, MP3, WAV ringtones</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Loudspeaker
    </b>
    </td>
    <td class="nfo" width="464"><b>Yes, with stereo speakers</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.5mm jack
    </b>
    <hr>
    </td>
    <td class="nfo" width="464"><b>Yes</b><hr></td>
  </tr>
</table>
<table cellSpacing="0" width="688">
  <tr>
    <th rowSpan="2" scope="row" width="67">Memory</th>
    <td class="ttl" width="152"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Card 
    slot</b></td>
    <td class="nfo" width="463"><b>microSD, up to 32 GB</b></td>
  </tr>
  <tr>
    <td class="ttl" width="152"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Internal</b><hr></td>
    <td class="nfo" width="463"><b>8 GB, 1 GB RAM</b><hr></td>
  </tr>
</table>
<table cellSpacing="0" width="687">
  <tr>
    <th rowSpan="8" scope="row" width="65">Data</th>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GPRS</b></td>
    <td class="nfo" width="463"><b>Yes</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EDGE</b></td>
    <td class="nfo" width="463"><b>Yes</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Speed</b></td>
    <td class="nfo" width="463"><b>HSPA</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WLAN</b></td>
    <td class="nfo" width="463"><b>Wi-Fi 802.11 b/g/n, hotspot</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bluetooth</b></td>
    <td class="nfo" width="463"><b>v4.0, A2DP, apt-X</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; USB</b><hr></td>
    <td class="nfo" width="463"><b>microUSB v2.0</b><hr></td>
  </tr>
</table>
<table cellSpacing="0" width="687">
  <tr>
    <th rowSpan="4" scope="row" width="65">Camera</th>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primary</b></td>
    <td class="nfo" width="463"><b>8 MP, 3264 x 2448 pixels, autofocus, LED flash</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Features</b></td>
    <td class="nfo" width="463"><b>Geo-tagging, touch focus, face detection, 
    panorama</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Video</b></td>
    <td class="nfo" width="463"><b>1080p@30fps</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secondary</b><hr></td>
    <td class="nfo" width="463"><b>5 MP</b><hr></td>
  </tr>
</table>
<table cellSpacing="0" width="686">
  <tr>
    <th rowSpan="14" scope="row" width="64">Features</th>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OS</b></td>
    <td class="nfo" width="463"><b>Android OS, v4.4.4 (KitKat)</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chipset</b></td>
    <td class="nfo" width="463"><b>Mediatek MT6592</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CPU</b></td>
    <td class="nfo" width="463"><b>Octa-core 1.7 GHz Cortex-A7</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GPU</b></td>
    <td class="nfo" width="463"><b>Mali-450MP4</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sensors</b></td>
    <td class="nfo" width="463"><b>Accelerometer, proximity</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Messaging</b></td>
    <td class="nfo" width="463"><b>SMS (threaded view), MMS, Email, Push Email</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Browser</b></td>
    <td class="nfo" width="463"><b>HTML5</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Radio</b></td>
    <td class="nfo" width="463"><b>FM radio</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GPS</b></td>
    <td class="nfo" width="463"><b>Yes, with A-GPS, GLONASS</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Java</b></td>
    <td class="nfo" width="463"><b>Yes, via Java MIDP emulator</b></td>
  </tr>
  <tr>
    <td class="ttl" width="153"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Colors</b><hr></td>
    <td class="nfo" width="463"><b>Black, White</b><hr></td>
  </tr>
  
</table>
<table cellSpacing="0" width="686">
  <tr>
    <th rowSpan="3" scope="row" width="65">Battery</th>
    <td class="ttl" width="152">&nbsp;</td>
    <td class="nfo" width="463"><b>Li-Po 2100 mAh battery</b></td>
  </tr>
</table>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>