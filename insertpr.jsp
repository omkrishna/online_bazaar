<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("insert into products values(?,?,?,?,?,?)");

pst.setString(1,request.getParameter("nm"));
pst.setString(2,request.getParameter("ca"));
pst.setString(3,request.getParameter("sca"));
pst.setInt(4,Integer.parseInt(request.getParameter("id")));
pst.setInt(5,Integer.parseInt(request.getParameter("pr")));
pst.setString(6,request.getParameter("img"));

pst.executeUpdate();
out.println("data inserted");
conn.close();
pst.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%>
<br>
<a href="insertpr.html">Once Again</a>
<BODY text="#FFFFFF" background="blue-polygon-28641-1366x768.jpg">
<HR>
<H5>
Authored by OM KRISHNA.<br>Copyright © 1999 [GMMO]. All rights reserved. <BR>
Revised: 
<!--WEBBOT BOT=TimeStamp
    S-Type="EDITED"
    S-Format="%m/%d/%y" startspan
-->12/02/14<!--WEBBOT BOT=TimeStamp endspan i-checksum="12817"
--></H5>