<%@ page language="java" %>
<%@ page import="java.sql.*;" %>
<%
String un=(String)session.getAttribute("name");
String ps=(String)session.getAttribute("pass");
int t=0;
%>
<%
try
{
Connection conn=null;
PreparedStatement pst=null;
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
conn=DriverManager.getConnection("Jdbc:Odbc:pro");
pst=conn.prepareStatement("select * from dummycart where uname=? and upass=? ");
pst.setString(1,un);
pst.setString(2,ps);

ResultSet rs=pst.executeQuery();

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
%>
