<body text="#FFFFFF" background="blue-polygon-28641-1366x768.jpg">

<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String un=(String)session.getAttribute("name");
String ps=(String)session.getAttribute("pass");
int bal=(Integer)session.getAttribute("bal");
int t=0;
%>
<%
try
{
Connection conn=null;
PreparedStatement pst=null;
PreparedStatement pst2=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from dummycart where uname=? and upass=? ");
pst.setString(1,un);
pst.setString(2,ps);

ResultSet rs=pst.executeQuery();
out.println("Here's Your Final Cart");
out.println("<table border=4  width=500>");
out.println("<tr>");
out.println("<td>");out.println("Product name");out.println("</td>");
out.println("<td>");out.println("Product Id");out.println("</td>");
out.println("<td>");out.println("Product Price");out.println("</td>");
out.println("</tr>");


while(rs.next())
{
int pr=rs.getInt(5);
out.println("<tr>");
out.println("<td>");out.println(rs.getString(3));out.println("</td>");
out.println("<td>");out.println(rs.getInt(4));out.println("</td>");
out.println("<td>");out.println(pr);out.println("</td>");
out.println("</tr>");
t=t+pr;
}

out.println("</table>");
out.println("Total Purchase = "+t);

conn.close();
pst.close();

}
catch(Exception h)
{
out.println("failed="+h);
}

try
{
Connection conn=null;
PreparedStatement pst=null;
PreparedStatement pst2=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from tab where un=? and ps=?");
pst.setString(1,un);
pst.setString(2,ps);
ResultSet rs=pst.executeQuery();
if(rs.next())
{
if(bal>=t)
bal=bal-t;
else
{
response.sendRedirect("userindex.jsp");
out.println("Inadequate Balance");
}
}
pst2=conn.prepareStatement("update tab set balance=? where un=? and ps=?");
pst2.setInt(1,bal);
pst2.setString(2,un);
pst2.setString(3,ps);


pst2.executeUpdate();
out.println("<br>");
out.println("Thank You Buying On ONL!NE B@zzAR.Happy New Year");
conn.close();
pst.close();
pst2.close();
}
catch(Exception e)
{
out.println("failed="+e);
}
%><br>
<a href="index.html">LOG OUT</a>
