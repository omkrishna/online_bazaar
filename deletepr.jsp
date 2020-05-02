<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");

pst=conn.prepareStatement("delete from products where id=?");
pst.setInt(1,Integer.parseInt(request.getParameter("n1")));


pst.executeUpdate();
out.println("REQUESTED DATA DELETED");
conn.close();
pst.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%>
