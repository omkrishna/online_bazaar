<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String b="single";
String uname=request.getParameter("bun");
String upass=request.getParameter("bps");
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
PreparedStatement pst2=null;
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
out.println("Inadequate Balance");
response.sendRedirect("userindex.jsp");
}
}
pst2=conn.prepareStatement("update tab set balance=? where un=? and ps=?");
pst2.setInt(1,bal);
pst2.setString(2,uname);
pst2.setString(3,upass);


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




<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("insert into cart values(?,?,?,?,?,?)");

pst.setString(1,uname);
pst.setString(2,upass);
pst.setString(3,pna);
pst.setInt(4,pid);
pst.setInt(5,ppr);
pst.setString(6,b);

pst.executeUpdate();
out.println("WELL DONE");
out.println("<br>"+"You Just Bought an  "+pna+".");
out.println("<br>"+"Your Order Will Be Received Shortly At Your Destination");
conn.close();
pst.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%>









<a href="index.html">LOG OUT</a>
<br><a href="userindex.jsp">Buy Something More</a>
<BODY text="#FFFFFF" bgcolor="#008080">
<HR>
<H5>
Authored by OM KRISHNA.<br>Copyright © 1999 [GMMO]. All rights reserved. <BR>
Revised: 
<!--WEBBOT BOT=TimeStamp
    S-Type="EDITED"
    S-Format="%m/%d/%y" startspan
-->12/02/14<!--WEBBOT BOT=TimeStamp endspan i-checksum="12817"
--></H5>
