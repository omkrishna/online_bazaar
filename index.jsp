<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
String name,pass;
String n=request.getParameter("un");
String p=request.getParameter("ps");

try
{
Connection conn=null;
PreparedStatement pst=null;
PreparedStatement pst2=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");

conn=DriverManager.getConnection("Jdbc:Odbc:pro");

pst=conn.prepareStatement("select * from tab where un=? and ps=?");

pst.setString(1,n);

pst.setString(2,p);


ResultSet rs=pst.executeQuery();

if(rs.next())
{
int bal=rs.getInt(7);
session.setAttribute("name",n);
session.setAttribute("pass",p);
session.setAttribute("bal",bal);
response.sendRedirect("userindex.jsp");
}
else
out.println("invalid username or password");

pst2=conn.prepareStatement("delete from dummycart");
pst2.executeUpdate();

conn.close();
pst.close();
pst2.close();
}

catch(Exception e)
{
out.println("SEARCH FAILED="+e);
}
%>
<HR>
<H5>
Authored by OM KRISHNA.<br>Copyright © 1999 [GMMO]. All rights reserved. <BR>
Revised: 
<!--WEBBOT BOT=TimeStamp
    S-Type="EDITED"
    S-Format="%m/%d/%y" startspan
-->12/02/14<!--WEBBOT BOT=TimeStamp endspan i-checksum="12817"
--></H5>

