<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from products ");


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


while(rs.next())
{
out.println("<tr>");
out.println("<td>");out.println(rs.getString(1));out.println("</td>");
out.println("<td>");out.println(rs.getString(2));out.println("</td>");
out.println("<td>");out.println(rs.getString(3));out.println("</td>");
out.println("<td>");out.println(rs.getInt(4));out.println("</td>");
out.println("<td>");out.println(rs.getInt(5));out.println("</td>");
out.println("<td>");
%>
<body background="blue-polygon-28641-1366x768.jpg">

&nbsp;<img src="<%=rs.getString(6)%>" height=100 width=100><%
out.println("</td>");
out.println("</tr>");

}
out.println("</table>");
conn.close();
pst.close();

}
catch(Exception h)
{
out.println("failed="+h);
}
%>