<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	int total = 30;
	String pageNum = request.getParameter("page");
	String start = request.getParameter("start");
	String limit = request.getParameter("limit");
	start = start==null ?"0":start;
	limit = limit==null ?"0":limit;
	int startInt = Integer.parseInt(start) ;
	int limtInt = Integer.parseInt(limit);
	StringBuffer str = new StringBuffer();
	str.append("{total:30,colums:[");
	for(int i=startInt;i<limtInt+startInt-1;i++){
		str.append(" {firstname:'Michael"+i+"', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'},");
	}
	str.append(" {firstname:'Michael--', lastname:'Scott', seniority:7, dep:'Management', hired:'01/10/2004'}]}");
	response.getWriter().write(str.toString());
%>
