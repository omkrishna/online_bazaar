<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String b="multiple";
String uname=request.getParameter("cun");
String upass=request.getParameter("cps");
String pna=(String)session.getAttribute("na");
int pid=(Integer)session.getAttribute("id");
int ppr=(Integer)session.getAttribute("pr");
int bal=(Integer)session.getAttribute("bal");
%>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from tab where un=? and ps=?");
pst.setString(1,uname);
pst.setString(2,upass);
ResultSet rs=pst.executeQuery();
if(rs.next())
{
if(bal>=ppr)
bal=bal-ppr;
else
{
response.sendRedirect("userindex.jsp");
out.println("Inadequate Balance");
}
}
conn.close();
pst.close();

}
catch(Exception e)
{
out.println("failed="+e);
}
%>




<%
try
{
Connection conn=null;
PreparedStatement pst=null;
PreparedStatement pst2=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");

pst=conn.prepareStatement("insert into dummycart values(?,?,?,?,?)");
pst.setString(1,uname);
pst.setString(2,upass);
pst.setString(3,pna);
pst.setInt(4,pid);
pst.setInt(5,ppr);


pst.executeUpdate();
out.println("Product Inserted Into Cart");

pst2=conn.prepareStatement("insert into cart values(?,?,?,?,?,?)");

pst2.setString(1,uname);
pst2.setString(2,upass);
pst2.setString(3,pna);
pst2.setInt(4,pid);
pst2.setInt(5,ppr);
pst2.setString(6,b);

pst2.executeUpdate();

conn.close();
pst.close();
pst2.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%>








<br>
<a href="cart.jsp">View Cart</a>
<br><a href="userindex.jsp">Buy Something More</a>
<br><a href="stop_buying.jsp">Done Shopping,Stop Buying</a>
<body text="#FFFFFF" bgcolor="#008080" background="blue-polygon-28641-1366x768.jpg">
<HR>
<H5>
Authored by OM KRISHNA.<br>Copyright © 1999 [GMMO]. All rights reserved. <BR>
Revised: 
<!--WEBBOT BOT=TimeStamp
    S-Type="EDITED"
    S-Format="%m/%d/%y" startspan
-->12/02/14<!--WEBBOT BOT=TimeStamp endspan i-checksum="12817"
--></H5>
