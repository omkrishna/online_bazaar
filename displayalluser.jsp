<%@ page language="java" %>
<%@ page import="java.sql.*;" %>

<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from tab ");


ResultSet rs=pst.executeQuery();


out.println("<table border=4  width=500>");
out.println("<tr>");
out.println("<td>");out.println("Name");out.println("</td>");
out.println("<td>");out.println("Password");out.println("</td>");
out.println("<td>");out.println("Email id");out.println("</td>");
out.println("<td>");out.println("Phone");out.println("</td>");
out.println("<td>");out.println("Account no");out.println("</td>");
out.println("<td>");out.println("Balance");out.println("</td>");
out.println("</tr>");

while(rs.next())
{
out.println("<tr>");
out.println("<td>");out.println(rs.getString(1));out.println("</td>");
out.println("<td>");out.println(rs.getString(2));out.println("</td>");
out.println("<td>");out.println(rs.getString(4));out.println("</td>");
out.println("<td>");out.println(rs.getString(5));out.println("</td>");
out.println("<td>");out.println(rs.getString(6));out.println("</td>");
out.println("<td>");out.println(rs.getInt(7));out.println("</td>");

}
out.println("</table>");
conn.close();
pst.close();

}
catch(Exception h)
{
out.println("failed="+h);
}
%><body background="blue-polygon-28641-1366x768.jpg">