$(document).ready(function () {
    $.ajax({
        type:"GET",
        url:"./json/json2.json",
        dataType:"json",
        success:function(data){
         var html='';
         $.each(data,function(i,item){
            html += '<tr><td  align="center">'+item['科目']+'</td>'+
            '<td align="center">'+item['成绩']+'</td>'+
            '<td align="center">'+item['级别']+'</td></tr>';
         })
          $("#title").after(html);
        }
    })
})