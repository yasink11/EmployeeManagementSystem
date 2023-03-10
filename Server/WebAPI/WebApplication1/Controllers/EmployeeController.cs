using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Net.Http;
using System;
using System.Web.Http;
using WebApplication1.Models;
using System.Net;
using System.Web;

namespace WebApplication1.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select EmployeeId,EmployeeName,Department,
                    convert(varchar(10),DateOfJoining,120) as DateOfJoining,
                    PhotoFileName, hasDriverLicense
                    from
                    dbo.Employee
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["YASINKARACAM"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(Employee emp)
        {
            try
            {
                string query = @"
                    insert into dbo.Employee values
                    (
                    '" + emp.EmployeeName + @"'
                    ,'" + emp.Department + @"'
                    ,'" + emp.DateOfJoining + @"'
                    ,'" + emp.PhotoFileName + @"'
                    ,'" +emp.hasDriverLicense+@"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["YASINKARACAM"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Başarıyla Eklendi";
            }
            catch (Exception)
            {

                return "Eklenemedi";
            }
        }


        public string Put(Employee emp)
        {
            try
            {
                string query = @"
                    update dbo.Employee set 
                    EmployeeName='" + emp.EmployeeName + @"'
                    ,Department='" + emp.Department + @"'
                    ,DateOfJoining='" + emp.DateOfJoining + @"'
                    ,PhotoFileName='" + emp.PhotoFileName + @"'
                    ,hasDriverLicense='" +emp.hasDriverLicense+@"'
                    where EmployeeId=" + emp.EmployeeId + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["YASINKARACAM"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Başarıyla Güncellendi";
            }
            catch (Exception)
            {

                return "Güncellenemedi";
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Employee 
                    where EmployeeId=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["YASINKARACAM"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Başarıyla Silindi";
            }
            catch (Exception)
            {

                return "Silinemedi";
            }
        }

        [Route("api/Employee/GetAllDepartmentNames")]
        [HttpGet]
        public HttpResponseMessage GetAllDepartmentNames()
        {
            string query = @"
                    select DepartmentName from dbo.Department";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["YASINKARACAM"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route("api/Employee/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous.png";
            }
        }
    }
}
