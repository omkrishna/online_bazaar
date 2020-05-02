<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("insert into tab values(?,?,?,?,?,?,?)");

pst.setString(1,request.getParameter("un"));
pst.setString(2,request.getParameter("ps"));
pst.setString(3,request.getParameter("psv"));
pst.setString(4,request.getParameter("em"));
pst.setString(5,request.getParameter("ph"));
pst.setString(6,request.getParameter("acc"));
pst.setInt(7,Integer.parseInt(request.getParameter("bal")));


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
<a href="index.html">MOVE to HOMEPAGE</a>
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
