<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String n=(String)session.getAttribute("name");
String p=request.getParameter("ps");
String p2=request.getParameter("ps2");
%>
<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("Update tab set ps=? where un=? and  ps=?");
pst.setString(1,p2);
pst.setString(2,n);
pst.setString(3,p);

pst.executeUpdate();
response.sendRedirect("userindex.jsp");
conn.close();
pst.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%>
