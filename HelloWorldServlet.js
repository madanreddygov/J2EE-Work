import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloWorldServlet extends HttpServlet
{
   public void doGet(HttpServletRequest request,HttpServletresponse)
   throws IOException,SevletException
   {
     response.setContentType("text/html");
     PrintWriter out=response.getWriter();
     out.println("<html> <head> <title>Hellowrold!..</title>");
     out.println("<body>Hello World Welcome Apache</body>");
     out.println("</html>");
   }
}