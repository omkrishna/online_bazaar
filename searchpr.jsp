<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;

Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");

conn=DriverManager.getConnection("Jdbc:Odbc:pro");

pst=conn.prepareStatement("select * from products where id=?");

pst.setInt(1,Integer.parseInt(request.getParameter("n1")));
ResultSet rs=pst.executeQuery();

out.println("<table border=4  width=500>");
out.println("<tr>");
out.println("<td>");out.println("Name");out.println("</td>");
out.println("<td>");out.println("Category");out.println("</td>");
out.println("<td>");out.println("Sub Category");out.println("</td>");
out.println("<td>");out.println("Id");out.println("</td>");
out.println("<td>");out.println("Price");out.println("</td>");
out.println("<td>");out.println("Image");out.println("</td>");
out.println("</tr>");
if(rs.next())
{
out.println("<tr>");
out.println("<td>");out.println(rs.getString(1));out.println("</td>");
out.println("<td>");out.println(rs.getString(2));out.println("</td>");
out.println("<td>");out.println(rs.getString(3));out.println("</td>");
out.println("<td>");out.println(rs.getInt(4));out.println("</td>");
out.println("<td>");out.println(rs.getInt(5));out.println("</td>");
out.println("<td>");
%>
<img src="<%=rs.getString(6)%>" height=100 width=100>
<%
out.println("</td>");
out.println("</tr>");
}

conn.close();
pst.close();
}

catch(Exception e)
{
out.println("SEARCH FAILED="+e);
}
%>

